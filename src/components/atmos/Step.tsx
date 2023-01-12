import {
  Component,
  createSignal,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import Paragraph from "./Paragraph";

const Step: Component<{
  isDone: boolean;
  isLast: boolean;
  label: string;
  index: number;
}> = (props) => {
  const [doneStyle] = createSignal("text-blue-600 dark:text-blue-500");
  const [notLast] = createSignal(
    "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10"
  );
  const [notLastSpan] = createSignal(
    "after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200"
  );
  return (
    <li
      class="flex items-center dark:after:border-gray-700"
      classList={{ [doneStyle()]: props.isDone, [notLast()]: !props.isLast }}
    >
      <span
        class="flex items-center dark:after:text-gray-500"
        classList={{ [notLastSpan()]: !props.isLast }}
      >
        <p>{props.isDone}</p>
        <Show when={props.isDone}>
          <svg
            aria-hidden="true"
            class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Show>
        {props.label}
      </span>
    </li>
  );
};

export default Step;
