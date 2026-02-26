/** 4방신별 BPM 시각화 타입 */
export function getVisualType(guardian) {
  const map = { 주작: 'vertical', 현무: 'diagonal', 백호: 'spiral', 청룡: 'wave' }
  return map[guardian] || 'wave'
}
