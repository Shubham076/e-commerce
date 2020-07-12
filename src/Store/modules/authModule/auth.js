import * as actions from  "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"

export default {
    state:{
        token:null,
        username:null,
        admin:false,
        loading:false,
        error:null
    },
    mutations,
    actions,
    getters
}