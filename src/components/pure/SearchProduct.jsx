import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch'

export default function SearchProduct ({
  setOpenModal,
  openModal,
  name,
  setName,
  setProducts,
  products
}) {
  return (
    <div className='flex items-center justify-between mb-7'>
      {/* <h1 className='font-bold text-3xl'>Tus Productos</h1> */}
      <button
        className='mx-2 py-2 px-2 bg-sky-300 rounded-md'
        onClick={() => setOpenModal(!openModal)}
      >
        Agregar Producto
      </button>
      <div className='flex'>
        <form className='flex relative  '>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Buscar producto'
            className='focus:ring-2  p-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm w-[250px]'
          />
          <div className='absolute right-2 top-1 text-slate-500'>
            <ContentPasteSearchIcon />
          </div>
          {/* <button
            type='submit'
            className='mx-2 py-2 px-2 bg-indigo-500 rounded-md'
          >
            buscar
          </button> */}
        </form>
      </div>
    </div>
  )
}
