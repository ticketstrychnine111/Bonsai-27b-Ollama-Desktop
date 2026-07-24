import React, { useRef, useEffect } from 'react'
import type { ChatMessage } from './types'

interface Props {
  messages: ChatMessage[]
  loading: boolean
}

export function MessageList({ messages, loading }: Props) {
  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])

  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {messages.map(m => (
        <div key={m.id} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
          <div style={{ maxWidth: '72%', padding: '10px 14px', borderRadius: 14, background: m.role === 'user' ? '#2563eb' : '#1e1e1e', color: '#f0f0f0', fontSize: 14, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
            {m.content}
          </div>
        </div>
      ))}
      {loading && <div style={{ color: '#666', fontSize: 13, fontStyle: 'italic' }}>Thinking…</div>}
      <div ref={endRef} />
    </div>
  )
}
