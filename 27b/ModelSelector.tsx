import React from 'react'
import type { OllamaModel } from './types'

interface Props {
  models: OllamaModel[]
  selected: string
  onSelect: (name: string) => void
}

function formatSize(bytes: number): string {
  const gb = bytes / 1e9
  return gb >= 1 ? `${gb.toFixed(1)} GB` : `${(bytes / 1e6).toFixed(0)} MB`
}

export function ModelSelector({ models, selected, onSelect }: Props) {
  return (
    <select
      value={selected}
      onChange={e => onSelect(e.target.value)}
      style={{ padding: '6px 10px', borderRadius: 8, background: '#1a1a1a', color: '#e0e0e0', border: '1px solid #333', fontSize: 13 }}
    >
      {models.map(m => (
        <option key={m.name} value={m.name}>
          {m.name} ({formatSize(m.size)})
        </option>
      ))}
    </select>
  )
}
