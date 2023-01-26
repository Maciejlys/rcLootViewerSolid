import { Component } from "solid-js";
import ScoresForm from "../molecules/ScoresForm";
import Votes from "./Votes";

const Settings: Component<{}> = (props) => {
  return (
    <div class="py-16 flex flex-col items-center justify-center gap-10">
      <div class="w-full">
        <Votes />
      </div>
      <div class="w-1/2">
        <ScoresForm />
      </div>
    </div>
  );
};

export default Settings;
