import React, { useState, useEffect } from 'react'

import {
  getProducts,
  createProduct,
  updateProduct,
  getProductById
} from '../services/productos.services'
import Loading from './pure/Loading'
import Modal from './pure/Modal'
import ModalEdit from './pure/ModalEdit'
import SearchProduct from './pure/SearchProduct'
import TableProducts from './TableProducts'

export default function Products () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [Error, setError] = useState(false)
  const [product, setProduct] = useState({
    _id: '',
    nombre: '',
    precio: 0,
    descripcion: '',
    tipo: '',
    imagen: '',
    estado: true
  })

  const [name, setName] = useState('')

  const handleCreateProduct = product => {
    setLoading(true)
    createProduct(product, window.localStorage.getItem('token'))
      .then(res => {
        console.log(res)
        getProducts().then(res => {
          setProducts(res.data)
          setLoading(false)
          setOpenModal(false)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const newProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(name.toLowerCase())
  )
  const handleEdit = product => {
    getProductById(product._id)
      .then(res => {
        setProduct(res.data)
        setOpenModal2(true)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleConfirmEdit = id => {
    setLoading2(true)
    updateProduct(id, product, window.localStorage.getItem('token'))
      .then(res => {
        getProducts()
          .then(res => {
            setProducts(res.data)
            setOpenModal2(false)
            setLoading2(false)
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
  if (loading) return <Loading />

  if (loading2) return <Loading />

  return (
    <div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleProduct={handleCreateProduct}
        loading={loading}
      />
      <ModalEdit
        openModal={openModal2}
        product={product}
        setProduct={setProduct}
        loading={loading2}
        handleConfirmEdit={handleConfirmEdit}
        setOpenModal={setOpenModal2}
      />

      <div className='max-w-full md:max-w-7xl md:mx-auto pt-7 '>
        <SearchProduct
          setOpenModal={setOpenModal}
          name={name}
          setName={setName}
          openModal={openModal}
        />

        <TableProducts
          products={newProducts}
          setProducts={setProducts}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}
