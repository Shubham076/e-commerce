import axios from "../../../server"


export const getproducts = ({commit})=>{

    commit('getProductsStart')

    axios.get("/getProducts")
    .then(res=>{

        commit('getProducts',res.data.products)

    })
    .catch(err=>{

        commit('getproductsError',err.response.data.message)
    })

}

export const getFilteredProducts = ({commit},value)=>{
    commit('getFilteredProducts' , value)
}


