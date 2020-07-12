import axios from "../../../server"

export const getAdminProducts = ({commit})=>{

    axios.get("getAdminProducts")
    .then(res=>{
        commit('getAdminproducts',res.data.products)
    })

}

export const addAdminProducts = ({commit},product)=>{

    commit('addAdminProduct',product)
    
    axios.post('/createProduct',product)
    .then(res=>{
        
        commit('addId',res.data.id)
    })
    .catch(error=>{

        commit('addProductFailure',error.response.data.message)
    })
}

export const UpdateProduct = ({commit},data)=>{

    commit('UpdateProduct',data)

    axios.put(`/product/${data.id}`,{product:data.updatedProduct})
    .then(()=>{
        
    })
    .catch(()=>{
    
        commit('UpdateProductFailure',data.id)
    })
}


