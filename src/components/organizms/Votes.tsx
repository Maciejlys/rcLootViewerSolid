import { Component } from "solid-js";
import VoteForm from "../molecules/VoteForm";

const Votes: Component<{}> = (props) => {
  return (
    <div class="flex">
      <VoteForm />
    </div>
  );
};

export default Votes;
