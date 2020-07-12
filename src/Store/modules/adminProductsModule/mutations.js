export const getAdminproducts = (state,products)=>{
    state.adminProducts = products

}

export const addAdminProduct = (state,product)=>{

    state.adminProducts.splice(0 ,0 ,product)
}

export const addProductFailure = (state,error)=>{
    state.adminProducts.splice(0,1)
    state.error = error
}

export const addId = (state,id)=>{
    let product = {...state.adminProducts[0]}
    product.productId = id;
    let products = [...state.adminProducts]
    products[0] = product
    state.adminProducts = products
}

export const UpdateProduct = (state,{updatedProduct ,id})=>{

    let products = [...state.adminProducts]

    let index = products.findIndex(p=>p.productId === id)
    let Product = {...products[index]}
    state.tempProduct = Product
    Product = updatedProduct

    // as our updated Product dont have an id field
    Product.productId = id

    products[index] = Product
    state.adminProducts = products
}


export const UpdateProductFailure = (state,id)=>{
    let products = [...state.adminProducts]
    let index = products.findIndex(p=>p.productId === id)
    let Product = {...products[index]}
    
    Product = state.tempProduct
    products[index] = Product
    state.adminProducts = products

}