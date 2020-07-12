<template>
 <mdbContainer id="container">
<form id="form" novalidate @submit="submit">
 
    <p class="h4 text-center mb-4">Login</p>
    <div class="grey-text">
      
      <div :class="{invalid:$v.email.$error}" class="invalid__email">
        <mdb-input  label="Your email" v-model="email" @blur="$v.email.$touch()" icon="envelope" type="email"/>
      <div v-if="$v.email.$error">
          <span id="error__email" v-if="!$v.email.required">This field is required</span>
      </div>
      

      </div>
       
  <div :class="{invalid:$v.password.$error}" class="invald__password" >
       <mdb-input label="Password" v-model="password" @blur="$v.password.$touch()" icon="exclamation-triangle" type="password"/>
       <div v-if="$v.password.$error">
          <span id="error__password">This field is required</span>
      </div>
  </div>
 
    


    </div>
    <div class="text-center">
      <mdb-btn color="success" class="btn-block" @click="submit" :disabled="$v.$invalid">
        <div  v-if="loading" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <span v-if="!loading">Submit</span>
      </mdb-btn>
    </div>
  </form>

  </mdbContainer>
    
  
</template>

<script>

 import { mdbInput, mdbBtn , mdbContainer } from 'mdbvue';
 import {required} from "vuelidate/lib/validators"
 import {mapGetters} from "vuex"
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn,
      mdbContainer
    },
    data(){
        return{
            email:"",
            password:""
        }
    },

    validations:{
        email:{
            required
        },
        password:{
            required
        }
    },

    methods:{
      submit(){
        let user = {
          email:this.email,
          password:this.password
        }

        this.$store.dispatch('auth',user)
      },

    },

    computed:{
      ...mapGetters([
        'loading'
      ])
    }

  }
</script>

<style lang="scss">

#form{
    height: 500px;
    width: 500px;
    margin-top:100px;
    position: relative;
}

#container{
    display: flex;
    justify-content: center;
    align-items: center;

}

@mixin errorbox{
    margin-bottom:50px;

}


.invalid{
    &__email{
      @include errorbox;
}

    &__password{
      @include errorbox;
    }
}

.invalid .md-form input[type="email"]:not(.browser-default){
    border-bottom-color: red;
}

.invalid .md-form input[type="password"]:not(.browser-default){
    border-bottom-color: red;
}

@mixin errorBox{
    color:red;
    font-size: 14px;
    position: absolute;
    left:10%;

}

#error__email{

  @include errorBox;
  top:22%;
}

#error__password{
  @include errorBox;
  top:41%;
}

</style>