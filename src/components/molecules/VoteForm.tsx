import { Component, createSignal } from "solid-js";
import TextInput from "../atmos/NumberInput";

const VoteForm: Component<{}> = (props) => {
  const [bis, setBis] = createSignal(-1);
  const [up, setOs] = createSignal(-1);
  const [off, setOff] = createSignal(-1);

  return (
    <form>
      <div class="mb-6">
        <TextInput placeholder="test" label="Bis"></TextInput>
        <TextInput placeholder="test" label="Up"></TextInput>
        <TextInput placeholder="test" label="Off"></TextInput>
      </div>
    </form>
  );
};

export default VoteForm;
