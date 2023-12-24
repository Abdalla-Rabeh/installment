import axios from "axios"

// import { useToast } from "vue-toastification";
// const toast = useToast();

const instance = axios.create({
  baseURL: "http://akaminst-001-site1.gtempurl.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
})
const token = localStorage.getItem('token')
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Request Interceptor
instance.interceptors.request.use(
  config => {
    // Modify the request config before it's sent
    // For example, you can add an authorization header
    // config.headers.Authorization = "Bearer YourToken";
    return config
  },
  error => {
    // Handle request error
    return Promise.reject(error)
  },
)

// Response Interceptor
// instance.interceptors.response.use(
//   response => {
//     // Handle the successful response here
//     return response
//   },
//   error => {
//     let err = document.querySelector("#loaders4")
//     if (error.response.data.msg) {
//       toast.error(error.response.data.msg[0])
//       err.style.display = "none"
//     }
    
//     return Promise.reject(error)
//   },
// )

export default instance
