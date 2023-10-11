import React, { useState } from 'react';
import { FbAdd } from '../../../Config/Firebase/FirebaseMethods'; // Import your Firebase functions
import { Button } from '@mui/material';
import BAInput from '../../../Components/BAInput';

export default function CourseForm  ()  {
  const [courseData, setCourseData] = useState({
    name: '',
    duration: '',
    fees: 0,
    teacher: '',
  });

  const fillmodel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const AddCourse = async () => {
    try {
      await FbAdd('courses', courseData); 
      setCourseData({ ...courseData, name: '', duration: '', fees: 0, teacher: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div>
      <form   className='d-flex flex-col justify-center align-items-center  w-50'>
      <h2>Course Form</h2>
        <div className="p-2 text-center" >

        <label >Course Name:</label>
        <input
         className='p-2 m-3 shadow-md form-control' 
         type="text"
          name="name"
           value={courseData.name}
            onChange={fillmodel}
             />
        </div>
        <div className="p-2 text-center">
        <label>Duration:</label>
        <input
         className='p-2 m-3 shadow-md form-control' 
           type="text" 
           name="duration" 
           value={courseData.duration} 
           onChange={fillmodel} />
        </div>
        <div className="p-2 text-center">
        <label>Fees:</label>
        <input
          className='p-2 m-3 shadow-md form-control'
           type="number"
            name="fees" 
            value={courseData.fees} 
            onChange={fillmodel} />
        </div>
        <div className="p-2 text-center">
        <label>Teacher:</label>
        <input
          className='p-2 m-3 shadow-md form-control'
           type="text"
            name="teacher"
             value={courseData.teacher}
              onChange={fillmodel} />
        </div>
        <div className="p-2">
        <Button
           type="button" onClick={AddCourse}
             variant="outlined">Add Course</Button>
        
        </div>
      </form>
    </div>
  );
};


