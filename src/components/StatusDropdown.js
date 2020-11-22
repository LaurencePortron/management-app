// import React, { useState } from 'react';

// export default function StatusDropdown(props) {
//   const { showDropDown, selectOption, resetDropDown } = props;

//   return (
//     <div className='dropdown-container' onClick={showDropDown}>
//       {mainIsSelected ? (
//         <div>
//           <div className='dropdown-menu'>Project</div>

//           <div
//             className='first-option'
//             onClick={(e) => {
//               e.stopPropagation();
//               selectOption(e);
//               resetDropDown();
//             }}
//             id='Project'
//           >
//             Wild
//           </div>

//           <div
//             className='second-option'
//             onClick={(e) => {
//               e.stopPropagation();
//               selectOption(e);
//               resetDropDown();
//             }}
//             id='Random'
//           >
//             Personal
//           </div>
//         </div>
//       ) : (
//         <div>
//           {optionSelected ? (
//             optionSelected
//           ) : (
//             <div className='dropdown-menu'>Menu2</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
