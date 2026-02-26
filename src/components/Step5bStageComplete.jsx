import { useState } from 'react'
import ProgressBar from './ProgressBar'
import StepLayout from './StepLayout'

export default function Step5bStageComplete() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress] = useState(0)

  return (
    <StepLayout
      className="step5b-full"
      title="당신의 빛나는 무대가 완성되었습니다!"
      desc="소중한 추억에 감사드리며, 당신만의 1분 음악을 선물합니다."
    >
      <p className="step5b-ment">피어나는 에너지를 느껴보세요</p>

      <div className="step5b-visual">
        <div className="step5b-wave-area" />
        <div className="step5b-placeholder" />
      </div>

      <div className="step5b-player">
        <button
          type="button"
          className="step5b-play-btn"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <div className="step5b-progress-wrap">
          <ProgressBar value={progress} />
        </div>
        <span className="step5b-volume">🔊</span>
      </div>

      <div className="step5b-actions">
        <button type="button" className="step5b-download-btn">
          음악 다운로드
        </button>
        <button type="button" className="step5b-hashtag-btn">#</button>
        <div className="step5b-social">
          <button type="button" className="step5b-social-btn">Instagram</button>
          <button type="button" className="step5b-social-btn">Twitter</button>
          <button type="button" className="step5b-social-btn">Facebook</button>
        </div>
      </div>
    </StepLayout>
  )
}
