/** Step4, Step5b 공통 프로그레스 바 */
export default function ProgressBar({ value, label, className = '' }) {
  const pct = Math.min(value ?? 0, 100)
  return (
    <div className={`progress-wrap ${className}`.trim()}>
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
