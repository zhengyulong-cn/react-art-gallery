import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
})

http.interceptors.request.use(
  config => {
    config.headers.icode = '94EDCD456BE5B0CF'
    return config
  }
)

http.interceptors.response.use((response) => {
  const { success, message, data} = response.data
  if (success) {
    return data
  }
  return Promise.reject(new Error(message))
})

export default http;