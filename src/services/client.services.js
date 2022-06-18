import axiosConfig from './config/axios.config'

export const createUser = data => {
  return axiosConfig.post('/api/signup', data)
}

export const loginUser = data => {
  return axiosConfig.post('/api/signin', data)
}

export const getUsers = () => {
  return axiosConfig.get('/api/clientes')
}

export const getUserById = id => {
  return axiosConfig.get(`/api/clientes/${id}`)
}

export const updateUser = (id, data) => {
  return axiosConfig.put(`/api/clientes/${id}`, data)
}
