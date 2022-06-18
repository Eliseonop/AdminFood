import React, { useState } from 'react'
import { deleteProduct, getProducts } from '../../services/productos.services'

export default function RowProduct ({
  item,
  handleEdit,
  products,
  setProducts
}) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  // console.log(item)
  const handleDlelete = async id => {
    setLoading(true)
    deleteProduct(id, window.localStorage.getItem('token'))
      .then(res => {
        getProducts()
          .then(res => {
            setProducts(res.data)
            setLoading(false)
          })
          .catch(err => {
            setError(true)
          })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
      >
        {item.nombre}
      </th>
      <td className='px-6 py-4 max-w-[100px]'>{item.descripcion}</td>
      <td className='px-6 py-4'>{item.tipo}</td>
      <td className='px-6 py-4'>${item.precio}</td>
      <td className='px-6 py-4 text-right'>
        <img
          src={item.imagen}
          alt='product'
          className='w-20 h-20 object-cover object-center rounded-full'
        />
      </td>
      <td className='px-6 py-4'>
        {item.estado ? 'Disponible' : 'No Disponible'}
      </td>
      <td className='px-6 py-4'>
        <button
          className='px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500'
          type='button'
          onClick={() => handleEdit(item)}
        >
          Editar
        </button>
        <button
          className='px-4 ml-1 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 dark:bg-red-600 dark:text-white dark:hover:bg-red-500'
          type='button'
          onClick={() => handleDlelete(item._id)}
        >
          {loading ? 'Eliminando...' : 'Eliminar'}
        </button>
      </td>
    </tr>
  )
}
