import { useGuardianData } from '../hooks/useGuardianData'
import StepLayout from './StepLayout'

export default function Step5Words({ guardian, wordIndex }) {
  const data = useGuardianData(guardian)
  if (!data) return null
  const selectedWord = data.words[wordIndex ?? 0]?.word

  return (
    <StepLayout title="피어나는 에너지를 느껴보세요" desc="선택한 단어">
      <div className="step5-word-single">
        <span className="step5-word-glow">{selectedWord}</span>
      </div>
    </StepLayout>
  )
}
