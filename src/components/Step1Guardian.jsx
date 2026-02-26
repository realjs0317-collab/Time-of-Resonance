import { GUARDIANS } from '../data/guardianData'
import StepLayout from './StepLayout'

export default function Step1Guardian({ guardian, onSelect }) {
  return (
    <StepLayout title={<>당신의 마음은<br />어디로 뻗어 있나요?</>}>
      <div className="guardian-grid">
        {GUARDIANS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={`guardian-btn ${guardian === g.id ? 'selected' : ''}`}
            data-guardian={g.id}
            onClick={() => onSelect(g.id)}
          >
            <span className="guardian-icon">{g.icon}</span>
            <span className="guardian-name">{g.id}</span>
            <span className="guardian-desc">{g.desc}</span>
          </button>
        ))}
      </div>
    </StepLayout>
  )
}
