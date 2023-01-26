import { Component, createSignal, Match, Switch } from "solid-js";
import LootTable from "../molecules/LootTable";
import Settings from "../organizms/Settings";

const activeClass = "text-gray-900 dark:bg-gray-700 dark:text-white";
const notActiveClass =
  "hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700";

enum Tabs {
  Data = "data",
  Settings = "settings",
}

const DataPage: Component<{}> = (props) => {
  const [currentTab, setcurrentTab] = createSignal(Tabs.Data);
  return (
    <div>
      <header class="pt-5">
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full">
            <a
              onClick={() => setcurrentTab(Tabs.Data)}
              class="inline-block cursor-pointer w-full p-4 bg-white rounded-l-lg dark:hover:text-white"
              classList={{
                [activeClass]: currentTab() === Tabs.Data,
                [notActiveClass]: currentTab() !== Tabs.Data,
              }}
            >
              Loot
            </a>
          </li>
          <li class="w-full">
            <a
              onClick={() => setcurrentTab(Tabs.Settings)}
              class="inline-block cursor-pointer w-full p-4 bg-white rounded-r-lg dark:hover:text-white"
              classList={{
                [activeClass]: currentTab() === Tabs.Settings,
                [notActiveClass]: currentTab() !== Tabs.Settings,
              }}
            >
              Settings
            </a>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Match when={currentTab() === Tabs.Data}>
            <LootTable />
          </Match>
          <Match when={currentTab() === Tabs.Settings}>
            <Settings />
          </Match>
        </Switch>
      </main>
    </div>
  );
};

export default DataPage;
