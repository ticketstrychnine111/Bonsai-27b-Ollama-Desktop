export interface OllamaModel {
  name: string
  size: number
  digest: string
  modifiedAt: Date
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  model?: string
  timestamp: Date
}

export interface OllamaConfig {
  host: string
  port: number
  model: string
  contextLength: number
  temperature: number
  gpu: boolean
}
