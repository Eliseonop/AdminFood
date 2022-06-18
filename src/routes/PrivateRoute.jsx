import React from 'react'
import { AdminContext } from '../context/AdminProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute ({ children }) {
  const { admin } = React.useContext(AdminContext)

  // const navigate = useNavigate();
  return <>{admin ? children : <Navigate to='/' />}</>
}
