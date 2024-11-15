import { useState } from 'react'
import DatePicker from 'react-datepicker';
import { Holiday } from '../App';

interface DatePickerProps {
  name: string;
  title: string;
  onChange: (name: string, value: string) => void;
  datesFromApi: Holiday[];
}

const Calendar = ({name, title, onChange, datesFromApi}: DatePickerProps) => {
  const [date, setDate] = useState<string>('');
  const [startDate, setStartDate] = useState(new Date());
  const nationalHolidays = datesFromApi
    .filter(holiday => holiday.type === "NATIONAL_HOLIDAY")
    .map(holiday => new Date(holiday.date))

  const onDateChange = (date: Date|null) => {
    if (date) setStartDate(date);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setDate(value)
    onChange(name, value.toString())
  }

  return (
    <div className='mb-6'>
    <div className="font-normal font-main text-h1 text-main mb-4">{title}</div>
    <div>
      <DatePicker
        selected={startDate}
        onChange={onDateChange}
        excludeDates={nationalHolidays}
        inline
        monthClassName={() => "text-red font-large"}
        weekDayClassName={() => "text-gray-500 w-8 h-8 leading-8 text-sm"}
        dayClassName={() => "w-8 h-8 leading-8 text-sm bg-red rounded-full mx-[1px]"}
        calendarStartDay={1}
      />
    </div>
  </div>
  )
}

export default Calendar