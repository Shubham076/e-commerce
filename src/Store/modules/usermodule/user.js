import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"


export default {
    state:{
        user:null,
        userError:null,
        cartLength:null,
        // id of particular product in cart
        id:null,
        tempCart:null
    },
    actions,
    getters,
    mutations
}