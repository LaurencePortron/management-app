import React from 'react';
import './SelectDropDown.css';

export default function StatusDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showStatusDropDown}>
      {props.statusCategorySelected ? (
        <div>
          <div className='status-dropdown-menu'>Status</div>
          {props.statusCategories.map((statusCategory, index) => {
            return (
              <div
                className='first-option'
                id={statusCategory}
                key={statusCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectSatusOption(e);
                  props.resetStatusDropDown();
                }}
              >
                {statusCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.statusOptionSelected ? (
            props.statusOptionSelected
          ) : (
            <div className='dropdown-menu'>Status</div>
          )}
        </div>
      )}
    </div>
  );
}
