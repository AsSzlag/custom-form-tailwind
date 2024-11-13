import InputWithLabel from './components/InputWithLabel';
import PhotoUpload from './components/PhotoUpload';
import SliderInput from './components/SliderInput';
import CallToAction from './components/CallToAction';
function App() {

  return (
    <div className=" w-full h-screen p-[23px] pt-[96px]">
      <div className="font-normal font-main text-h1 text-main mb-6">Personal info</div>
      <form>
        <InputWithLabel name="First name" />
        <InputWithLabel name="Last name" />
        <InputWithLabel name="Email address" />
        <SliderInput />
        <PhotoUpload />
        <div className="font-normal font-main text-h1 text-main mb-6">Your workout</div>
        <div>Date picker here!</div>
        <CallToAction />
      </form>
    </div>
  )
}

export default App
