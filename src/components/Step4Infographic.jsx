import { useState, useEffect } from 'react'
import { useGuardianData } from '../hooks/useGuardianData'
import { getVisualType } from '../utils/visualType'
import BPMWaveVisual from './BPMWaveVisual'
import ProgressBar from './ProgressBar'
import StepLayout from './StepLayout'

const SYNC_DURATION_MS = 15000

export default function Step4Infographic({
  guardian,
  selectedWord,
  bpm = 128,
  energySync: energySyncProp,
  onEnergySyncChange,
}) {
  const [syncPercent, setSyncPercent] = useState(0)
  const data = useGuardianData(guardian)

  useEffect(() => {
    if (!onEnergySyncChange) return
    setSyncPercent(0)
    onEnergySyncChange(0)
    const startTime = Date.now()
    const iv = setInterval(() => {
      const p = Math.min(((Date.now() - startTime) / SYNC_DURATION_MS) * 100, 100)
      setSyncPercent(p)
      onEnergySyncChange(p)
    }, 100)
    return () => clearInterval(iv)
  }, [onEnergySyncChange])

  const displaySync = energySyncProp !== undefined ? energySyncProp : syncPercent

  if (!data) return null
  const word = selectedWord || data.words[0]?.word
  const visualType = getVisualType(guardian)

  return (
    <StepLayout
      title={<>당신의 이야기는<br />어떤 에너지가 되어 피어나나요?</>}
      desc="비트에 맞춰 응원봉을 흔들어 당신의 공명을 완성하세요."
    >
      <div className="step4-bpm-wrap">
        <div className="step4-bpm-visual">
          <BPMWaveVisual guardian={guardian} bpm={bpm} />
        </div>
        <div className={`step4-bpm-circle step4-visual-${visualType}`}>
          <div className="step4-bpm-ring" />
          <div className="step4-bpm-value">BPM: {bpm}</div>
        </div>
      </div>

      <p className="step4-status">
        지금 응원봉을 통해 <span className="step4-keyword">&apos;{word}&apos;</span>의 에너지가 주입되고 있습니다
      </p>

      <ProgressBar value={displaySync} label={`에너지 동기화: ${Math.round(displaySync)}%`} />
    </StepLayout>
  )
}
