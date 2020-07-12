import axios from "../../../server"


export const getUserDetails = ({commit},username)=>{
    
    axios.post("/user",{username:username})
    .then(res=>{
        
        commit("userdetails",res.data.userData)
    })
    .catch(err=>{
        commit("userdetailsFailure" , err.response.data.message)
    })
}


export const addInCart = ({commit},product)=>{

    commit('addInCart',product)

    axios.post("/cart",{product:product})
    .then(()=>{
})
    .catch(()=>{
        commit('removeFromCart',product)
    })

}

export const removeFromCart = ({commit},product)=>{

    commit('removeFromCart',product)

    axios.post("/cart/remove",{product:product})
    .then(()=>{
})
    .catch(()=>{
        commit('addInCart',product)
    })

}

export const clearCart = ({commit})=>{
    commit('clearCart')

    axios.get("/cart/clear")
    .then(()=>{

    })
    .catch(err=>{
        commit('clearCartFailure',err)
    })
}


