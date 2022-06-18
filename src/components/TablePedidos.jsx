import RowPedido from './pure/RowPedido'

export default function TablePedidos ({
  pedidos,
  setId,
  filtrarPedidos,
  setInformation,
  information,
  id
}) {
  return (
    <main className='flex-1 overflow-x-hidden overflow-y-auto '>
      <div className='container mx-auto px-6 py-8'>
        <div>
          <select
            className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-72 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
            name='tipo'
            defaultValue='todos'
            onChange={e => {
              console.log(e.target.value)
              filtrarPedidos(e.target.value)
            }}
          >
            <option value='todos'>Todos</option>
            <option value='ENVIADO'>Enviados</option>
            <option value='PENDIENTE'>Pendientes</option>
            <option value='ENTREGADO'>Entregados</option>
            <option value='CANCELADO'>Cancelados</option>
          </select>
        </div>
        <div className='mt-8'></div>

        <div className='flex flex-col mt-8'>
          <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
            <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      #
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Cliente
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Estado
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Fecha
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      Total
                    </th>
                    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                      N° Productos
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {pedidos.map((pedido, i) => (
                    <RowPedido
                      information={information}
                      id={id}
                      key={i}
                      setInformation={setInformation}
                      pedido={pedido}
                      setId={setId}
                      index={i}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
