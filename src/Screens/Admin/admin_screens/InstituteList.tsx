// export default function InstituteList (){
//     const institutes = [
//         {
//           name: 'Sample Institute 1',
//           logo: 'sample_logo_1.png',
//           campuses: 3,
//           isActive: true,
//         },
//         {
//           name: 'Sample Institute 2',
//           logo: 'sample_logo_2.png',
//           campuses: 1,
//           isActive: false,
//         },
//         {
//           name: 'Sample Institute 3',
//           logo: 'sample_logo_3.png',
//           campuses: 2,
//           isActive: true,
//         },
//       ];
    
//     return (<>
//      <div>
//       <h2>Institute List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Institute Name</th>
//             <th>Logo Image</th>
//             <th>No of Campus</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {institutes.map((institute, index) => (
//             <tr key={index}>
//               <td>{institute.name}</td>
//               <td>
//                 <img src={institute.logo} alt={institute.name} width="50" />
//               </td>
//               <td>{institute.campuses}</td>
//               <td>{institute.isActive ? 'Active' : 'Inactive'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
    
//     </>)
// }
import React from 'react';
import BATable from '../../../Components/BATable'; 
import logo1 from "../../.././Assets/Logos/logo1.png";
export default function  InstituteList ()  {
  const institutes = [
    {
      name: 'Sample Institute 1',
      logo: "logo1",
      campuses: 3,
      isActive: true,
    },
    {
      name: 'Sample Institute 2',
      logo: 'sample_logo_2.png',
      campuses: 1,
      isActive: false,
    },
    {
      name: 'Sample Institute 3',
      logo: 'sample_logo_3.png',
      campuses: 2,
      isActive: true,
    },
  ];


  const cols = [
    { heading: 'Institute Name', key: 'name' },
    { heading: 'Logo Image', key: 'logo' },
    { heading: 'No of Campuses', key: 'campuses' },
    { heading: 'Status', key: 'isActive', type: 'boolean' }, // Assuming 'isActive' is a boolean value
  ];

  return (
    <div>
      <h2 className='text-center p-2 m-2'>Institute List</h2>
 
      <BATable label="Institutes" datasourse={institutes} cols={cols} />
    </div>
  );
};


