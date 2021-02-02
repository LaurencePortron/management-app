import React from 'react';

export default function DurationDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDurationDropDown}>
      {props.durationCategorySelected ? (
        <div>
          <div className='category-dropdown-menu'>Duration</div>
          {props.durationCategories.map((durationCategory, index) => {
            return (
              <div
                className='first-option'
                id={durationCategory}
                key={durationCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectDurationOption(e);
                  props.resetDurationDropDown();
                }}
              >
                {durationCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.durationOptionSelected ? (
            props.durationOptionSelected
          ) : (
            <div className='dropdown-menu'>Duration</div>
          )}
        </div>
      )}
    </div>
  );
}
