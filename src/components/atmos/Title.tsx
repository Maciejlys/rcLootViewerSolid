import { ParentComponent } from 'solid-js'

const Title: ParentComponent<{ size?: 1 | 2 | 3 | 4 | 5 | 6 }> = (props) => {
  return (
    <h1
      class={`mb-4 text-${
        props.size || 6
      }xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white`}
    >
      {props.children}
    </h1>
  )
}
export default Title
