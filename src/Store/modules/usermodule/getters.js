

export const cartLength = state=>{
    return state.cartLength
}

export const cart = state=>{
    let cart = state.user ?state.user.cart:null
    return cart
}


export const user = state=>{
    return state.user
}

export const price = (state)=>{
    if(!state.user){
        return 0
    }
    
    let cart = state.user.cart;
    let price = 0;


        for(let item of cart){
            price += item.price * item.count
        }   

    


    return price
}

