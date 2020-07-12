export const authStart  = state=>{
    state.loading = true
}

export const authSuccess = (state,userData)=>{
    state.username = userData.username
    state.token = userData.token
    state.admin = userData.admin
    state.loading = false
}

export const authFailure = (state,error)=>{
    state.error = error
    state.loading = false
}

export const logout = (state)=>{
    state.token = null
    state.admin = false
    state.username = null
    state.error = null


}