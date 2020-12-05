import React from 'react';
import './Taskdashboard.css';

import TaskTable from './TaskTable';
import TaskRow from './TaskRow';

export default function Taskdashboard(props) {
  return (
    <div>
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
          <TaskTable>
            <TaskRow />
          </TaskTable>
        </tbody>
      </table>
    </div>
  );
}
