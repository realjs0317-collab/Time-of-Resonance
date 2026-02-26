import { useRef } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import html2canvas from 'html2canvas'
import { useGuardianData } from '../hooks/useGuardianData'
import StepLayout from './StepLayout'

export default function Step6Photocard({ guardian }) {
  const cardRef = useRef(null)
  const data = useGuardianData(guardian)

  if (!data) return null
  const pc = data.photocard

  const handleDownload = async () => {
    if (!cardRef.current) return
    try {
      const canvas = await html2canvas(cardRef.current, { scale: 2 })
      const link = document.createElement('a')
      link.download = `공명의시간_${guardian}_포토카드.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch {
      alert('포토카드를 길게 눌러 이미지로 저장해 주세요.')
    }
  }

  return (
    <StepLayout
      className="step6-full"
      title="당신만의 포토카드"
      desc="QR 코드로 음악을 다운로드하고 포토카드를 소장하세요"
    >
      <div className="step6-layout">
        <div className="photocard-overlay">
          <div ref={cardRef} className="photocard-image-only">
            {pc.image && (
              <img src={pc.image} alt={guardian} className="photocard-image" />
            )}
          </div>
        </div>
        <div className="step6-bottom">
          <button type="button" className="download-btn" onClick={handleDownload}>
            다운로드
          </button>
          <div className="qr-area">
            <span className="qr-label">QR (음악 다운로드)</span>
            <div className="qr-code-container">
              <QRCodeSVG
                value={`https://example.com/lyrics/${guardian}`}
                size={124}
                level="M"
              />
            </div>
            <p className="qr-desc">QR 코드를 스캔하여 영상 및 부적을 소장하세요.</p>
          </div>
        </div>
      </div>
    </StepLayout>
  )
}
