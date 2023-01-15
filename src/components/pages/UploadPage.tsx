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
import Tooltip from "../atmos/Tooltip";
import Paragraph from "../atmos/Paragraph";

const steps = ["Upload", "Votes"];
const buttonTooltips = ["", "Enter values first!"];

const UploadPage: Component<{}> = () => {
  const [disableButton, setdisableButton] = createSignal(true);
  const { fileName } = Loot;
  const navigate = useNavigate();

  createEffect(() => {
    fileName() && setdisableButton(false);
  });

  const handleStep = () => {
    fileName() && navigate("/loot");
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-screen gap-32">
      <header class="flex w-1/2 items-center justify-center">
        <Paragraph>
          Upload a .csv file that was exported from rcLootCouncil
        </Paragraph>
      </header>
      <div class="flex w-1/2 h-96 items-center justify-center">
        <FileUploader />
      </div>
      <footer class="flex w-1/2 items-center justify-center">
        <Tooltip msg={"Upload file first!"} shouldShow={disableButton()}>
          <button
            onClick={handleStep}
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
