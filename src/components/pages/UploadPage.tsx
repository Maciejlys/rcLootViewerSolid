import { Component } from 'solid-js'

import FileUploader from '../molecules/FileUploader'

const UploadPage: Component<{}> = (props) => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen">
      <FileUploader />
    </div>
  )
}

export default UploadPage
