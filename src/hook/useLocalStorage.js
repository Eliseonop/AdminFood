import { useState } from 'react'

/**
 *
 * @param {string} key
 * @param {string} initialValue
 * @returns //[valor almacenado, funcion para actualizar el valor]
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)

      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  const setValue = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
