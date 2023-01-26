import { Component } from "solid-js";
import Paragraph from "../atmos/Paragraph";
import Tooltip from "../atmos/Tooltip";

import VoteForm from "../molecules/VoteForm";
import VotesSnapshot from "../molecules/VotesSnapshot";

const Votes: Component<{}> = (props) => {
  return (
    <div class="flex items-start justify-center gap-10">
      <div class="flex w-1/2 flex-auto justify-center">
        <VoteForm />
      </div>
      <div class="flex w-1/2 flex-auto justify-center">
        <VotesSnapshot />
      </div>
    </div>
  );
};

export default Votes;
