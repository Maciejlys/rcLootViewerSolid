import { Component, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import LocalStorage from "~/context/LocalStorage";
import LootScores from "~/context/LootScores";
import Vote from "~/context/Vote";
import TextInput from "../atmos/NumberInput";
import Title from "../atmos/Title";

const ScoresForm: Component<{}> = (props) => {
  const { setitemWeight, itemWeight, setcontestedWeight } = LootScores;
  const { getLocalStorage, setLocalStorage } = LocalStorage;
  const [bis, setBis] = createSignal("2");
  const [up, setUp] = createSignal("1");
  const [off, setOff] = createSignal("0.5");
  const [contested, setcontested] = createSignal("1");

  const handleSave = () => {
    setitemWeight({
      Bis: bis(),
      Up: up(),
      OffSpec: off(),
    });
    setcontestedWeight(+contested());
    setLocalStorage("scores", {
      Bis: bis(),
      Up: up(),
      OffSpec: off(),
      Contested: contested(),
    });
  };

  createEffect(() => {
    const votes = getLocalStorage("scores");
    if (votes) {
      setBis(votes.Bis);
      setUp(votes.Up);
      setOff(votes.OffSpec);
      setcontested(votes.Contested);
    }
  });

  return (
    <form>
      <Title>
        Vote weights that determine the score of an item from each category
      </Title>
      <div class="mb-6">
        <TextInput value={bis()} label="Bis weight" setter={setBis}></TextInput>
        <TextInput value={up()} label="Up weight" setter={setUp}></TextInput>
        <TextInput value={off()} label="Off weight" setter={setOff}></TextInput>
        <TextInput
          value={contested()}
          label="Contested items"
          setter={setcontested}
        ></TextInput>
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

export default ScoresForm;
