import React, { useState } from 'react';
import './DateTimeSelector.css';

interface DateTimeSelectorProps {
  onDateTimeChange: (dateTime: string) => void;
}

const DateTimeSelector: React.FC<DateTimeSelectorProps> = ({ onDateTimeChange }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    onDateTimeChange(`${event.target.value}T${time}`);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
    onDateTimeChange(`${date}T${event.target.value}`);
  };

  return (
    <div className="date-time-selector">
      <label>
        Fecha:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Hora:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
    </div>
  );
};

export default DateTimeSelector;