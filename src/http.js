import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const currencyId = localStorage.getItem('currencyId');

const instance = axios.create({
  baseURL: "https://instinstinst-001-site1.htempurl.com/api/",
  
  // https://0f8b-196-221-165-145.ngrok-free.app
  // http://akaminst-001-site1.gtempurl.com
  headers: {
    "Content-Type": "application/json",
    "Accept-Language":localStorage.getItem('lang') || 'en',
    "branchId" : currencyId,


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
    let err = document.querySelector("#loaders4")

    
    if (error.response.data.errors) {
      Swal.fire({
        title: 'Error!',
        text: `${error.response.data.errors}`,
        icon: 'error',
        
      })
      err.style.display = "none"
    }
    
    
    return Promise.reject(error)
  },
)

export default instance
