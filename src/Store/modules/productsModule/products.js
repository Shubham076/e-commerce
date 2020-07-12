import * as actions from "./actions"
import * as getters from "./getters"
import * as mutations from "./mutations"


export default {
    state:{
        products:null,
        filteredProducts:null,
        error:null,
        loadingProducts:false
    },
    actions,
    getters,
    mutations

}