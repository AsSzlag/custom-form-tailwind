import React, { useState } from 'react'

const CallToAction = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  
  return (
    <div>
      <button type="button" disabled={isDisabled ? true : false} className=" w-full bg-primary rounded-[4px] hover:bg-secondary border border-border text-white font-bold py-2 px-4  disabled:bg-border">
        Send application 
      </button>
    </div>
  )
}

export default CallToAction