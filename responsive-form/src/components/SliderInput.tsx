import { useState } from 'react'

interface SliderInputProps{
  name: string; 
  title: string;
  onChange: (name: string, value: string) => void;
}

const SliderInput = ({name, title, onChange}: SliderInputProps) => {
  const [value, setValue] = useState<number>(18);

  const percentage = ((value - 8) / (100 - 8)) * 100;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value)
    setValue(value)
    onChange(name, value.toString())
  }

  return (
    <div className="relative h-24 mb-6">
      <label htmlFor="small-range" className="block mb-2 text-sm font-medium">{title}</label>
      <input
        required
        id="small-range"
        type="range"
        min={8}
        max={100}
        value={value}
        onChange={handleChange}
        className="w-full h-1 mb-6 bg-border rounded-lg appearance-none cursor-pointer range-sm peer accent-primary peer"
      /><div style={{ left: `${percentage}%` }} className="absolute left-1/2 -translate-x-1/2 bottom-0  bg-white border border-border pointer-events-none bg-gwhite px-2 py-1 rounded text-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-2 after:border-4 after:border-transparent after:border-b-border">
        <span className='text-primary'>{value}</span>
      </div>
    </div>
  )
}

export default SliderInput