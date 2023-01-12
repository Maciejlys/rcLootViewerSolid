import { children, Component, For } from "solid-js";
import Step from "../atmos/Step";

const Stepper: Component<{ currentStep: number; steps: string[] }> = (
  props
) => {
  return (
    <ol class="flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <For each={props.steps}>
        {(step, index) => {
          const isDone = () => props.currentStep > index();
          return (
            <Step
              isDone={isDone()}
              index={index()}
              label={step}
              isLast={index() === props.steps.length - 1}
            ></Step>
          );
        }}
      </For>
    </ol>
  );
};

export default Stepper;
