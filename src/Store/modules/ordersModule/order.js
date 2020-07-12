import * as actions from "./actions.js"
import * as getters from "./getters"
import * as mutations from "./mutations"

export default {
    state:{
        orders:[],
        error:null,
        loading:false
    },
    actions,
    getters,
    mutations

}
