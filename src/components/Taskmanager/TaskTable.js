// import React, { useState } from 'react';
// import './Taskdashboard.css';
// import CategoryDropDown from './CategoryDropDown';
// import ProjectCategoryDropDown from './ProjectCategoryDropDown';
// import RandomCategoryDropDown from './RandomCategoryDropDown';
// import StatusDropDown from './StatusDropdown';
// import { Calendar } from 'react-feather';

// export default function TaskTable(props) {
//   const [tableRows, setTableRow] = useState([]);

//   const addTableRow = () => {
//     setTableRow([...tableRows, '']);
//   };
//   const removeTableRow = () => {
//     setTableRow(tableRows.slice(0, -1));
//   };
//   return (
//     <>
//       {tableRows.map((tableRow, index) => {
//         return (
//           <tbody>
//             <table className='task-dashboard'>
//               <tr key={index}>
//                 <td>
//                   {tableRow}
//                   <CategoryDropDown />
//                 </td>
//                 <td>
//                   {tableRow}
//                   <ProjectCategoryDropDown />
//                   <RandomCategoryDropDown />
//                 </td>
//                 <td>
//                   {tableRow}
//                   <StatusDropDown />
//                 </td>
//                 <td>
//                   {tableRow}
//                   <Calendar />
//                 </td>
//                 <td>Duration</td>
//               </tr>
//             </table>
//           </tbody>
//         );
//       })}

//       <div className='remove-add-button-container'>
//         <div className='plus' onClick={addTableRow}>
//           +
//         </div>
//         <div className='minus' onClick={removeTableRow}>
//           -
//         </div>
//       </div>
//     </>
//   );
// }
