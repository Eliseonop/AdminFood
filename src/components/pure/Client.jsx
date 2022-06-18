import React from 'react'

export default function Client ({ client }) {
  const { createdAt } = client
  //   const date = new Date(createdAt).toISOString().substr(0, 10)

  return (
    <tr>
      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm leading-5 font-medium text-gray-900 capitalize'>
              {client.nombre} {client.apellido}
            </div>
          </div>
        </div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <div className='text-sm leading-5 text-gray-900'>
          {client.pedidos.length}
        </div>
      </td>

      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
          {new Date(createdAt).toDateString()}
        </span>
      </td>

      <td className=' py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
        {client.email}
      </td>

      <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
        <a href='/' className='text-indigo-600 hover:text-indigo-900'>
          Contactar
        </a>
      </td>
    </tr>
  )
}
