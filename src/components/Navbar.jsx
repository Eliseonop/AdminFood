import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminProvider'
import { useNavigate, Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DehazeIcon from '@mui/icons-material/Dehaze'

export default function Navbar () {
  const { admin, enviarToken } = useContext(AdminContext)
  const [state, setState] = useState(false)
  const [togle, setTogle] = useState(false)

  const navigate = useNavigate()
  // console.log(admin)
  const handleClick = () => {
    navigate('/login')
  }
  const handleLogout = () => {
    enviarToken(null)
    setState(false)
    navigate('/')
  }

  return (
    <div className='flex flex-col md:h-[8vh]  md:flex-row justify-around p-5   shadow-md bg-slate-100 items-center'>
      <div>
        <h1 className='font-bold text-xl'>Website Administrator</h1>
      </div>

      <div
        className={togle ? 'block md:block h-72 md:h-9 ' : 'hidden md:block'}
      >
        <ul className='flex flex-col space-y-6 mt-4 md:mt-0 md:space-y-0 md:flex-row md:space-x-11 md:font-medium md:items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Productos</Link>
          </li>
          <li>
            <Link to='/clientes'>Clientes</Link>
          </li>
          <li>
            <Link to='/pedidos'>Pedidos</Link>
          </li>
          <li className='relative '>
            {admin ? (
              <button
                className='px-4 py-1  bg-green-500 rounded-sm cursor-pointer '
                onClick={() => setState(!state)}
              >
                {admin.nombre}
                <ArrowDropDownIcon />{' '}
              </button>
            ) : (
              <button
                className='px-4 py-1 bg-green-500 rounded-sm cursor-pointer'
                onClick={handleClick}
              >
                Login
              </button>
            )}
            {state && (
              <div
                className={`absolute  duration-1000 ease-in-out transition-all `}
              >
                <button
                  className={`px-4 mt-2 py-1 duration-1000 ease-in-out  bg-red-400 rounded-sm cursor-pointer`}
                  onClick={handleLogout}
                >
                  Salir
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div
        className='block md:hidden absolute right-5 top-5 cursor-pointer '
        onClick={() => setTogle(!togle)}
      >
        <DehazeIcon />
      </div>
    </div>
  )
}
