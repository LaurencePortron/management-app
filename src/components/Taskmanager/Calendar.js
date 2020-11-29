import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default function Calendar() {
  return (
    <div>
      <p>Select start date:</p>
      <DayPickerInput onDayChange={(day) => console.log(day)} />
    </div>
  );
}
