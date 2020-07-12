import Home from "./pages/home.vue"
import Checkout from "./pages/checkout/checkout.vue"
import Orders from "./pages/orders"
import Cart from "./pages/shopping-cart.vue"
import Login from "./pages/auth/login.vue"
import OrdersSuccess from "./pages/order-success"
import AdminOrders from "./pages/admin/admin-orders.vue"
import AdminProducts from "./pages/admin/admin-products.vue"
import Logout from "./pages/auth/logout.vue"
import SignUp from "./pages/auth/signUp.vue"
import VueRouter from "vue-router"
import Vue from 'vue'
import {store} from "./Store/store"

let guard = (to,from,next)=>{

    if(localStorage.getItem("token")){
        next()
    }
    else{
    next("/login")
    }
}

let adminGuard = (to , from ,next)=>{
    let admin = store.state.authModule.admin
    if(localStorage.getItem("token") && admin){
        next()
    }
    else{
    next("/")


    }
}


 const routes = [
    
    {path:"/admin/products" , name:"AdminProducts" ,beforeEnter:adminGuard, component:AdminProducts},
    {path:"/admin/orders" , name:"AdminOrders" ,beforeEnter:adminGuard, component:AdminOrders},
    {path:"/order-success" ,name:"OrderSuccess" , component:OrdersSuccess},
    {path:"/cart" , name:"Cart"   , component:Cart},
    {path:"/checkout" ,name:"Checkout"  ,beforeEnter:guard, component:Checkout},
    {path:"/login"  , component:Login},
    {path:"/logout"  , component:Logout},
    {path:"/signUp"  , component:SignUp},
    {path:"/orders" , name:"Orders"  , beforeEnter:guard , component:Orders},
    // {path:"/products", name:"Products" , component:Products},
    {path:"/", name:"Home" , component:Home},
    {path:"*" , redirect:"/"}




]

Vue.use(VueRouter)


export const router = new VueRouter({
    mode:'history',
    routes
  }) 