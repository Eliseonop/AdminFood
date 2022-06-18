import { createContext } from 'react'
// import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { useLocalStorage } from '../hook/useLocalStorage'
export const AdminContext = createContext()

export default function AdminProvider ({ children }) {
  const [admin, setAdmin] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('token', null)

  const enviarToken = token => {
    return setToken(token)
  }
  const eviarAdmin = admin => {
    return setAdmin(admin)
  }
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token)
      eviarAdmin(decoded)
    } else {
      eviarAdmin(null)
    }
  }, [token])
  useEffect(() => {
    if (admin) {
      const decoded = jwtDecode(token)
      const currentTime = Date.now() / 1000
      if (decoded.exp < currentTime) {
        setAdmin(null)
        setToken(null)
      }
    }
  }, [])

  const value = {
    admin,
    token,
    enviarToken
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}
