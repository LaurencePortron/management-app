import React, { useState } from 'react';
import SelectDropDown from './SelectDropDown';
import './Taskdashboard.css';

export default function Taskdashboard() {
  const tableRows = [''];
  const [addTableRows, setAddTableRow] = useState(tableRows);
  const [clickToAddRows, setClickToAddRows] = useState(false);

  const handleAddTableRow = () => {
    setAddTableRow(['']);
  };

  const handleClickToAddRows = () => {
    setClickToAddRows(true);
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
            <td>b</td>
            <td>c</td>
            <td>d</td>
          </tr>
          {clickToAddRows
            ? addTableRows.map((addTableRow) => {
                return (
                  <tr>
                    <td key={addTableRows}>
                      {addTableRows} <SelectDropDown />
                    </td>
                    <td key={addTableRows}>{addTableRows}</td>
                    <td key={addTableRows}>{addTableRows}</td>
                    <td key={addTableRows}>{addTableRows}</td>
                  </tr>
                );
              })
            : ''}
          <span onClick={handleClickToAddRows}>&#43;</span>
        </tbody>
      </table>
    </>
  );
}
