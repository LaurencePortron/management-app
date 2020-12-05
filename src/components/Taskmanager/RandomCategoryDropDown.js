import React from 'react';
import './SelectDropDown.css';

export default function RandomCategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showSubDropDown}>
      {props.subCategorySelected ? (
        <div>
          <div className='status-dropdown-menu'>RandomCategory</div>
          {props.randomCategories.map((randomCategory, index) => {
            return (
              <div
                className='first-option'
                id={randomCategory}
                key={randomCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectSubOption(e);
                  props.resetSubDropDown();
                }}
              >
                {randomCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.subCategoryOptionSelected ? (
            props.subCategoryOptionSelected
          ) : (
            <div className='dropdown-menu'>RandomCategory</div>
          )}
        </div>
      )}
    </div>
  );
}
