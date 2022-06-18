import React, { useEffect, useState } from 'react'
import { getPedidoById, getPedidos } from '../services/pedidos.services'
import Information from './pure/Information'
import TablePedidos from './TablePedidos'
import Loading from './pure/Loading'

export default function Pedidos () {
  const [pedidos, setPedidos] = useState([])
  const [information, setInformation] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [id, setId] = useState()
  const [estado, setEstado] = useState('')

  useEffect(() => {
    if (id) {
      getPedidoById(id).then(res => {
        setInformation(res.data)
      })
    } else {
      setInformation(null)
    }
  }, [id])

  useEffect(() => {
    setLoading(true)
    getPedidos()
      .then(res => {
        setPedidos(
          res.data.sort(
            (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
          )
        )
        setLoading(false)
      })
      .catch(err => {
        setError(true)
      })
  }, [])

  // console.log(information)
  if (loading) return <Loading />
  if (error) return <h1>Error</h1>
  let newPedidos =
    estado === 'todos' || estado === ''
      ? pedidos
      : pedidos.filter(pedido => pedido.estado === estado)

  return (
    <div className='relative'>
      <div></div>
      <div
        className={` duration-1000 ease-in-out relative ${
          !information ? 'translate-y-20 opacity-0' : 'opacity-70'
        } `}
      >
        {information && (
          <Information
            information={information}
            setInformation={setInformation}
            setPedidos={setPedidos}
            setId={setId}
          />
        )}
      </div>
      <div
        className={`absolute duration-1000 ease-in-out top-0  w-full ${
          information
            ? 'translate-y-[600px]  md:translate-y-48 '
            : 'md:-translate-y-7'
        }`}
      >
        <TablePedidos
          information={information}
          filtrarPedidos={setEstado}
          pedidos={newPedidos}
          setInformation={setInformation}
          setId={setId}
          id={id}
        />
      </div>
    </div>
  )
}
