import React, { useState } from 'react';
// import SelectDropDown from './SelectDropDown';
import './Taskdashboard.css';
// import StatusDropdown from './StatusDropdown';
import Calendar from './Calendar';
import Filter from './Filter';
import CategoryDropDown from './CategoryDropDown';
import StatusDropDown from './StatusDropdown';
import DropDown from './DropDown';

export default function Taskdashboard(props) {
  const [tableRows, setTableRow] = useState([]);

  const addTableRow = () => {
    setTableRow([...tableRows, '']);
  };
  const removeTableRow = () => {
    setTableRow(tableRows.slice(0, -1));
  };

  return (
    <>
      <h1>Overview</h1>
      <div>
        <Filter />
      </div>
      <table className='task-dashboard'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Status</th>
            <th>Timeline</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <DropDown />
            </td>
            <td></td>
            <td>ok</td>
            <td>
              <DropDown />
            </td>
            <td>Duration</td>
          </tr>

          {tableRows.map((tableRow, index) => {
            return (
              <tr key={index}>
                <td>
                  {tableRow} <CategoryDropDown />
                </td>
                <td>{tableRow}</td>
                <td>
                  {tableRow} <StatusDropDown />
                </td>
                <td>
                  {tableRow}
                  <Calendar />
                </td>
                <td>Duration</td>
              </tr>
            );
          })}
          <div className='remove-add-button-container'>
            <div className='plus' onClick={addTableRow}>
              +
            </div>
            <div className='minus' onClick={removeTableRow}>
              -
            </div>
          </div>
        </tbody>
      </table>
    </>
  );
}
