import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

client.interceptors.request.use(
  config => {
    config.headers.icode = '94EDCD456BE5B0CF'
    return config
  }
)

const http = (url: string, method: 'GET' | 'POST' | 'PUT', params?: Record<string, unknown>, configs?: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    client({ url, method, params, ...configs }).then((response: AxiosResponse<{ success: boolean, message: string, data: any}>) => {
      const { data } = response.data;
      resolve(data)
    }).catch(error => {
      if (error.response) {
        return Promise.reject(error.response.data);
      } else if (error.request) {
        return Promise.reject('网络连接出错');
      } else {
        return Promise.reject('未知错误');
      }
    })
  })
}

export default http;