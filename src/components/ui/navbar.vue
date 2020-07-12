<template>
    
    
    <mdb-navbar class="fixed-top" color="success-color" dark>
      <router-link to="/" id="brand">
        <mdb-navbar-brand>
          <svg class="icon__leaf" viewBox="0 0 32 32">
            <path d="M31.604 4.203c-3.461-2.623-8.787-4.189-14.247-4.189-6.754 0-12.257 2.358-15.099 6.469-1.335 1.931-2.073 4.217-2.194 6.796-0.108 2.296 0.278 4.835 1.146 7.567 2.965-8.887 11.244-15.847 20.79-15.847 0 0-8.932 2.351-14.548 9.631-0.003 0.004-0.078 0.097-0.207 0.272-1.128 1.509-2.111 3.224-2.846 5.166-1.246 2.963-2.4 7.030-2.4 11.931h4c0 0-0.607-3.819 0.449-8.212 1.747 0.236 3.308 0.353 4.714 0.353 3.677 0 6.293-0.796 8.231-2.504 1.736-1.531 2.694-3.587 3.707-5.764 1.548-3.325 3.302-7.094 8.395-10.005 0.292-0.167 0.48-0.468 0.502-0.804s-0.126-0.659-0.394-0.862z"></path>
          </svg>
      </mdb-navbar-brand>
      </router-link>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <router-link to="/"  id="link" active-class="link" exact><mdb-nav-item>Home</mdb-nav-item></router-link>

          <router-link to="/cart"  v-if="authenticated" id="link" active-class="link"><mdb-nav-item >
            <svg class="icon__store" viewBox="0 0 24 24">
              <path d="M17.016 18q0.797 0 1.383 0.609t0.586 1.406-0.586 1.383-1.383 0.586-1.406-0.586-0.609-1.383 0.609-1.406 1.406-0.609zM0.984 2.016h3.281l0.938 1.969h14.813q0.422 0 0.703 0.305t0.281 0.727q0 0.047-0.141 0.469l-3.563 6.469q-0.563 1.031-1.734 1.031h-7.453l-0.891 1.641-0.047 0.141q0 0.234 0.234 0.234h11.578v2.016h-12q-0.797 0-1.383-0.609t-0.586-1.406q0-0.469 0.234-0.938l1.359-2.484-3.609-7.594h-2.016v-1.969zM6.984 18q0.797 0 1.406 0.609t0.609 1.406-0.609 1.383-1.406 0.586-1.383-0.586-0.586-1.383 0.586-1.406 1.383-0.609z"></path>
            </svg>
            <button class="cart_no">{{cartLength ? cartLength:0}}</button></mdb-nav-item>
          </router-link>
          <router-link to="/login"  v-if="!authenticated" id="link" active-class="link"><mdb-nav-item >Login</mdb-nav-item></router-link>



            <mdb-dropdown tag="li" v-if="!authenticated" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="secondary-color-dark" slot="toggle" waves-fixed>SignUp</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              
              <router-link :to="{path:'/signUp' , query:{admin:false}}"><mdb-dropdown-item id="item">User</mdb-dropdown-item></router-link>
              <router-link :to="{path:'/SignUp' , query:{admin:true}}"><mdb-dropdown-item id="item">Admin</mdb-dropdown-item></router-link>
            


            
            </mdb-dropdown-menu>
          </mdb-dropdown>

          <mdb-dropdown tag="li" class="nav-item" v-if="authenticated">
            <mdb-dropdown-toggle tag="a" navLink color="secondary-color-dark" slot="toggle" waves-fixed>
              <svg class="icon__circle" viewBox="0 0 20 20">
                <path d="M10 20c-5.523 0-10-4.477-10-10s4.477-10 10-10v0c5.523 0 10 4.477 10 10s-4.477 10-10 10v0zM7 6v2c0 1.657 1.343 3 3 3s3-1.343 3-3v0-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v0zM3.35 14.44c1.456 2.155 3.89 3.553 6.65 3.553s5.194-1.398 6.632-3.525l0.018-0.028c-1.951-0.918-4.238-1.453-6.65-1.453s-4.699 0.536-6.748 1.495l0.098-0.041z"></path>
              </svg>
              {{username}}
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <router-link to="/orders"><mdb-dropdown-item id="item"> My Orders</mdb-dropdown-item></router-link>
              <router-link to="/admin/orders" v-if="admin"><mdb-dropdown-item id="item"> Manage Orders</mdb-dropdown-item></router-link>
              <router-link to="/admin/products" v-if="admin"><mdb-dropdown-item id="item">Manage Products</mdb-dropdown-item></router-link>
              <router-link to="/logout"><mdb-dropdown-item id="item"> Logout</mdb-dropdown-item></router-link>


            
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <form>
          <mdb-input  type="text" class="text-white" placeholder="Search"/>
        </form>
      </mdb-navbar-toggler>
    
    </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav,mdbDropdownToggle, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbInput, mdbDropdownItem } from 'mdbvue';
import {mapGetters} from "vuex"
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbDropdownToggle,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownItem,
    mdbInput,
    
  },

  data(){
    return{
    }
  },
  
  computed:{
    
      ...mapGetters([
        'username',
        'authenticated',
        'admin',
        'cartLength'

      ])
  },
  
}
</script>

<style lang="scss" scoped>
.secondary-color-dark{
background-color: green;
}

#brand{
  cursor: pointer;
}

#link{
  outline: none;
}


.link{
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
}

#item:hover{
  background-color: #eee;
}

.cart_no{
  border-radius: 10px;
  padding: 4px;
  color: #fff;
  background-color: #dfea12;
  width: 30px;
  font-weight: 400;
  border:none;
  outline: none;
  margin-top: -8px;

}

.icon__store,.icon__circle{
  height:25px;
  fill:#fff;
  margin-top: -8px;
}

.icon__store{
  margin-right: 10px;
}

.icon__circle{
  height: 20px;
}

.icon__leaf{
  fill:#fff;
  height: 25px;
  font-weight: 600;
}


@media screen and(max-width: 900px) {
  .link{
    border:none;
}

  
}



</style>