import React, { useState } from 'react';
import './Taskdashboard.css';
import PlusCircle from '../images/PlusCircle';
import TaskRow from './TaskRow';

export default function TaskTable(props) {
  const [tableRows, setTableRow] = useState([]);

  const addTableRow = () => {
    setTableRow([...tableRows, '']);
  };
  const removeTableRow = (id) => {
    setTableRow(tableRows.slice(0, -1));
  };

  return (
    <>
      {tableRows.map((tableRow, index) => {
        return <TaskRow key={index} removeTableRow={removeTableRow} />;
      })}
      <div className='plus' onClick={addTableRow}>
        <PlusCircle />
      </div>
    </>
  );
}
