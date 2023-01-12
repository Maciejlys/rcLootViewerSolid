import {
  Component,
  createEffect,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
  ParentComponent,
  Show,
} from "solid-js";

const Tooltip: ParentComponent<{ msg: string; shouldShow: boolean }> = (
  props
) => {
  const [show, setshow] = createSignal(false);

  createEffect(() => {
    console.log();
  });

  return (
    <Show when={props.shouldShow} fallback={props.children}>
      <div
        onMouseEnter={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
        class="w-full bg-transparent relative h-full"
      >
        {props.children}
        <Show when={show()}>
          <div class="absolute top-0 right-0 transform -translate-y-12 px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700">
            {props.msg}
          </div>
        </Show>
      </div>
    </Show>
  );
};

export default Tooltip;
