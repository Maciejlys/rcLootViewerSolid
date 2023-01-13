import { Component, For } from "solid-js";
import Loot from "~/context/Loot";

const VotesSnapshot: Component<{}> = (props) => {
  const { getDifferentVotes } = Loot;

  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Item
            </th>
            <th scope="col" class="px-6 py-3">
              Vote
            </th>
          </tr>
        </thead>
        <For each={getDifferentVotes()}>
          {(item, index) => (
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item[1]}
                </th>
                <td class="px-6 py-4">{item[0]}</td>
              </tr>
            </tbody>
          )}
        </For>
      </table>
    </div>
  );
};

export default VotesSnapshot;
