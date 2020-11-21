import React, { useState } from 'react';
import './SelectDropDown.css';

export default function SelectDropdown(props) {
  const [mainIsSelected, setMainIsSelected] = useState(false);
  const [optionSelected, setOptionSelected] = useState('');

  const showDropDown = () => {
    setMainIsSelected(true);
  };

  const selectOption = (e) => {
    setOptionSelected(e.target.id);
  };

  const resetDropDown = () => {
    setMainIsSelected(false);
  };

  return (
    <div onClick={showDropDown}>
      {mainIsSelected ? (
        <div>
          <div className='dropdown-menu'>
            <strong>Menu</strong>
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              selectOption(e);
              resetDropDown();
            }}
            id='Project'
          >
            Project
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              selectOption(e);
              resetDropDown();
            }}
            id='cool'
          >
            cool
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              selectOption(e);
              resetDropDown();
            }}
            id='amazing'
          >
            amazing
          </div>
        </div>
      ) : (
        <div>
          <strong>{optionSelected ? optionSelected : <div>Menu</div>}</strong>
        </div>
      )}
    </div>
  );
}
