import React, { useState } from 'react';
import './Taskdashboard.css';
import Calendar from './Calendar';
import Filter from './Filter';
import DropDowns from './DropDowns';

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
              <DropDowns isCategory={true} />
            </td>
            <td>
              <DropDowns isSubCategory={true} />
            </td>
            <td>
              <DropDowns isStatus={true} />
            </td>
            <td>
              <Calendar />
            </td>
            <td>Duration</td>
          </tr>

          {tableRows.map((tableRow, index) => {
            return (
              <tr key={index}>
                <td>
                  {tableRow} <DropDowns isCategory={true} />
                </td>
                <td>
                  {tableRow} <DropDowns isSubCategory={true} />
                </td>
                <td>
                  {tableRow} <DropDowns isStatus={true} />
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
