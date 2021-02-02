import React, { useState } from 'react';
import TaskRow from './TaskRow';
import './Filter.css';

export default function Filter(props) {
  const [filtered, setFiltered] = useState(false);

  const isFiltered = () => {
    setFiltered(true);
  };

  return (
    <div>
      Filter by Category or Status
      <div>
        <input
          type='checkbox'
          id='category'
          name='category'
          onClick={isFiltered}
        />
        <label for='scales'>Category</label>
      </div>
      <div>
        <input type='checkbox' id='status' name='status' />
        <label for='horns'>Status</label>
      </div>
    </div>
  );
}
