import axios from 'axios'

const api = axios.create({
baseURL: '/', // ใช้ Vite Proxy
})

export default api

