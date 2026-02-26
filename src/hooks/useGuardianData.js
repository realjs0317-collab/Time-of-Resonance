import { useMemo } from 'react'
import { GUARDIAN_DATA } from '../data/guardianData'

/** guardian 기반 데이터 접근 공통 훅 */
export function useGuardianData(guardian) {
  return useMemo(() => {
    if (!guardian || !GUARDIAN_DATA[guardian]) return null
    return GUARDIAN_DATA[guardian]
  }, [guardian])
}
