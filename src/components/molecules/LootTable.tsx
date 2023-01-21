import { Component, createEffect, For, on } from "solid-js";
import Loot from "~/context/Loot";

import LootRecord from "../atmos/LootRecord";
import SortableButton from "../atmos/SortableButton";

const LootTable: Component<{}> = (props) => {
  const { sortItems, playersLoot } = Loot;

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-16">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"player"}
                label="Player"
              />
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"bises"}
                label="Bises"
              />
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"ups"}
                label="Upgrades"
              />
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"offSpec"}
                label="Offspec"
              />
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"score"}
                label="Score"
              />
            </th>
            <th scope="col" class="px-6 py-3 cursor-pointer">
              <SortableButton
                sortItems={sortItems}
                param={"adjusted"}
                label="Adjusted"
              />
            </th>
            <th scope="col" class="py-3"></th>
          </tr>
        </thead>
        <tbody>
          <For each={playersLoot()}>{(item) => <LootRecord {...item} />}</For>
        </tbody>
      </table>
    </div>
  );
};

export default LootTable;
