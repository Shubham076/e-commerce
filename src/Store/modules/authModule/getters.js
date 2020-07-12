export const username = state=>{
    return state.username
    
}

export const authenticated = state=>{

    let bool = state.token ? true:false
    return bool
}

export const admin = state=>{
    return state.admin
}

export const loading = state=>{
    return state.loading
}

