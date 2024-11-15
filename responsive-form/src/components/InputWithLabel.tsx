import React, { useState } from 'react'
import errorIcon from '../assets/errorIcon.svg'

interface InputWithLabelProps {
  name: string;
  title: string;
  type?: string;
  onChange: (name: string, value: string) => void;
}

const InputWithLabel = ({ name, title, type, onChange }: InputWithLabelProps) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateInput = (value: string) => {
    // email regex from internet
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (type) {
      case 'email':
        if (!emailRegex.test(value)) {
          setError('Please use correct formatting. Example: address@email.com');
        } else {
          setError('');
        }
        break;

      default:
        if (!value.trim()) {
          setError(`${name} is required`);
        } else {
          setError('');
        }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
    onChange(name, newValue);
  };

  return (
    <div className='mb-6 w-full'>
      <label htmlFor={name} className="block font-normal text-main text-sm font-main ">{title}</label>
      <input type="text" id={name} value={value} onChange={handleInputChange}
        className={` w-[100%] p-2.5 box-border bg-white border border-border font-normal text-main text-sm font-main rounded-lg  active:border-2 focus-visible:outline-primary block h-[48px]
  ${error && 'border-errror border-2'}`}
        required />
      {error && <p className="mt-1 text-sm text-red-500">  <img src={errorIcon} alt="error" className="w-4 h-4 inline-block" /> {error}</p>}
    </div>
  )
}

export default InputWithLabel