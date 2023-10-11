import React, { useEffect, useState } from 'react';
import { FbGet, FbDelete } from '../../../Config/Firebase/FirebaseMethods';
import { Button } from '@mui/material';

export default function CourseList() {
    const [courses, setCourses] = useState<any>([]);

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
            <h2 >Course List</h2>
            
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
                      
        </div>
    );
};

