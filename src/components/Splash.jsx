export default function Splash({ onNext }) {
  return (
    <section className="step">
      <div className="splash-content">
        <h1 className="splash-title">공명의 시간</h1>
        <p className="splash-subtitle">당신의 사신을 만나보세요</p>
        <button type="button" className="splash-next-btn" onClick={onNext}>
          다음으로
        </button>
      </div>
    </section>
  )
}
