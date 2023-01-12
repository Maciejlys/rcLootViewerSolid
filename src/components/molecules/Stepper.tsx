import { Component, For } from 'solid-js'
import Step from '../atmos/Step'

const Stepper: Component<{ currentStep: number; steps: string[] }> = ({
  currentStep,
  steps,
}) => {
  return (
    <ol class="flex items-center justify-center w-1/2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <For each={steps}>
        {(step, index) => (
          <Step
            isDone={currentStep > index()}
            index={index()}
            label={step}
            isLast={index() === steps.length - 1}
          ></Step>
        )}
      </For>
    </ol>
  )
}

export default Stepper
