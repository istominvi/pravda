import { useCallback, useEffect, useRef, useState } from 'react'
import type { Language } from '../domain/types'
import { languageLocale } from '../utils/i18n'

interface SpeechRecognitionAlternativeLike {
  transcript: string
}

interface SpeechRecognitionResultLike {
  isFinal: boolean
  length: number
  [index: number]: SpeechRecognitionAlternativeLike
}

interface SpeechRecognitionEventLike extends Event {
  resultIndex: number
  results: {
    length: number
    [index: number]: SpeechRecognitionResultLike
  }
}

interface SpeechRecognitionErrorEventLike extends Event {
  error: string
  message?: string
}

interface SpeechRecognitionLike extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((event: SpeechRecognitionEventLike) => void) | null
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null
  onend: (() => void) | null
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }
}

interface SpeechState {
  supported: boolean
  listening: boolean
  transcript: string
  interim: string
  error: string | null
  start: () => void
  stop: () => void
  clear: () => void
  setTranscript: (value: string) => void
  appendTranscript: (value: string) => void
}

export function useSpeechRecognition(language: Language): SpeechState {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interim, setInterim] = useState('')
  const [error, setError] = useState<string | null>(null)

  const Constructor = typeof window !== 'undefined'
    ? window.SpeechRecognition ?? window.webkitSpeechRecognition
    : undefined
  const supported = Boolean(Constructor)

  useEffect(() => {
    const recognition = recognitionRef.current
    if (recognition) recognition.lang = languageLocale(language)
  }, [language])

  useEffect(() => () => {
    recognitionRef.current?.abort()
  }, [])

  const ensureRecognition = useCallback(() => {
    if (!Constructor) return null
    if (recognitionRef.current) return recognitionRef.current

    const recognition = new Constructor()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = languageLocale(language)

    recognition.onresult = (event) => {
      let finalChunk = ''
      let interimChunk = ''
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index]
        const alternative = result?.[0]
        if (!alternative) continue
        if (result.isFinal) finalChunk += `${alternative.transcript.trim()} `
        else interimChunk += alternative.transcript
      }
      if (finalChunk) {
        setTranscript((current) => `${current}${current && !current.endsWith(' ') ? ' ' : ''}${finalChunk}`.trimStart())
      }
      setInterim(interimChunk)
    }

    recognition.onerror = (event) => {
      setError(event.message || event.error || 'speech-recognition-error')
      setListening(false)
    }

    recognition.onend = () => {
      setListening(false)
      setInterim('')
    }

    recognitionRef.current = recognition
    return recognition
  }, [Constructor, language])

  const start = useCallback(() => {
    const recognition = ensureRecognition()
    if (!recognition || listening) return
    setError(null)
    try {
      recognition.start()
      setListening(true)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'speech-recognition-start-failed')
      setListening(false)
    }
  }, [ensureRecognition, listening])

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
    setListening(false)
  }, [])

  const clear = useCallback(() => {
    setTranscript('')
    setInterim('')
    setError(null)
  }, [])

  const appendTranscript = useCallback((value: string) => {
    setTranscript((current) => `${current}${current ? '\n' : ''}${value}`)
  }, [])

  return {
    supported,
    listening,
    transcript,
    interim,
    error,
    start,
    stop,
    clear,
    setTranscript,
    appendTranscript,
  }
}
