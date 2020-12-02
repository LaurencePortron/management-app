import React, { useState } from 'react';
import CategoryDropDown from './CategoryDropDown';
import StatusDropDown from './StatusDropdown';
import ProjectCategoryDropDown from './ProjectCategoryDropDown';
import RandomCategoryDropDown from './RandomCategoryDropDown';

export default function DropDowns(props) {
  const [categorySelected, setCategorySelected] = useState(false);
  const [categoryOptionSelected, setCategoryOptionSelected] = useState('');
  const categories = ['Project', 'Random', 'Outdoors'];
  const projectsCategories = ['Personal', 'Professional'];
  const randomCategories = ['Mega', 'Super', 'OMG'];
  const statusCategories = ['Started', 'In Progress', 'Done'];

  const showDropDown = () => {
    setCategorySelected(true);
  };

  const selectOption = (e) => {
    setCategoryOptionSelected(e.target.id);
  };

  const resetDropDown = () => {
    setCategorySelected(false);
  };

  if (props.isCategory) {
    return (
      <div>
        <CategoryDropDown
          showDropDown={showDropDown}
          selectOption={selectOption}
          resetDropDown={resetDropDown}
          categorySelected={categorySelected}
          categoryOptionSelected={categoryOptionSelected}
          categories={categories}
        />
      </div>
    );
  }

  if (props.isSubCategory) {
    return (
      <ProjectCategoryDropDown
        showDropDown={showDropDown}
        selectOption={selectOption}
        resetDropDown={resetDropDown}
        categorySelected={categorySelected}
        categoryOptionSelected={categoryOptionSelected}
        projectsCategories={projectsCategories}
      />
    );
  }

  if (props.isSubCategory) {
    return (
      <RandomCategoryDropDown
        showDropDown={showDropDown}
        selectOption={selectOption}
        resetDropDown={resetDropDown}
        categorySelected={categorySelected}
        categoryOptionSelected={categoryOptionSelected}
        projectsCategories={projectsCategories}
        randomCategories={randomCategories}
      />
    );
  }

  if (props.isStatus) {
    return (
      <div>
        <StatusDropDown
          showDropDown={showDropDown}
          selectOption={selectOption}
          resetDropDown={resetDropDown}
          categorySelected={categorySelected}
          categoryOptionSelected={categoryOptionSelected}
          statusCategories={statusCategories}
        />
      </div>
    );
  }
  return null;
}
