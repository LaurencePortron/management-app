import React from 'react';
import './SelectDropDown.css';

export default function StatusDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDropDown}>
      {props.categorySelected ? (
        <div>
          <div className='status-dropdown-menu'>Status</div>
          {props.statusCategories.map((statusCategory, index) => {
            return (
              <div
                className='first-option'
                id={statusCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOption(e);
                  props.resetDropDown();
                }}
              >
                {statusCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.categoryOptionSelected ? (
            props.categoryOptionSelected
          ) : (
            <div className='dropdown-menu'>Status</div>
          )}
        </div>
      )}
    </div>
  );
}
