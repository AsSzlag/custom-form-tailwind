import React, { useState } from 'react'
import deleteIcon from '../assets/deleteIcon.svg'

interface PhotoUploadProps {
  name: string;
  title: string;
  onChange: (name: string, value: string) => void;
}

const PhotoUpload = ({name, title, onChange}: PhotoUploadProps) => {
  const [file, setFile] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {

    //TODO: check if file is an image and store image in DB, create url and send it back to formData
    const file = event.target.files?.[0]
    setFile(file?.name || '')
    if (file) {
      onChange(name, file.name)
    }
  }

  function resetFile(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setFile('')
    onChange(name, '')
  }

  return (
    <div className="flex items-center justify-center w-full mb-12 flex-col">
      <div className="text-main font-main text-sm self-start">{title}</div>
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 border-2 border-border rounded-lg cursor-pointer bg-white">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        {file ? <div onClick={resetFile} >{file} <img src={deleteIcon} alt="error" className="w-4 h-4 inline-block" /></div> : <p className=" text-sm text-primary underline font-main">Upload a file</p>}
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} required/>
        
    </label>
</div> 
  )
}

export default PhotoUpload