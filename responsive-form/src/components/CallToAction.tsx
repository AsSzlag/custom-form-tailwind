
interface CallToActionProps {
  isFormValid: boolean;
}

const CallToAction = ({ isFormValid }: CallToActionProps) => {
  
  return (
    <div>
      <button type="submit" disabled={!isFormValid} className=" w-full mb-24 bg-primary rounded-[4px] hover:bg-secondary border border-border text-white font-bold py-2 px-4  disabled:bg-border">
        Send application 
      </button>
    </div>
  )
}

export default CallToAction