import { Component, createSignal, Setter, Show } from "solid-js";

interface Styles {
  type: "success" | "error";
  labelStyles: string;
  inputStyles: string;
  paragraphStyles: string;
}

const success: Styles = {
  type: "success",
  labelStyles: "text-green-700 dark:text-green-500",
  inputStyles:
    "border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-gray-700 dark:border-green-500",
  paragraphStyles: "text-green-600 dark:text-green-500",
};

const error: Styles = {
  type: "error",
  labelStyles: 'text-red-700 dark:text-red-500"',
  inputStyles:
    "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500",
  paragraphStyles: "text-red-600 dark:text-red-500",
};

const TextInput: Component<{
  placeholder: string;
  label: string;
  setter: Setter<string>;
  value: string;
}> = (props) => {
  const [hasErrors, sethasErrors] = createSignal(false);
  const [isCorrect, setisCorrect] = createSignal(false);

  return (
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        onInput={(e) => {
          props.setter(e.currentTarget.value);
        }}
        value={props.value}
        required
      />
      <Show when={isCorrect() || hasErrors()}>
        <p class="mt-2 text-sm ">
          <span class="font-medium">Well done!</span> Some success message.
        </p>
      </Show>
    </div>
  );
};

export default TextInput;
