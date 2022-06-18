import axiosConfig from './config/axios.config'

export const createNewPedido = (data, token) => {
  return axiosConfig.post('/api/pedidos', data, {
    headers: { authorization: `Bearer ${token.replace(/['"]+/g, '')}` }
  })
}

export const getPedidos = () => {
  return axiosConfig.get('/api/pedidos')
}

export const getPedidoById = id => {
  return axiosConfig.get(`/api/pedidos/${id}`)
}

export const updatePedido = (id, data, token) => {
  return axiosConfig.put(`/api/pedidos/${id}`, data, {
    headers: { authorization: `Bearer ${token.replace(/['"]+/g, '')}` }
  })
}
