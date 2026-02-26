export default function HomeButton({ visible, onClick }) {
  return (
    <button
      type="button"
      className={`home-btn ${!visible ? 'hidden' : ''}`}
      onClick={onClick}
    >
      홈으로
    </button>
  )
}
