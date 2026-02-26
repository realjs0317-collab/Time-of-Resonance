import { useState, useEffect, useRef } from 'react'
import { CATEGORIES } from '../data/categoryData'
import StepLayout from './StepLayout'

const STT_LIMIT = 60

export default function Step3STT({ selectedWord, transcript, onTranscriptChange }) {
  const [category, setCategory] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [timer, setTimer] = useState(0)
  const [interimDisplay, setInterimDisplay] = useState('')
  const recognitionRef = useRef(null)
  const timerRef = useRef(null)

  const currentQuestion = category ? CATEGORIES.find((c) => c.id === category)?.question : null

  const startSTT = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      onTranscriptChange('이 브라우저는 음성 인식을 지원하지 않습니다. Chrome을 사용해주세요.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = 'ko-KR'

    recognition.onresult = (event) => {
      let interim = ''
      let final = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript
        if (event.results[i].isFinal) {
          final += t
        } else {
          interim += t
        }
      }
      if (final) onTranscriptChange((prev) => prev + final)
      setInterimDisplay(interim)
    }

    recognition.onerror = () => {}
    recognition.start()
    recognitionRef.current = recognition
    setIsRecording(true)
    setTimer(0)
    timerRef.current = setInterval(() => {
      setTimer((s) => {
        if (s + 1 >= STT_LIMIT) {
          clearInterval(timerRef.current)
          stopSTT()
          return s + 1
        }
        return s + 1
      })
    }, 1000)
  }

  const stopSTT = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setIsRecording(false)
  }

  useEffect(() => {
    return () => stopSTT()
  }, [])

  return (
    <StepLayout
      headerClass="step3-header"
      title={
        selectedWord ? (
          <><span className="step3-keyword">{selectedWord}</span>에 담긴<br />당신의 이야기를 들려주세요.</>
        ) : (
          '당신의 이야기를 들려주세요.'
        )
      }
    >
      <p className="step3-instruction">
        {selectedWord ? (
          <>[{selectedWord}]속에 담긴, 가사가 될 당신의 이야기를 들려주세요.</>
        ) : (
          '당신의 이야기를 들려주세요.'
        )}
      </p>

      <div className="step3-categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`category-btn ${category === c.id ? 'selected' : ''}`}
            onClick={() => setCategory(c.id)}
          >
            <span className="category-icon">{c.icon}</span>
            <span className="category-label">{c.label}</span>
          </button>
        ))}
      </div>

      {currentQuestion && (
        <div className="question-box">
          {currentQuestion}
        </div>
      )}

      <div className="stt-area">
        <div className="timer">
          {String(Math.floor(timer / 60)).padStart(2, '0')}:
          {String(timer % 60).padStart(2, '0')} / 01:00
        </div>
        <button
          type="button"
          className={`mic-btn ${isRecording ? 'recording' : ''}`}
          onClick={() => (isRecording ? stopSTT() : startSTT())}
        >
          <span className="mic-icon">🎤</span>
          <span className="mic-label">
            {isRecording ? '녹음 중... (중지하려면 클릭)' : '말하기 (1분)'}
          </span>
        </button>
        <button
          type="button"
          className="reset-btn"
          onClick={() => {
            if (isRecording) stopSTT()
            onTranscriptChange('')
            setInterimDisplay('')
            setTimer(0)
          }}
        >
          리셋
        </button>
        <div className="stt-transcript">{transcript + interimDisplay}</div>
      </div>

      <p className="step3-bottom-text">당신의 진심은 무엇에 맞닿아 있나요?</p>
    </StepLayout>
  )
}
