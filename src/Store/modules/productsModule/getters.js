

export const getProducts =(state)=>{
        return state.products ? state.products:null
}


export const filteredProducts = (state)=>{
        return state.filteredProducts
}

export const loadingProducts = state=>{
        return state.loadingProducts
}