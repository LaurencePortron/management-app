import React, { useState } from 'react';
import CategoryDropDown from './CategoryDropDown';
import ProjectCategoryDropDown from './ProjectCategoryDropDown';
import RandomCategoryDropDown from './RandomCategoryDropDown';
import StatusDropDown from './StatusDropdown';
import Trash2 from '../images/Trash2';
import Calendar from './Calendar';
import './Taskdashboard.css';

export default function TaskRow(props) {
  // DropDown states
  const [categoryOptionSelected, setCategoryOptionSelected] = useState('');
  const [subCategoryOptionSelected, setSubsCategoryOptionSelected] = useState(
    ''
  );
  const [statusOptionSelected, setStatusCategoryOptionSelected] = useState('');
  const [categorySelected, setCategorySelected] = useState(false);
  const [subCategorySelected, setSubCategorySelected] = useState(false);
  const [statusCategorySelected, setStatusCategorySelected] = useState(false);

  // DropDown values
  const categories = ['Project', 'Random', 'Outdoors'];
  const projectsCategories = ['Personal', 'Professional'];
  const randomCategories = ['Mega', 'Super', 'OMG'];
  const statusCategories = ['Started', 'In Progress', 'Done'];

  // Dropdown functions
  // Show Dropdown
  const showDropDown = () => {
    setCategorySelected(true);
  };

  const showSubDropDown = () => {
    setSubCategorySelected(true);
  };

  const showStatusDropDown = () => {
    setStatusCategorySelected(true);
  };

  // Change initial value to selected value
  const selectOption = (e) => {
    setCategoryOptionSelected(e.target.id);
  };

  const selectSubOption = (e) => {
    setSubsCategoryOptionSelected(e.target.id);
  };

  const selectSatusOption = (e) => {
    setStatusCategoryOptionSelected(e.target.id);
  };

  // Reset DropDown
  const resetDropDown = () => {
    setCategorySelected(false);
  };

  const resetSubDropDown = () => {
    setSubCategorySelected(false);
  };

  const resetStatusDropDown = () => {
    setStatusCategorySelected(false);
  };

  return (
    <tr>
      <td>
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
      </td>
      <td>
        {categoryOptionSelected === 'Project' ? (
          <ProjectCategoryDropDown
            showSubDropDown={showSubDropDown}
            selectSubOption={selectSubOption}
            resetSubDropDown={resetSubDropDown}
            subCategorySelected={subCategorySelected}
            subCategoryOptionSelected={subCategoryOptionSelected}
            projectsCategories={projectsCategories}
          />
        ) : (
          ''
        )}
        {categoryOptionSelected === 'Random' ? (
          <RandomCategoryDropDown
            showSubDropDown={showSubDropDown}
            resetSubDropDown={resetSubDropDown}
            selectSubOption={selectSubOption}
            subCategorySelected={subCategorySelected}
            subCategoryOptionSelected={subCategoryOptionSelected}
            randomCategories={randomCategories}
          />
        ) : (
          ''
        )}
      </td>
      <td>
        <StatusDropDown
          showStatusDropDown={showStatusDropDown}
          selectSatusOption={selectSatusOption}
          resetStatusDropDown={resetStatusDropDown}
          statusCategorySelected={statusCategorySelected}
          statusOptionSelected={statusOptionSelected}
          statusCategories={statusCategories}
        />
      </td>
      <td>
        <Calendar />
      </td>
      <td>Duration</td>
      <div className='minus' onClick={props.removeTableRow}>
        <Trash2 />
      </div>
    </tr>
  );
}
