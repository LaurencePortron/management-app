import React from 'react';
import './SelectDropDown.css';

export default function RandomCategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDropDown}>
      {props.categorySelected ? (
        <div>
          <div className='status-dropdown-menu'>RandomCategory</div>
          {props.randomCategories.map((randomCategory, index) => {
            return (
              <div
                className='first-option'
                id={randomCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOption(e);
                  props.resetDropDown();
                }}
              >
                {randomCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.categoryOptionSelected ? (
            props.categoryOptionSelected
          ) : (
            <div className='dropdown-menu'>RandomCategory</div>
          )}
        </div>
      )}
    </div>
  );
}
