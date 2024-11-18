import InputWithLabel from './components/InputWithLabel';
import PhotoUpload from './components/PhotoUpload';
import SliderInput from './components/SliderInput';
import CallToAction from './components/CallToAction';
import { useEffect, useState } from 'react';
import Calendar from './components/Calendar';

const COUNTRY_CODE = import.meta.env.VITE_COUNTRY_CODE;
const YEAR = import.meta.env.VITE_YEAR;
const API_KEY = import.meta.env.VITE_API_KEY;

interface FormDataProps {
  [key: string]: string;
}

export interface Holiday {
  name: string;
  date: string;
  iso: string;
  year: number;
  type: string;
  country: string;
}

function App() {
  //I've created this to store data in one object, so it's easier to send to backend
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    photo: "",
    date: "",
  });
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const api_url = `https://api.api-ninjas.com/v1/holidays?country=${COUNTRY_CODE}&year=${YEAR}`

  useEffect(() => {
    const fetchHolidays = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(api_url, {
          headers: {
            'X-Api-Key': API_KEY
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch holidays');
        }

        const data = await response.json();
        setHolidays(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, [api_url]);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://letsworkout.pl/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form',);
    }
  };

  const allRequiredFieldsAreFilled = Object.values(formData).every(value => value !== "");

  return (
    <div className=" w-full h-screen p-[23px] pt-[96px] max-w-md mx-auto" >
      <div className="font-normal font-main text-h1 text-main mb-6">Personal info</div>
      <form onSubmit={handleSubmit}>
        <InputWithLabel name='firstName' title="First Name" onChange={handleInputChange} />
        <InputWithLabel name='lastName' title="Last Name" onChange={handleInputChange} />
        <InputWithLabel name='email' title="Email Address" type="email" onChange={handleInputChange} />
        <SliderInput name='age' title="Age" onChange={handleInputChange} />
        <PhotoUpload name='photo' title="Photo" onChange={handleInputChange} />
        {!isLoading && <Calendar name='date' title="Your Workout" onChange={handleInputChange} datesFromApi={holidays} />}
        <CallToAction isFormValid={allRequiredFieldsAreFilled} />
      </form>
    </div>
  )
}

export default App
