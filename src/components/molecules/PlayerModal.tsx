import { Component, createSignal, Match, Setter, Show, Switch } from "solid-js";
import { PlayerLoot } from "~/models/loot.model";
import ItemList from "../atmos/ItemList";

interface PlayerModalProps {
  shown: boolean;
  close: () => void;
  player: PlayerLoot;
}

const activeStyle = "dark:text-blue-500";

const PlayerModal: Component<PlayerModalProps> = (props) => {
  const [tab, settab] = createSignal(0);

  const handleClose = () => {
    props.close();
  };

  return (
    <Show when={props.shown}>
      <div
        class="bg-black bg-opacity-75 cursor-pointer fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex z-50 items-center justify-center"
        onClick={handleClose}
      >
        <div
          class="w-96"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul
              class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
              id="fullWidthTab"
              data-tabs-toggle="#fullWidthTabContent"
              role="tablist"
            >
              <li class="w-full">
                <button
                  id="stats-tab"
                  data-tabs-target="#stats"
                  type="button"
                  role="tab"
                  aria-controls="stats"
                  aria-selected="true"
                  onClick={() => settab(0)}
                  class="inline-block relative w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                  classList={{
                    [activeStyle]: tab() === 0,
                  }}
                >
                  Bises
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 translate-x-1/2 right-1/2 dark:border-gray-900">
                    {props.player.bises.length}
                  </div>
                </button>
              </li>
              <li class="w-full">
                <button
                  id="about-tab"
                  data-tabs-target="#about"
                  type="button"
                  role="tab"
                  aria-controls="about"
                  aria-selected="false"
                  onClick={() => settab(1)}
                  classList={{
                    [activeStyle]: tab() === 1,
                  }}
                  class="inline-block relative w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  Upgrades
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 translate-x-1/2 right-1/2 dark:border-gray-900">
                    {props.player.ups.length}
                  </div>
                </button>
              </li>
              <li class="w-full">
                <button
                  id="faq-tab"
                  data-tabs-target="#faq"
                  type="button"
                  role="tab"
                  aria-controls="faq"
                  aria-selected="false"
                  onClick={() => settab(2)}
                  classList={{
                    [activeStyle]: tab() === 2,
                  }}
                  class="inline-block relative w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  Offspec
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 translate-x-1/2 right-1/2 dark:border-gray-900">
                    {props.player.offSpec.length}
                  </div>
                </button>
              </li>
            </ul>
            <div
              id="fullWidthTabContent"
              class="border-t border-gray-200 dark:border-gray-600"
            >
              <div
                class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <Switch>
                  <Match when={tab() === 0}>
                    <ItemList items={props.player.bises}></ItemList>
                  </Match>
                  <Match when={tab() === 1}>
                    <ItemList items={props.player.ups}></ItemList>
                  </Match>
                  <Match when={tab() === 2}>
                    <ItemList items={props.player.offSpec}></ItemList>
                  </Match>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
};

export default PlayerModal;
