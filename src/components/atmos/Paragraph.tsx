import { ParentComponent } from 'solid-js'

const Paragraph: ParentComponent<{}> = (props) => {
  return (
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      {props.children}
    </p>
  )
}

export default Paragraph
