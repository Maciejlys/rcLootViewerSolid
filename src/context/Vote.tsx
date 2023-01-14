import { createSignal, createRoot, createEffect, on } from "solid-js";
import { VoteType } from "~/models/voteType";

function createVote() {
  const [vote, setVotes] = createSignal<VoteType>({
    Bis: "1",
    Up: "3",
    OffSpec: "4",
  });
  const [votesChanged, setvotesChanged] = createSignal(false);

  return { vote, setVotes, votesChanged, setvotesChanged };
}

export default createRoot(createVote);
