import React from 'react'

const PhotoUpload = () => {
  return (
    <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload a file</span></p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
  )
}

export default PhotoUpload