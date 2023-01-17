import { Component, Match, Switch } from "solid-js";

const ArrowSvg: Component<{ up: boolean }> = (props) => {
  return (
    <Switch>
      <Match when={props.up}>
        <svg
          fill="none"
          class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
          ></path>
        </svg>
      </Match>
      <Match when={!props.up}>
        <svg
          fill="none"
          class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          ></path>
        </svg>
      </Match>
    </Switch>
  );
};

export default ArrowSvg;
