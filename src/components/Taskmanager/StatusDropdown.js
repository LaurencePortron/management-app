import React from 'react';

export default function StatusDropDown(props) {
  const { showDropDown, selectOption, resetDropDown } = props;

  return (
    <div className='dropdown-container' onClick={showDropDown}>
      <div>
        <div className='dropdown-menu'>Status</div>

        <div
          className='first-option'
          onClick={(selectOption, resetDropDown)}
          id='Project'
        >
          Started
        </div>

        <div
          className='second-option'
          onClick={(selectOption, resetDropDown)}
          id='Random'
        >
          In Progress
        </div>
        <div
          className='third-option'
          onClick={(selectOption, resetDropDown)}
          id='Outdoors'
        >
          Done
        </div>
      </div>

      <div>
        <div className='dropdown-menu'>Status</div>
      </div>
    </div>
  );
}
