import { useState } from 'react'
import { STEPS, GUARDIAN_DATA } from './data/guardianData'
import HomeButton from './components/HomeButton'
import StepNav from './components/StepNav'
import Splash from './components/Splash'
import Step1Guardian from './components/Step1Guardian'
import Step2Word from './components/Step2Word'
import Step3STT from './components/Step3STT'
import Step4Infographic from './components/Step4Infographic'
import Step5Words from './components/Step5Words'
import Step5bStageComplete from './components/Step5bStageComplete'
import Step6Photocard from './components/Step6Photocard'

export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [guardian, setGuardian] = useState(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [sttTranscript, setSttTranscript] = useState('')
  const [bpm, setBpm] = useState(128)
  const [energySync, setEnergySync] = useState(0)

  const goToStep = (index) => {
    if (index < 0 || index >= STEPS.length) return
    setCurrentStep(index)
  }

  const handleNext = () => {
    if (currentStep === 1 && !guardian) {
      alert('사신을 선택해주세요.')
      return
    }
    if (currentStep < STEPS.length - 1) setCurrentStep((s) => s + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1)
  }

  const stepId = STEPS[currentStep]

  return (
    <>
      <HomeButton visible={currentStep > 0} onClick={() => goToStep(0)} />

      {stepId === 'splash' && <Splash onNext={() => setCurrentStep(1)} />}
      {stepId === 'step1' && (
        <Step1Guardian guardian={guardian} onSelect={setGuardian} />
      )}
      {stepId === 'step2' && (
        <Step2Word
          guardian={guardian}
          wordIndex={wordIndex}
          onSelect={setWordIndex}
        />
      )}
      {stepId === 'step3' && (
        <Step3STT
          selectedWord={guardian ? GUARDIAN_DATA[guardian]?.words[wordIndex]?.word : null}
          transcript={sttTranscript}
          onTranscriptChange={setSttTranscript}
        />
      )}
      {stepId === 'step4' && (
        <Step4Infographic
          guardian={guardian}
          selectedWord={guardian ? GUARDIAN_DATA[guardian]?.words[wordIndex]?.word : null}
          bpm={bpm}
          energySync={energySync}
          onEnergySyncChange={setEnergySync}
        />
      )}
      {stepId === 'step5' && (
        <Step5Words guardian={guardian} wordIndex={wordIndex} />
      )}
      {stepId === 'step5b' && <Step5bStageComplete guardian={guardian} />}
      {stepId === 'step6' && <Step6Photocard guardian={guardian} />}

      {currentStep > 0 && (
        <StepNav
          currentStep={currentStep}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
