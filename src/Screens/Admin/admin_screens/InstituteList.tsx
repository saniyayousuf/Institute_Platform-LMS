import { useEffect, useState } from 'react';
import { FbDelete, FbGet } from '../../../Config/Firebase/FirebaseMethods';
import { Button } from '@mui/material';
import BAButton from '../../../Components/BAButton';
import { Route, Routes, useNavigate } from 'react-router-dom';
import InstituteForm from './InstituteForm';


export default function InstituteList() {

  const [institute, setinstitute] = useState<any>([]);
const Navigate = useNavigate()
  useEffect(() => {
    const fetchInstitute = async () => {
      try {
        const InsData = await FbGet('institutes');
        setinstitute(InsData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchInstitute();

  }, [])
  const Delete = async (id: string) => {
    try {
      await FbDelete('courses', id);

      const updatedCourses = institute.filter((institute: any) => institute.id !== id);
      setinstitute(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
 
  return (
    
    <div>
      <div className='d-flex justify-around'>

            <h2 >Course List</h2>
            <BAButton 
            label={'Add More'} 
            variant={'outlined'}
            onClick={()=> Navigate(`/admin-dashboard/Institute_list/Institute_form`)}/>
            </div>
            
                        <table className='table'>
                            <thead>
                                <tr >
                                    <th>Institute Name</th>
                                    <th>Logo</th>
                                    <th>No of Campus</th>
                                    <th>Status</th>
                                   

                                </tr>
                            </thead>
                            <tbody>
                                {institute.map((institute: any, index: any) => (
                                    <tr key={index}>
                                        <td>{institute.logo}</td>
                                        <td>
                                            {institute.numOfCampus}
                                        </td>
                                        <td>{institute.isActive}</td>
                                      
                                        <td><Button
                                            onClick={() => Delete(institute.id)}
                                            variant="outlined">Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Routes>
          <Route path="Institute_form" element={<InstituteForm />} />
          <Route path="Institute_list/*" element={<InstituteList />} />
          {/* <Route path="user_reg" element={<UserRegister />} /> */}
         
        </Routes>
                      
        </div>
        

  );
};


