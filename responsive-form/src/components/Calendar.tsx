import { useState } from 'react'
import DatePicker from 'react-datepicker';
import { Holiday } from '../App';
import infoIcon from '../assets/infoIcon.svg';

interface DatePickerProps {
  name: string;
  title: string;
  onChange: (name: string, value: string) => void;
  datesFromApi: Holiday[];
}

const MOCK_TIME_SLOTS = [
  { name: "12:00", start: "12:00", end: "13:00" },
  { name: "13:00", start: "13:00", end: "14:00" },
  { name: "14:00", start: "14:00", end: "15:00" },
  { name: "15:00", start: "15:00", end: "16:00" },
  { name: "16:00", start: "16:00", end: "17:00" }
]

const Calendar = ({ name, title, onChange, datesFromApi }: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const [observanceInfo, setObservanceInfo] = useState<string | null>(null);
  const nationalHolidays = datesFromApi
    .filter(holiday => holiday.type === "NATIONAL_HOLIDAY")
    .map(holiday => new Date(holiday.date))

  const onDateChange = (date: Date | null) => {
    if (date) {
      setDate(date);
      onChange(name, date.toString())
      const observance = checkForObservance(date)
      if (observance) setObservanceInfo(observance.name)
      else setObservanceInfo(null)
    }
  }

  //FIXME: this is not a good solution, it should be controlled component, solve issue with active state removing on keyup
  const onTimeSlotChange = (time: string) => {
    onChange('timeSlot', time)
  }

  //I've created this to showcase observance can be done as on mockup, but I decided not to push forward to add this to disabled dates f.e 11.11

  const checkForObservance = (date: Date) => {
    const observance = datesFromApi.find(holiday => (new Date(holiday.date)).toDateString() == date.toDateString())
    return observance
  }

  const isNotSunday = (date: Date) => {
    const day = date.getDay();
    return day !== 0
  }

  return (
    <div className='mb-6'>
      <div className="font-normal font-main text-h1 text-main mb-4">{title}</div>
      <div>
        <DatePicker
          selected={date}
          minDate={new Date()}
          onChange={onDateChange}
          excludeDates={nationalHolidays}
          filterDate={isNotSunday}
          inline
          monthClassName={() => "font-large leading-8"}
          weekDayClassName={() => " w-7 text-sm"}
          dayClassName={() => "w-8 h-8 leading-8 text-sm  rounded-full mx-[1px]"}
          calendarStartDay={1}

        />
      </div>
      {date && observanceInfo && <p className="mt-1 text-sm text-main flex items-center">  <img src={infoIcon} alt="info" className="w-4 h-4 inline-block mr-4" />It is {observanceInfo}</p>}
      {date &&
        <div >
          <div className='font-normal text-main text-sm font-main mt-4 mb-2'>Time</div>
          <div className='flex flex-wrap gap-2'>
            {MOCK_TIME_SLOTS.map((slot) => {
              return (
                <button key={slot.start} type="button" name={slot.start} onClick={(e) => { e.preventDefault(); onTimeSlotChange(slot.start) }} className='border bg-white rounded-lg w-20 h-[46px] border-border  active:border-2 active:outline-primary active:border-primary'>{slot.start}</button>
              )
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default Calendar