import { Component, createSignal, Match, Switch } from 'solid-js'
import FileUploader from '../molecules/FileUploader'
import Stepper from '../molecules/Stepper'

const UploadPage: Component<{}> = () => {
  const [step, setstep] = createSignal(0)
  return (
    <div class="min-h-screen flex items-center flex-col justify-between py-64">
      <Stepper currentStep={step()} steps={['Upload', 'Set', 'Verify']} />
      <Switch>
        <Match when={step() === 0}>
          <FileUploader />
        </Match>
        <Match when={step() === 1}>a</Match>
      </Switch>
    </div>
  )
}

export default UploadPage
