import React from 'react';
import './SelectDropDown.css';

export default function CategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDropDown}>
      {props.categorySelected ? (
        <div>
          <div className='dropdown-menu'>Category</div>
          {props.categories.map((category, index) => {
            return (
              <div
                className='first-option'
                id={category}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOption(e);
                  props.resetDropDown();
                }}
              >
                {category}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.categoryOptionSelected ? (
            props.categoryOptionSelected
          ) : (
            <div className='dropdown-menu'>Category</div>
          )}
        </div>
      )}
    </div>
  );
}
