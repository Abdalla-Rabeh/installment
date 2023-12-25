import axios from "axios"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


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
instance.interceptors.response.use(
  response => {
    // Handle the successful response here
    return response
  },
  error => {
    console.log(error.response.data.errors)
    
    if (error.response.data.errors) {
     
      Swal.fire({
        title: 'Error!',
        text: `${error.response.data.errors}`,
        icon: 'error',
        
      })
    }
    
    return Promise.reject(error)
  },
)

export default instance
