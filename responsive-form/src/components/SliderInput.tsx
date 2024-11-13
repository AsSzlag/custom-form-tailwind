import React, { useState } from 'react'

const SliderInput = () => {
  const [value, setValue] = useState<number>(18);
  return (
    <div>
      <label htmlFor="small-range" className="block mb-2 text-sm font-medium">Age</label>
      <input id="small-range" type="range" min={8} max={100} value={value} onChange={(e) => setValue(parseInt(e.target.value))} className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700" />
    </div>
  )
}

export default SliderInput