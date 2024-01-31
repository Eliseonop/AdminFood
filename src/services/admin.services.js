import { Token } from "@mui/icons-material"
import axiosConfig from "./config/axios.config"

export const createAdmin = data => {
  return axiosConfig.post('/api/newadmin', data)
}

export const loginAdmin = data => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        token : '1234567890'
      }
    })
    // return {
    //   data: {
    //     token: '1234567890'
    //   }
    // }
  })
}
