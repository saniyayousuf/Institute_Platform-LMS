import React, { useEffect, useState } from 'react';
import { FbGet, FbDelete } from '../../../Config/Firebase/FirebaseMethods';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BAButton from '../../../Components/BAButton';
import CourseForm from './CourseForm';


export default function CourseList() {
    const [courses, setCourses] = useState<any>([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courseData = await FbGet('courses');
                setCourses(courseData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const DeleteCourse = async (id: string) => {
        try {
            await FbDelete('courses', id);

            const updatedCourses = courses.filter((course: any) => course.id !== id);
            setCourses(updatedCourses);
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <div>
            <div className='d-flex justify-around  mb-4'>

                <h2 >Course List</h2>
                <BAButton
                    label={'Add More'}
                    variant={'outlined'}
                    onClick={handleOpen} />
            </div>
            <table className='table '>
                <thead>
                    <tr >
                        <th>Course Name</th>
                        <th>Course Duration</th>
                        <th>Course Fee</th>
                        <th>Teacher Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course: any, index: any) => (
                        <tr key={index}>
                            <td>{course.name}</td>
                            <td>
                                {course.duration}
                            </td>
                            <td>{course.fees}</td>
                            <td>{course.teacher}</td>
                            <td><Button
                                onClick={() => DeleteCourse(course.id)}
                                variant="outlined">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CourseForm/>
                </Box>
            </Modal>
        </div>
    );
};

