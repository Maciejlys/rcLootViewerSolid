import { Component, createEffect, createSignal, on, onCleanup } from "solid-js";
import { createStore } from "solid-js/store";
import LocalStorage from "~/context/LocalStorage";
import Vote from "~/context/Vote";
import TextInput from "../atmos/NumberInput";
import Title from "../atmos/Title";
import Toast from "./Toast";

const VoteForm: Component<{}> = (props) => {
  const { setVotes } = Vote;
  const { getLocalStorage, setLocalStorage } = LocalStorage;
  const [showToast, setshowToast] = createSignal(false);
  const [bis, setBis] = createSignal("");
  const [up, setUp] = createSignal("");
  const [off, setOff] = createSignal("");

  const handleSave = () => {
    setVotes({
      Bis: bis(),
      Up: up(),
      OffSpec: off(),
    });
    setLocalStorage("votes", {
      Bis: bis(),
      Up: up(),
      OffSpec: off(),
    });
    toasted();
  };

  createEffect(() => {
    const votes = getLocalStorage("votes");
    if (votes) {
      setBis(votes.Bis);
      setUp(votes.Up);
      setOff(votes.OffSpec);
    }
  });

  const toasted = () => {
    setshowToast(true);
    setTimeout(() => {
      setshowToast(false);
    }, 3000);
  };

  return (
    <form>
      <Toast description="Vote types saved." show={showToast()}></Toast>
      <Title>
        Vote types that are found next to an item in .csv file or on the right
      </Title>
      <div class="mb-6">
        <TextInput value={bis()} label="Bis" setter={setBis}></TextInput>
        <TextInput value={up()} label="Up" setter={setUp}></TextInput>
        <TextInput value={off()} label="Off" setter={setOff}></TextInput>
        <button
          onClick={handleSave}
          type="button"
          class="w-full text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default VoteForm;
