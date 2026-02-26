import { STEPS } from '../data/guardianData'

export default function StepNav({ currentStep, onPrev, onNext }) {
  const stepsWithoutSplash = STEPS.filter((s) => s !== 'splash')
  const isFirst = currentStep <= 1
  const isLast = currentStep >= STEPS.length - 1

  return (
    <nav className="step-nav">
      <button
        type="button"
        className="nav-btn prev"
        disabled={isFirst}
        onClick={onPrev}
      >
        이전
      </button>
      <div className="step-indicator">
        {stepsWithoutSplash.map((_, i) => {
          const stepNum = i + 1
          let cls = 'step-dot'
          if (stepNum < currentStep) cls += ' done'
          if (stepNum === currentStep) cls += ' active'
          return <span key={stepNum} className={cls} /> 
        })}
      </div>
      <button
        type="button"
        className="nav-btn next"
        disabled={isLast}
        onClick={onNext}
      >
        다음
      </button>
    </nav>
  )
}
