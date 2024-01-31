import axiosConfig from './config/axios.config'
import { DATA_PRODUCTOS } from './mocks/DATA_PRODUCTOS.js'

export const createProduct = (data, token) => {
  return axiosConfig.post('/api/productos', data, {
    headers: { authorization: `Bearer ${token.replace(/['"]+/g, '')}` }
  })
}

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    return resolve({
      data: DATA_PRODUCTOS
    })
  })
}

export const updateProduct = (id, data, token) => {
  return axiosConfig.put(`/api/productos/${id}`, data, {
    headers: { authorization: `Bearer ${token.replace(/['"]+/g, '')}` }
  })
}
export const getProductById = id => {
  return axiosConfig.get(`/api/productos/${id}`)
}

export const deleteProduct = (id, token) => {
  return axiosConfig.delete(`/api/productos/${id}`, {
    headers: { authorization: `Bearer ${token.replace(/['"]+/g, '')}` }
  })
}
