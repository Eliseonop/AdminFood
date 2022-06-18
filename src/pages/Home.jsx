import React from 'react'
import homesvg from '../assets/home.svg'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='bg-gradient-to-r from-indigo-100 to-blue-100 min-h-[92vh] flex flex-col items-center justify-around text-center md:flex-row '>
      <div className='flex flex-col space-y-3 m-3 '>
        <h1 className='text-3xl font-semibold md:text-5xl '>
          Website Administrator
        </h1>
        <p className='font-semibold'>
          Aqui podras administrar toda tu app de comidas
        </p>
        <Link to='/login'>
          <button className='py-3 px-3 w-[200px] font-semibold text-white m-auto rounded-lg cursor-pointer bg-sky-500 border-2 hover:border-black '>
            >!Vamos
          </button>
        </Link>
      </div>
      <div className='m-3 md:w-[40vw]'>
        <img src={homesvg} alt='' />
      </div>
    </div>
  )
}
