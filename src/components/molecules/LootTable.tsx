import { Component, For } from "solid-js";
import Loot from "~/context/Loot";
import ArrowSvg from "../atmos/ArrowSvg";
import LootRecord from "../atmos/LootRecord";

const LootTable: Component<{}> = (props) => {
  const { separatedItems, sortItems } = Loot;

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-16">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nickname
            </th>
            <th scope="col" class="px-6 py-3">
              Bises
            </th>
            <th scope="col" class="px-6 py-3">
              Upgrades
            </th>
            <th scope="col" class="px-6 py-3">
              Offspec
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <div class="flex items-center" onClick={() => sortItems("score")}>
                Score
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 h-3 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">
              Adjusted
            </th>
            <th scope="col" class="py-3"></th>
          </tr>
        </thead>
        <tbody>
          <For each={separatedItems()}>
            {(item) => <LootRecord {...item} />}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default LootTable;
