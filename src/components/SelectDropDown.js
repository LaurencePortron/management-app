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
    <div className='dropdown-container' onClick={showDropDown}>
      {mainIsSelected ? (
        <div>
          <div className='dropdown-menu'>Menu</div>

          <div
            className='first-option'
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
            className='second-option'
            onClick={(e) => {
              e.stopPropagation();
              selectOption(e);
              resetDropDown();
            }}
            id='Random'
          >
            Random
          </div>
          <div
            className='third-option'
            onClick={(e) => {
              e.stopPropagation();
              selectOption(e);
              resetDropDown();
            }}
            id='Outdoors'
          >
            Outdoors
          </div>
        </div>
      ) : (
        <div>
          {optionSelected ? (
            optionSelected
          ) : (
            <div className='dropdown-menu'>Menu</div>
          )}
        </div>
      )}
    </div>
  );
}
