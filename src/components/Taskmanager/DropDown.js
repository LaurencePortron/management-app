import React, { useState } from 'react';
import CategoryDropDown from './CategoryDropDown';
import StatusDropDown from './StatusDropdown';
import SubCategoryDropDown from './SubCategoryDropDown';

export default function DropDown(props) {
  const [categorySelected, setCategorySelected] = useState(false);
  const [categoryOptionSelected, setCategoryOptionSelected] = useState('');
  const categories = ['Project', 'Random', 'Outdoors'];
  const subCategories = ['Personal', 'Professional'];
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
      <div>
        <SubCategoryDropDown
          showDropDown={showDropDown}
          selectOption={selectOption}
          resetDropDown={resetDropDown}
          categorySelected={categorySelected}
          categoryOptionSelected={categoryOptionSelected}
          subCategories={subCategories}
        />
      </div>
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
}
