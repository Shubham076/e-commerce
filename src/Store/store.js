import Vue from "vue"
import Vuex from "vuex"
import authModule from "./modules/authModule/auth"
import userModule from "./modules/usermodule/user"
import adminProductsModule from "./modules/adminProductsModule/adminproducts"
import productsModule from "./modules/productsModule/products"
import ordersModule from "./modules/ordersModule/order"

Vue.use(Vuex)
export const store =new Vuex.Store({
    modules:{
        authModule,
        userModule,
        adminProductsModule,
        productsModule,
        ordersModule
    }
})