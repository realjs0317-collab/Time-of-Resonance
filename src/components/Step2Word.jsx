import { useGuardianData } from '../hooks/useGuardianData'
import StepLayout from './StepLayout'

export default function Step2Word({ guardian, wordIndex, onSelect }) {
  const data = useGuardianData(guardian)
  if (!data) return null
  const words = data.words
  const characterImage = data.photocard?.image

  return (
    <StepLayout title={<>오늘의 마음,<br />어떤 단어와 공명하나요?</>}>
      <div className="step2-character">
        <div
          className="step2-character-circle"
          style={{ borderColor: data.photocard?.accent || '#f1c40f' }}
        >
          {characterImage ? (
            <img src={characterImage} alt={guardian} className="step2-character-img" />
          ) : (
            <span className="step2-character-icon">{data.photocard?.symbol}</span>
          )}
        </div>
      </div>
      <div className="step2-word-boxes">
        {words.map((item, idx) => (
          <button
            key={item.word}
            type="button"
            className={`word-select-btn ${wordIndex === idx ? 'selected' : ''}`}
            onClick={() => onSelect(idx)}
          >
            <span className="word-select-word">[{item.word}]</span>
            <span className="word-select-desc">{item.desc}</span>
          </button>
        ))}
      </div>
      <p className="step2-bottom-text">
        선택한 단어에 따라 당신만의 시각 입지와 음색이 확정됩니다.
      </p>
    </StepLayout>
  )
}
