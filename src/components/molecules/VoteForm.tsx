import { Component, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import Vote from "~/context/Vote";
import TextInput from "../atmos/NumberInput";

const VoteForm: Component<{}> = (props) => {
  const { setvotesChanged, setVotes } = Vote;
  const [bis, setBis] = createSignal("");
  const [up, setUp] = createSignal("");
  const [off, setOff] = createSignal("");

  createEffect(() => {
    if (bis().length > 0 && up().length > 0 && off().length > 0) {
      setVotes({
        Bis: bis(),
        Up: up(),
        OffSpec: off(),
      });

      setvotesChanged(true);
    }
  });

  return (
    <form>
      <div class="mb-6">
        <TextInput
          value={bis()}
          placeholder="1"
          label="Bis"
          setter={setBis}
        ></TextInput>
        <TextInput
          value={up()}
          placeholder="3"
          label="Up"
          setter={setUp}
        ></TextInput>
        <TextInput
          value={off()}
          placeholder="4"
          label="Off"
          setter={setOff}
        ></TextInput>
        <button
          onClick={() => {
            setBis("1");
            setUp("3");
            setOff("4");
          }}
          type="button"
          class="w-full text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600"
        >
          Default values
        </button>
      </div>
    </form>
  );
};

export default VoteForm;
