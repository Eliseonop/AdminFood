import React, { useState } from 'react'

export default function FormProduct ({ handleCreateProduct, loading }) {
  const TOKEN = window.localStorage.getItem('token')

  

  return (
    <div className=' flex flex-col items-center justify-center mt-6'>
      <h2 className='font-bold text-2xl'> Agregar productos</h2>
      <form className='md:w-[80vw] flex flex-row font-bold flex-wrap justify-between m-7' onSubmit={() => handleCreateProduct(product, TOKEN)}>
        <div>

          <label>Nombre
          </label>
          <input
          className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
            required
            type='text'
            name='nombre'
            value={product.nombre}
            onChange={e => setProduct({ ...product, nombre: e.target.value })}
          />
        </div>
        <div>
          <label>Precio
          </label>
          <input
            className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
            required
            type='number'
            name='precio'
            value={product.precio}
            onChange={e => setProduct({ ...product, precio: +e.target.value })}
          />
        </div>
        <div>
          <label>Descripcion
          </label>
          <input
          className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
            required
            type='text'
            name='descripcion'
            value={product.descripcion}
            onChange={e =>
              setProduct({ ...product, descripcion: e.target.value })}
          />
        </div>
        <div>
          <label>Imagen URL
          </label>
          <input
            className=' focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
            required
            type='text'
            name='imagen'
            value={product.imagen}
            onChange={e => setProduct({ ...product, imagen: e.target.value })}
          />
        </div>
        <div>
          <label>Tipo
          </label>
          <select
               className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
            name='tipo'
            defaultValue='OTRO'
            onChange={e => setProduct({ ...product, tipo: e.target.value })}
          >
            <option value='PLATO'>PLATO</option>
            <option value='BEBIDA'>BEBIDA</option>
            <option value='POSTRE'>POSTRE</option>
            <option value='OTRO'>Otro</option>
          </select>
        </div>
        <button type='submit' className='w-[250px] mt-5 bg-indigo-500 py-3 px-5 rounded-md shadow-lg'>{loading ? 'Loading...' : 'Agregar Producto'}</button>

      </form>
    </div>
  )
}
