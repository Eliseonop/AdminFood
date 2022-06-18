import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginFormAdmin } from './components/form/LoginForm'
import Home from './pages/Home'
import AdminProvider from './context/AdminProvider'
import Navbar from './components/Navbar'
import PrivateRoute from './routes/PrivateRoute'
import Products from './components/Products'
import ClientesPages from './pages/ClientesPages'
import PedidosPages from './pages/PedidosPages'

function App () {
  return (
    <AdminProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginFormAdmin />} />
          <Route
            path='/products'
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path='/clientes'
            element={
              <PrivateRoute>
                <ClientesPages />
              </PrivateRoute>
            }
          />
          <Route
            path='/pedidos'
            element={
              <PrivateRoute>
                <PedidosPages />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App
