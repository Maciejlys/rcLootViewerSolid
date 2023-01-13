import { ParentComponent } from "solid-js";

const Paragraph: ParentComponent<{}> = (props) => {
  return (
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
      {props.children}
    </p>
  );
};

export default Paragraph;
