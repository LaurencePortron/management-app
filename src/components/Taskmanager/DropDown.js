import React, { useState } from 'react';
import CategoryDropDown from './CategoryDropDown';
// import StatusDropDown from './StatusDropdown';

export default function DropDown(props) {
  const [categorySelected, setCategorySelected] = useState(false);
  const [categoryOptionSelected, setCategoryOptionSelected] = useState('');
  const categories = ['Project', 'Random', 'Outdoors'];

  // const [subCategorySelected, setSubCategorySelected] = useState(false);
  // const [subCategoryOptionSelected, setSubCategoryOptionSelected] = useState('');
  // const subcategories = ['Started', 'In Progress', 'Done'];

  const showDropDown = () => {
    setCategorySelected(true);
  };

  const selectOption = (e) => {
    setCategoryOptionSelected(e.target.id);
  };

  const resetDropDown = () => {
    setCategorySelected(false);
  };

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
      {/* <StatusDropDown
        showDropDown={showDropDown}
        selectOption={selectOption}
        resetDropDown={resetDropDown}
        subCategorySelected={subCategorySelected}
        subCategoryOptionSelected={subCategoryOptionSelected}
        subcategories={}
      /> */}
    </div>
  );
}
