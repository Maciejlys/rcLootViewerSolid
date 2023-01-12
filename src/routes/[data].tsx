import { Show } from "solid-js";
import { Navigate } from "solid-start";
import UploadPage from "~/components/pages/UploadPage";
import Loot from "~/context/Loot";

export default function Data() {
  const { fileName } = Loot;

  return (
    <Show when={fileName()} fallback={<Navigate href="/" />}>
      <div class="min-h-screen black bg-zinc-800 text-white ">
        <div class="max-w-7xl min-h-screen mx-auto">data</div>
      </div>
    </Show>
  );
}
