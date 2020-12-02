import React from 'react';
import './SelectDropDown.css';

export default function ProjectCategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showDropDown}>
      {props.categorySelected ? (
        <div>
          <div className='status-dropdown-menu'>ProjectCategory</div>
          {props.projectsCategories.map((projectCategory, index) => {
            return (
              <div
                className='first-option'
                id={projectCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectOption(e);
                  props.resetDropDown();
                }}
              >
                {projectCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.categoryOptionSelected ? (
            props.categoryOptionSelected
          ) : (
            <div className='dropdown-menu'>ProjectCategory</div>
          )}
        </div>
      )}
    </div>
  );
}
