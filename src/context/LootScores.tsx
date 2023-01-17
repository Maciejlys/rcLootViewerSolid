import { createSignal, createRoot, createEffect, on } from "solid-js";
import { VoteType } from "../models/voteType";

function createLootScores() {
  const [itemWeight, setitemWeight] = createSignal<VoteType>({
    Bis: "2",
    Up: "1",
    OffSpec: "0.5",
  });
  const [contestedWeight, setcontestedWeight] = createSignal<number>(2);
  const [contestedItems, setcontestedItems] = createSignal<string[]>([
    "The Turning Tide",
  ]);

  const addContestedItem = (item: string) => {
    contestedItems().push(item);
  };

  return { contestedWeight, itemWeight, contestedItems, addContestedItem };
}

export default createRoot(createLootScores);
