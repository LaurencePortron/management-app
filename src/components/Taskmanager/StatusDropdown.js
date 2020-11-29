import React from 'react';
import './SelectDropDown.css';

export default function StatusDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showStatusDropDown}>
      {props.subCategorySelected ? (
        <div>
          <div className='dropdown-menu'>Status</div>
          {props.subCategories.map((subCategory, index) => {
            return (
              <div
                className='first-option'
                id={subCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOptionSubCategory(e);
                  props.resetStatusDropDown();
                }}
              >
                {subCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.subCategoryOptionSelected ? (
            props.subCategoryOptionSelected
          ) : (
            <div className='dropdown-menu'>Status</div>
          )}
        </div>
      )}
    </div>
  );
}
