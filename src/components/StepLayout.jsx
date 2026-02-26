/**
 * 스텝 공통 레이아웃: step-header + children
 */
export default function StepLayout({ title, desc, headerClass, className, children }) {
  return (
    <section className={`step ${className || ''}`.trim()}>
      <div className={`step-header ${headerClass || ''}`.trim()}>
        <h2>{title}</h2>
        {desc && <p className="step-desc">{desc}</p>}
      </div>
      {children}
    </section>
  )
}
