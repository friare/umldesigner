import axios from 'axios'

const BaseURL       = 'http://127.0.0.1:8000'
const BaseURLSocket = 'http://127.0.0.1:8000/ws'

//Authorise
const getAPI = axios.create({
    baseURL: BaseURL,
    headers: sessionStorage.getItem('token') != undefined ? {"Authorization" : `Bearer ${sessionStorage.getItem('token')}`} : {}
})

//Intercaptor
getAPI.interceptors.request.use(
    function (config) {
        let token = sessionStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    }, 
    function (error) {
        return Promise.reject(error);
    }
);

getAPI.interceptors.response.use(
    function (response) {
        return response;
    }, 
    function (error) {
        if(error.response.data.detail == "Invalid credentials" || error.response.data.detail == "Could not validate credentials") {
            let acceptLogin = 0;
            while(!acceptLogin) {
                acceptLogin = confirm(error.response.data.detail + ". Your session expire. Please Login to continu.")
            }
            sessionStorage.removeItem('token')
            let a = document.createElement('a')
            a.setAttribute('href', "/connexion")
            a.click()
            a.remove()
        }
        else{
            return Promise.reject(error);
        }
    }
);

//Guest
const guestAPI = axios.create({
    headers: "Access-Control-Allow-Origin",
    baseURL: BaseURL,
})


export { getAPI, guestAPI, BaseURL, BaseURLSocket }