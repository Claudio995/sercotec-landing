import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

export const getServicios = () => api.get('/servicios').then(r => r.data)
export const getTestimonios = () => api.get('/testimonios').then(r => r.data)
export const getNosotros = () => api.get('/nosotros').then(r => r.data)
export const getFaq = () => api.get('/faq').then(r => r.data)