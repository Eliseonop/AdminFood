import { getUsers } from '../services/client.services'
import { useState, useEffect } from 'react'

export const useClients = () => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchClients = async () => {
    setLoading(true)
    try {
      const { data } = await getUsers()
      setClients(data)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return { clients, loading, error }
}
