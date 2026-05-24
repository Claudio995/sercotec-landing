import { useState, useEffect } from 'react'

function useFetch(fetchFn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelado = false
    setLoading(true)
    fetchFn()
      .then(result => {
        if (!cancelado) {
          setData(result)
          setLoading(false)
        }
      })
      .catch(err => {
        if (!cancelado) {
          setError(err.message)
          setLoading(false)
        }
      })
    return () => { cancelado = true }
  }, [])

  return { data, loading, error }
}

export default useFetch