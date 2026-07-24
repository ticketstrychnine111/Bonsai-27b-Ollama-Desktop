import { useState, useEffect } from 'react'
import type { OllamaModel } from './types'

export function useOllamaModels(host: string) {
  const [models, setModels] = useState<OllamaModel[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${host}/api/tags`)
      const data = await res.json()
      setModels(data.models ?? [])
    } catch (e) {
      setError('Cannot connect to Ollama. Make sure Ollama is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { refresh() }, [host])

  return { models, loading, error, refresh }
}
