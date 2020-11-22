import React, { useState } from 'react';
import SelectDropDown from './SelectDropDown';
import './Taskdashboard.css';
// import StatusDropdown from './StatusDropdown';

export default function Taskdashboard() {
  const [tableRows, setTableRow] = useState([]);

  const addTableRow = () => {
    setTableRow([...tableRows, '']);
  };
  const removeTableRow = () => {
    setTableRow(tableRows.slice(0, -1));
  };

  return (
    <>
      <h1>Dashboard</h1>
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
            <td>c</td>
            <td>d</td>
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
          <span onClick={addTableRow}>&#43;</span>
          <span onClick={removeTableRow}>-</span>
        </tbody>
      </table>
    </>
  );
}
