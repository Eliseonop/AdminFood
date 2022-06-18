import React, { useEffect, useState } from 'react'
import { getPedidos, updatePedido } from '../../services/pedidos.services'
import CloseIcon from '@mui/icons-material/Close'
export default function Information ({
  information,
  setInformation,
  setPedidos,
  setId
}) {
  const [error, setError] = useState(false)
  const handleEnviar = data => {
    let datos = {
      estado: data
    }
    updatePedido(information._id, datos, window.localStorage.getItem('token'))
      .then(res => {
        setInformation(res.data)
        getPedidos().then(res => {
          setPedidos(
            res.data.sort(
              (a, b) =>
                new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
            )
          )
        })
      })
      .catch(err => {
        console.log(err)
        setError(err.response.data.message)
      })
  }
  console.log(error)
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }, [error])

  return (
    <div className='w-full lg:w-1/2 mx-auto m-8 relative '>
      <div className='absolute -right-0 -top-5 cursor-pointer'>
        <CloseIcon onClick={() => setId(null)} />
      </div>
      {error && <h1>Error, {error}</h1>}

      <div className=' m-4 p-4 flex flex-col md:flex-row  transition-shadow border rounded-lg shadow-sm hover:shadow-lg'>
        <div className='my-3'>
          <p className='text-gray-700 '>Cliente:</p>
          <p>
            Nombre:{' '}
            <span className='font-semibold'>{information.cliente.nombre}</span>
          </p>
          <p>
            email :{' '}
            <span className='font-semibold'>{information.cliente.email}</span>
          </p>
        </div>
        <div className='mx-3 h-[130px] overflow-y-auto w-full my-3 md:w-1/3'>
          Productos:
          <ul className='pl-7'>
            {information.productos.map((producto, i) => (
              <li key={i}>
                {producto.nombre} -
                <span className='font-semibold'> ${producto.precio}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='mx-3 h-[150px] overflow-y-auto w-full text-start my-3 md:w-1/3'>
          <p className='text-gray-700 '>Fecha:</p>
          <p>
            <span className='font-semibold'>
              {new Date(information.createdAt).toLocaleDateString()} -{' '}
              {new Date(information.createdAt).toLocaleTimeString()}
            </span>
          </p>
          <p className='text-gray-700 '>Total:</p>
          <p>
            <span className='font-semibold'>${information.total}</span>
          </p>
          <p className='text-gray-700 '>Estado:</p>
          <p>
            <span className='font-semibold'>{information.estado}</span>
          </p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <button
            onClick={() => handleEnviar('ENVIADO')}
            className='font-semibold  text-indigo-600 py-2 px-3 w-[120px] bg-indigo-300 rounded-lg hover:text-black '
          >
            Enviar
          </button>
          <button
            onClick={() => handleEnviar('CANCELADO')}
            className='font-semibold shadow-lg text-red-600 rounded-lg py-2 px-3 w-[120px] bg-red-300 hover:text-black '
          >
            Cancelar
          </button>
          <button
            onClick={() => handleEnviar('ENTREGADO')}
            className='font-semibold text-black-600 rounded-lg py-2 px-3 w-[120px] bg-green-300 hover:text-black '
          >
            Entregado
          </button>
        </div>
      </div>
    </div>
  )
}
