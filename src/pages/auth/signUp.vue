<template>
  <mdbContainer id="container">
    <form id="form" @submit="submit">
      <p class="h4 text-center mb-4">SignUp</p>
      <div class="grey-text">
        <div class="invalid__username" :class="{ invalid: $v.username.$error }">
          <mdb-input
            label="Username"
            v-model="username"
            @blur="$v.username.$touch()"
            icon="envelope"
            type="text"
          />
          <div v-if="$v.username.$error">
            <span id="errorBox__username" v-if="!$v.username.required"
              >This field is required</span
            >
            <span id="errorBox__username" v-if="!$v.username.unique"
              >This username already exists</span
            >
          </div>
        </div>

        <div class="invalid__email" :class="{ invalid: $v.email.$error }">
          <mdb-input
            label="Your email"
            v-model="email"
            @blur="$v.email.$touch()"
            icon="envelope"
            type="email"
          />
          <div v-if="$v.email.$error">
            <span id="errorBox__email" v-if="!$v.email.required"
              >This field is required</span
            >
            <span id="errorBox__email" v-if="!$v.email.email"
              >Please enter a valid email</span
            >
          </div>
        </div>

        <div class="invalid__password" :class="{ invalid: $v.password.$error }">
          <mdb-input
            label="Password"
            v-model="password"
            @blur="$v.password.$touch()"
            icon="exclamation-triangle"
            type="password"
          />
          <div v-if="$v.password.$error">
            <span id="errorBox__password" v-if="!$v.password.required"
              >This field is required</span
            >
            <span id="errorBox__password" v-if="!$v.password.minLen"
              >Password should be atleast 6 characters long</span
            >
          </div>
        </div>

        <div
          class="invalid__confirmPassword"
          :class="{ invalid: $v.confirmPassword.$error }"
        >
          <mdb-input
            label="Confirm Password"
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch()"
            icon="exclamation-triangle"
            type="password"
          />
          <div v-if="$v.confirmPassword.$error">
            <span
              id="errorBox__confirmPassword"
              v-if="!$v.confirmPassword.sameas"
              >Passwords dont match...</span
            >
          </div>
        </div>
      </div>

      <div class="text-center">
        <mdb-btn
          color="success btn-block"
          :disabled="$v.$invalid"
          @click="submit"
          :style="{ marginBottom: '10px' }"
          ><div  v-if="loading" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-if="!loading">Submit</span>
          
          </mdb-btn
        >
      </div>
      <router-link to="/login" style='{cursor:"pointer"}' tag="a"
        >Already have an account ? Click here</router-link
      >
    </form>
  </mdbContainer>
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer } from "mdbvue";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from "../../server";
import {mapGetters} from "vuex"
export default {
  name: "Basic",
  components: {
    mdbInput,
    mdbBtn,
    mdbContainer,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(6),
    },
    confirmPassword: {
      sameas: sameAs("password"),
    },
    username: {
      required,
      unique: (val) => {
        if (val === "") return true;
        return axios
          .post("/validateUsername", { username: val })
          .then((res) => {
            let value = res.data.found;
            return !value;
          })
          .catch((err) => {
            console.log(err.response);
          });
      },
    },
  },

  methods: {
    submit() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        admin: this.$route.query.admin,
      };
      this.$store.dispatch("auth", user);
    },
  },

  computed:{
    ...mapGetters([
      'loading'
    ])
  }
};
</script>

<style lang="scss">
#form {
  height: 500px;
  width: 500px;
  margin-top: 100px;
  position: relative;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin errorbox {
  margin-bottom: 50px;
}

.invalid {
  &__email {
    @include errorbox;
  }

  &__password {
    @include errorbox;
  }

  &__confirmPassword {
    @include errorbox;
  }

  &__username {
    @include errorbox;
  }
}

.invalid .md-form input[type="email"]:not(.browser-default) {
  border-bottom-color: red;
}

.invalid .md-form input[type="text"]:not(.browser-default) {
  border-bottom-color: red;
}

.invalid .md-form input[type="password"]:not(.browser-default) {
  border-bottom-color: red;
}

@mixin errorBox {
  color: red;
  font-size: 14px;
  position: absolute;
  left: 10%;
}

#errorBox__email {
  @include errorBox;
  top: 42%;
}

#errorBox__password {
  @include errorBox;
  top: 62%;
}

#errorBox__confirmPassword {
  @include errorBox;
  top: 81%;
}

#errorBox__username {
  @include errorBox;
  top: 22%;
}
</style>
