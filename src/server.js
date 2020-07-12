import axios from "axios"

const instance = axios.create({
    // baseURL:"https://us-central1-e-commerce-e57bc.cloudfunctions.net/api"
    baseURL:"http://localhost:5000/e-commerce-e57bc/us-central1/api"

})

export default instance