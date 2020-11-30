import React from 'react';
import './SelectDropDown.css';

export default function SubCategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDropDown}>
      {props.categorySelected ? (
        <div>
          <div className='status-dropdown-menu'>SubCategory</div>
          {props.subCategories.map((subCategory, index) => {
            return (
              <div
                className='first-option'
                id={subCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOption(e);
                  props.resetDropDown();
                }}
              >
                {subCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.categoryOptionSelected ? (
            props.categoryOptionSelected
          ) : (
            <div className='dropdown-menu'>SubCategory</div>
          )}
        </div>
      )}
    </div>
  );
}
