import React, { useState, useRef } from 'react';
import './SelectDropDown.css';

export default function SelectDropdown(props) {
  const [mainIsSelected, setMainIsSelected] = useState(false);
  const optionList = {
    project: 'Project',
    sport: 'Sport',
    travels: 'Travels',
    outdoors: 'outdoors',
  };
  const [optionSelected, setOptionSelected] = useState(optionList);

  const showDropDown = () => {
    setMainIsSelected(true);
  };

  const selectOption = () => {
    setOptionSelected('Project');
  };

  return (
    <div>
      <div onClick={showDropDown}>
        {mainIsSelected ? (
          <div>
            <div>
              <strong>Menu</strong>
            </div>
            <div>Project</div>
            <div>cool</div>
            <div>amazing</div>
          </div>
        ) : (
          <div>
            <strong>Menu</strong>
          </div>
        )}
      </div>
    </div>
  );
}
