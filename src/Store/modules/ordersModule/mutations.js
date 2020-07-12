export const addOrder = (state,data)=>{
    state.orders.splice(0,0,data)
}

export const addOrderFailure = (state)=>{
    state.orders.splice(0,1)
}

export const getOrders = (state,data)=>{

    state.orders = data
    state.loading = false

}

export const getOrdersFailure = (state,error)=>{
    state.error= error;
    state.loading = false
}