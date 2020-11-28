import React, { useState } from 'react';
import SelectDropDown from './SelectDropDown';
import './Taskdashboard.css';
import StatusDropdown from './StatusDropdown';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Taskdashboard() {
  const [tableRows, setTableRow] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const addTableRow = () => {
    setTableRow([...tableRows, '']);
  };
  const removeTableRow = () => {
    setTableRow(tableRows.slice(0, -1));
  };

  const handleDayClick = (day, { selected }) => {
    setSelectedDay(selected ? undefined : day);
  };

  return (
    <>
      <h1>Overview</h1>
      <table className='task-dashboard'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Status</th>
            <th>Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SelectDropDown />
            </td>
            <td></td>
            <td>
              <StatusDropdown />
            </td>
            <td>
              <DayPicker
                selectedDays={selectedDay}
                onDayClick={handleDayClick}
              />
              <p>
                {selectedDay
                  ? selectedDay.toLocaleDateString()
                  : 'Please select a day 👻'}
              </p>
            </td>
          </tr>
          {tableRows.map((tableRow, index) => {
            return (
              <tr key={index}>
                <td>
                  {tableRow} <SelectDropDown />
                </td>
                <td>{tableRow}</td>
                <td>{tableRow}</td>
                <td>{tableRow}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='plus' onClick={addTableRow}>
        +
      </div>
      <div className='minus' onClick={removeTableRow}>
        -
      </div>
    </>
  );
}
