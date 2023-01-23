import { Component, For } from "solid-js";

interface ItemListProps {
  items: string[];
}

const ItemList: Component<ItemListProps> = (props) => {
  return (
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
      <For each={props.items}>{(item) => <li>{item}</li>}</For>
    </ul>
  );
};

export default ItemList;
