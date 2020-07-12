import axios from "../../../server"
import {router} from "../../../routes"

export const addOrder = ({commit},order)=>{

    commit('addOrder',order)
    router.history.push("/orders")

    axios.post("/order",{order:order})
    .then(()=>{

    })
    .catch((err)=>{
        console.log(err)
        commit('addOrderFailure')
    })
}

export const getOrders = ({commit})=>{

    axios.get('/order')
    .then(res=>{
        commit('getOrders',res.data.orders)
    })
    .catch(err=>{
        commit('getOrdersFailure',err.response.data.message)
    })
}