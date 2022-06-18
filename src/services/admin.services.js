import axiosConfig from "./config/axios.config"

export const createAdmin = data => {
  return axiosConfig.post('/api/newadmin', data)
}

export const loginAdmin = data => {
  return axiosConfig.post('/api/loginadmin', data)
}
