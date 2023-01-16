import { Component, For } from "solid-js";
import Loot from "~/context/Loot";
import LootRecord from "../atmos/LootRecord";
import Tooltip from "../atmos/Tooltip";

const LootTable: Component<{}> = (props) => {
  const { separatedItems } = Loot;

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
            <th scope="col" class="px-6 py-3">
              Score
            </th>
            <th scope="col" class="px-6 py-3">
              Adjusted
            </th>
            <th scope="col" class="py-3"></th>
          </tr>
        </thead>
        <tbody>
          <For each={separatedItems()}>
            {(item, index) => <LootRecord {...item} />}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default LootTable;
