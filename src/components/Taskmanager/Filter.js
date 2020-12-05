import React, { useState } from 'react';
import './Filter.css';

export default function Filter(props) {
  const [isFiltered, isSetFiltered] = useState(false);

  return (
    <div className='filter'>
      Filter through your tasks: most recent or by categrory
    </div>
  );
}
