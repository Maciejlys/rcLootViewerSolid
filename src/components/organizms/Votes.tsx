import { Component } from "solid-js";
import Paragraph from "../atmos/Paragraph";
import Tooltip from "../atmos/Tooltip";

import VoteForm from "../molecules/VoteForm";
import VotesSnapshot from "../molecules/VotesSnapshot";

const Votes: Component<{}> = (props) => {
  return (
    <div class="flex items-center gap-10">
      <VoteForm />
      <div class="flex flex-col w-full flex-auto">
        <VotesSnapshot />
      </div>
    </div>
  );
};

export default Votes;
