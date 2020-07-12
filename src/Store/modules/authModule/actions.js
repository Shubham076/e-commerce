import axios from "../../../server"
import {router} from "../../../routes"
import jwtDecode from "jwt-decode" 


export const auth = ({commit,dispatch},user)=>{

    let url = "/login"
    if(user.username){
        url = "/signup"
    }

    commit('authStart')

    axios.post(url,user)
    .then(res=>{
    
        commit('authSuccess',res.data)
        router.push("/")

        let token = res.data.token
        let expirationDate = new Date(jwtDecode(token).exp*1000)
        let username = res.data.username
        let admin = res.data.admin
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`
        dispatch('getUserDetails',username)


        localStorage.setItem('token',token)
        localStorage.setItem('ExpirationDate',expirationDate)
        localStorage.setItem('Username',username)
        localStorage.setItem('admin',admin)


    })
    .catch(error=>{
        let err = error
        commit("authFailure" ,err.response.data.message)
    })
}

export const logout = ({commit})=>{
    localStorage.clear()
    delete axios.defaults.headers.common['authorization']
    commit('logout')
}


export const autologout = ({dispatch},time)=>{
    setTimeout(()=>{

    dispatch('logout')

    },time)
}

export const autoLogin = ({commit ,dispatch})=>{
    let token = localStorage.getItem('token')
    let expirationDate = new Date(localStorage.getItem('ExpirationDate'))

    if(!token){
        dispatch('logout')
}

    else if(expirationDate > new Date()){
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`
        let userData={
            token:localStorage.getItem('token'),
            username:localStorage.getItem('Username'),
            admin:JSON.parse(localStorage.getItem('admin'))

        }


        commit('authSuccess',userData)
        dispatch('autologout' , expirationDate.getTime() - new Date().getTime())
        dispatch('getUserDetails',userData.username)



    }

    else{
    dispatch('logout')
    }


}

