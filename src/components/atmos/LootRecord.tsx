import { Component, createSignal } from "solid-js";
import { PlayerLoot } from "~/models/loot.model";
import PlayerModal from "../molecules/PlayerModal";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";

const LootRecord: Component<PlayerLoot> = (props) => {
  const [shown, setshown] = createSignal(false);

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.player}
      </th>
      <td class="px-6 py-4">{props.bises.length}</td>
      <td class="px-6 py-4">{props.ups.length}</td>
      <td class="px-6 py-4">{props.offSpec.length}</td>
      <td class="px-6 py-4">{props.score}</td>
      <td class="px-6 py-4">{props.adjusted}</td>
      <td class="px-6 py-4">
        <a
          class="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => setshown(true)}
        >
          <MagnifyingGlassIcon />
        </a>
      </td>
      <PlayerModal
        shown={shown()}
        close={() => setshown(false)}
        player={props}
      />
    </tr>
  );
};

export default LootRecord;
