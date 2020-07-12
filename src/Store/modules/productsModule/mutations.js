export const getProducts = (state,data)=>{

    state.products  = data
    state.loadingProducts = false;
}

export const getproductsError = (state,err)=>{

    state.error = err
    state.loadingProducts = false
}


export const getFilteredProducts = (state,value)=>{

    let products = [...state.products].filter(p=>p.category ===value)
    state.filteredProducts = products


}

export const getProductsStart = state=>{
    state.loadingProducts = true;
}