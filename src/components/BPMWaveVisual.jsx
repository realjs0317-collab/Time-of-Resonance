import { useEffect, useRef } from 'react'
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  LineBasicMaterial,
  BufferGeometry,
  Vector3,
  Line,
  Clock,
} from 'three'

/**
 * 4방신별 파동 시각화
 * - 주작: 아래→위 직선 + 파티클
 * - 현무: 위→아래 대각선 (압력)
 * - 백호: 밖→안 나선형
 * - 청룡: 오른쪽 역동적 물결
 */
export default function BPMWaveVisual({ guardian, bpm }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new Scene()
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 5

    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const material = new LineBasicMaterial({
      color: 0x3498db,
      linewidth: 1,
    })

    let line = null
    const pulseSpeed = (bpm / 60) * 0.5

    const createVisual = () => {
      if (line) scene.remove(line)

      const points = []
      const count = 100

      if (guardian === '주작') {
        // 아래→위 직선 + 끝에서 터지는 파티클
        for (let i = 0; i <= count; i++) {
          const t = i / count
          points.push(new Vector3(0, -0.8 + t * 1.6, 0))
        }
        const geometry = new BufferGeometry().setFromPoints(points)
        line = new Line(geometry, material)
        scene.add(line)
      } else if (guardian === '현무') {
        // 위→아래 대각선
        for (let i = 0; i <= count; i++) {
          const t = i / count
          const x = -0.5 + t
          const y = 0.8 - t * 1.6
          points.push(new Vector3(x, y, 0))
        }
        const geometry = new BufferGeometry().setFromPoints(points)
        line = new Line(geometry, material)
        scene.add(line)
      } else if (guardian === '백호') {
        // 나선형 (밖→안)
        for (let i = 0; i <= count; i++) {
          const t = i / count
          const r = 0.9 * (1 - t)
          const angle = t * Math.PI * 4
          points.push(new Vector3(r * Math.cos(angle), r * Math.sin(angle), 0))
        }
        const geometry = new BufferGeometry().setFromPoints(points)
        line = new Line(geometry, material)
        scene.add(line)
      } else {
        // 청룡: 오른쪽 물결 (역동적 Wave)
        for (let i = 0; i <= count; i++) {
          const t = i / count
          const x = -1 + t * 2
          const y = 0.4 * Math.sin(t * Math.PI * 3) * (1 + 0.3 * Math.sin(t * Math.PI * 2))
          points.push(new Vector3(x, y, 0))
        }
        const geometry = new BufferGeometry().setFromPoints(points)
        line = new Line(geometry, material)
        scene.add(line)
      }
    }

    createVisual()

    const clock = new Clock()
    let frameId

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      if (line) {
        if (guardian === '주작') {
          line.scale.y = 0.7 + 0.3 * Math.sin(elapsed * pulseSpeed)
        } else if (guardian === '청룡') {
          line.scale.x = 0.95 + 0.05 * Math.sin(elapsed * pulseSpeed)
          line.scale.y = 0.95 + 0.05 * Math.sin(elapsed * pulseSpeed + 0.5)
        } else if (guardian === '백호') {
          line.rotation.z = elapsed * 0.2
        }
      }

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      if (line?.geometry) line.geometry.dispose()
      if (material) material.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [guardian, bpm])

  return <div ref={containerRef} className="bpm-wave-canvas" />
}
