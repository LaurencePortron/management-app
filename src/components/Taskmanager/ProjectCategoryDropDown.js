import React from 'react';
import './SelectDropDown.css';

export default function ProjectCategoryDropDown(props) {
  return (
    <div className='dropdown-container' onClick={props.showSubDropDown}>
      {props.subCategorySelected ? (
        <div>
          <div className='status-dropdown-menu'>ProjectCategory</div>
          {props.projectsCategories.map((projectCategory, index) => {
            return (
              <div
                className='first-option'
                id={projectCategory}
                key={projectCategory}
                onClick={(e) => {
                  e.stopPropagation();
                  props.selectSubOption(e);
                  props.resetSubDropDown();
                }}
              >
                {projectCategory}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {props.subCategoryOptionSelected ? (
            props.subCategoryOptionSelected
          ) : (
            <div className='dropdown-menu'>ProjectCategory</div>
          )}
        </div>
      )}
    </div>
  );
}
