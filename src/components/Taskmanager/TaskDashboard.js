import React, { useState } from 'react';
import './Taskdashboard.css';
import Calendar from './Calendar';
import Filter from './Filter';
import CategoryDropDown from './CategoryDropDown';
import ProjectCategoryDropDown from './ProjectCategoryDropDown';
import RandomCategoryDropDown from './RandomCategoryDropDown';
import StatusDropDown from './StatusDropdown';
import Trash2 from '../images/Trash2';
import PlusCircle from '../images/PlusCircle';

export default function Taskdashboard(props) {
  // Table states
  const [tableRows, setTableRow] = useState([]);

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

  // Table functions
  const addTableRow = () => {
    setTableRow([...tableRows, '']);
  };
  const removeTableRow = () => {
    setTableRow(tableRows.slice(0, -1));
  };

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
    <div>
      <div></div>
      <table className='task-dashboard'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub-category</th>
            <th>Status</th>
            <th>Timeline</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
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
              <div>
                <StatusDropDown
                  showStatusDropDown={showStatusDropDown}
                  selectSatusOption={selectSatusOption}
                  resetStatusDropDown={resetStatusDropDown}
                  statusCategorySelected={statusCategorySelected}
                  statusOptionSelected={statusOptionSelected}
                  statusCategories={statusCategories}
                />
              </div>
            </td>
            <td>
              <Calendar />
            </td>
            <td>Duration</td>
          </tr>

          {tableRows.map((tableRow, index) => {
            return (
              <tr key={index}>
                <td>
                  {tableRow}
                  <CategoryDropDown
                    showDropDown={showDropDown}
                    selectOption={selectOption}
                    resetDropDown={resetDropDown}
                    categorySelected={categorySelected}
                    categoryOptionSelected={categoryOptionSelected}
                    categories={categories}
                  />
                </td>
                <td>
                  {tableRow}
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
                  {tableRow}
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
                  {tableRow}
                  <Calendar />
                </td>
                <td>Duration</td>
                <div className='minus' onClick={removeTableRow}>
                  <Trash2 />
                </div>
              </tr>
            );
          })}

          <div className='remove-add-button-container'>
            <div className='plus' onClick={addTableRow}>
              <PlusCircle />
            </div>
          </div>
        </tbody>
      </table>
    </div>
  );
}
