import {
  Component,
  createEffect,
  createSignal,
  Match,
  on,
  Switch,
} from "solid-js";
import { useNavigate } from "solid-start";
import Loot from "~/context/Loot";
import FileUploader from "../molecules/FileUploader";
import Stepper from "../molecules/Stepper";
import Tooltip from "../atmos/Tooltip";
import Votes from "../organizms/Votes";

const steps = ["Upload", "Votes"];
const buttonTooltips = ["Upload file first!", "Enter values first!"];

const UploadPage: Component<{}> = () => {
  const [step, setstep] = createSignal(1);
  const [disableButton, setdisableButton] = createSignal(true);
  const { fileName } = Loot;
  const navigate = useNavigate();
  createEffect(
    on(step, (step) => {
      if (step > 1) {
        throw navigate("/data");
      }

      setdisableButton(true);
    })
  );
  createEffect(() => {
    fileName() && setdisableButton(false);
  });
  return (
    <div class="flex flex-col items-center justify-center min-h-screen gap-32">
      <header class="flex w-1/2 items-center justify-center">
        <Stepper currentStep={step()} steps={steps} />
      </header>
      <div class="flex w-1/2 h-96 items-center justify-center">
        <Switch>
          <Match when={step() === 0}>
            <FileUploader />
          </Match>
          <Match when={step() === 1}>
            <Votes />
          </Match>
        </Switch>
      </div>
      <footer class="flex w-1/2 items-center justify-center">
        <Tooltip msg={buttonTooltips[step()]} shouldShow={disableButton()}>
          <button
            onClick={() => setstep(step() + 1)}
            type="button"
            disabled={disableButton()}
            class="w-full text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600"
            classList={{
              "cursor-not-allowed dark:bg-slate-700": disableButton(),
              "cursor-pointer dark:hover:bg-purple-700 dark:focus:ring-purple-900 bg-purple-700 hover:bg-purple-800":
                !disableButton(),
            }}
          >
            Next
          </button>
        </Tooltip>
      </footer>
    </div>
  );
};

export default UploadPage;
