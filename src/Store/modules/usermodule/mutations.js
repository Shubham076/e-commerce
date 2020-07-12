export const userdetails = (state,userData)=>{
    state.user = userData
    let cartLength = 0;
    
    for(let item of userData.cart){
        cartLength +=item.count
    }
    state.cartLength = cartLength
}



export const userdetailsFailure = (state,error)=>{
    state.userError = error
}

export const addInCart = (state,product)=>{

    let cart = [...state.user.cart]
    let index = cart.findIndex(p=>p.productId === product.productId);
    let item;


    if(index !== -1){
        
        item = {...cart[index]}
        item.count +=1;
        state.cartLength +=1;
        cart[index] = item;
        state.user.cart = cart

    }
    else{

    
        let newItem = {
            count:1,
            ...product
        }

        cart.push(newItem)
        state.user.cart = cart
        state.cartLength +=1;

    }
}


export const removeFromCart = (state,product)=>{

    let cart = [...state.user.cart]
    let index = cart.findIndex(p=>p.productId === product.productId)
    let item = {...cart[index]}

    
    
        
        if(item.count >1){
            
            item.count -=1;
            cart[index] = item
            state.user.cart = cart
            state.cartLength -=1;

        }
        else{
        
            
            state.user.cart.splice(index,1);

            if(state.user.cart.length>=1){
                state.cartLength -=1
            }
            
            if(state.user.cart.length === 0){
                state.cartLength = 0
            }
        }
}

export const clearCart = state=>{

    state.tempCart = state.user.cart

    state.user.cart = []
    state.cartLength = 0

}

export const clearCartFailure = state=>{

    state.user.cart = state.tempCart
    state.cartLength = state.user.cart.length

}

