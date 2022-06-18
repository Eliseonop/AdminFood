import React from 'react'
import RowProduct from './form/RowProduct'

export default function TableProducts ({ products, setProducts, handleEdit }) {
  return (
    <>
      <div className='relative overflow-y-auto   shadow-md sm:rounded-lg  max-h-[80vh]  '>
        {Error && (
          <div className='absolute top-0 right-0 mt-4 mr-4 text-red-500 text-sm'>
            Error al eliminar el producto
          </div>
        )}
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400  '>
          <thead className='text-xs sticky h-14 top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product name
              </th>
              <th scope='col' className='px-6 py-3'>
                Descripcion
              </th>
              <th scope='col' className='px-6 py-3'>
                Categoria
              </th>
              <th scope='col' className='px-6 py-3'>
                Precio
              </th>
              <th scope='col' className='px-6 py-3'>
                Imagen
              </th>
              <th scope='col' className='px-6 py-3'>
                Estado
              </th>

              <th scope='col' className='px-6 py-3'>
                Editar
              </th>
            </tr>
          </thead>
          <tbody className='space-y-5   '>
            {products.map((item, index) => (
              <RowProduct
                key={index}
                item={item}
                products={products}
                setProducts={setProducts}
                handleEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
