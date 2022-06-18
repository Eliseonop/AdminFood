import { useEffect } from 'react'
import { useState } from 'react'
import { getPedidos } from '../services/pedidos.services'
import { getPedidoById } from '../services/pedidos.services'
import { updatePedido } from '../services/pedidos.services'

export const usePedidos = () => {
  const [pedidos, setPedidos] = useState([])
  const [pedido, setPedido] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [pedidoId, setPedidoId] = useState('')

  const obtnerPedidos = async () => {
    setLoading(true)
    setError(false)
    try {
      const { data } = await getPedidos()
      setPedidos(data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  const obtenerPedidoById = async id => {
    setLoading(true)
    setError(false)
    try {
      const { data } = await getPedidoById(id)
      setPedido(data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  const updatePedidoByid = async (id, datos) => {
    setLoading(true)
    setError(false)
    try {
      const { data } = await updatePedido(
        id,
        datos,
        window.localStorage.getItem('token')
      )
      setPedido(data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    obtnerPedidos()
  }, [])
  return {
    pedidos,
    pedido,
    loading,
    error,
    openModal,
    openModalEdit,
    setLoading,
    pedidoId,
    obtnerPedidos,
    obtenerPedidoById,
    updatePedidoByid,
    setOpenModal,
    setOpenModalEdit,

    setPedidoId
  }
}
