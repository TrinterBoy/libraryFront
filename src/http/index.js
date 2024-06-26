 import axios from "axios";
const URL = "https://libraryback-j3lh.onrender.com"
 // const URL = "http://localhost:8080"

const $host = axios.create({
    baseURL:URL
})

const $authHost = axios.create({
    baseURL:URL
})

const authInterceptor = config=>{
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}