import { Button } from "@mui/material";
import BAButton from "../../../Components/BAButton";
import { useEffect, useState } from "react";
import { FbDelete, FbGet } from "../../../Config/Firebase/FirebaseMethods";
import { useNavigate } from "react-router-dom";

export default function StudentList() {


  const [Student, setStudentList] = useState<any>({})
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const StdData = await FbGet('studentsData');
        setStudentList(StdData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchStudentData();

  }, [])


  const Delete = async (id: string) => {
    try {
      await FbDelete('courses', id);

      const updatedCourses = Student.filter((institute: any) => institute.id !== id);
      setStudentList(updatedCourses);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <>
      <div>
        <div className='d-flex justify-around'>
          <h2 >Course List</h2>
          <BAButton
            label={'Add More'}
            variant={'outlined'}
            onClick={() => navigate(`/student_form`)
            } />
        </div>
        <table className='table'>
          <thead>
            <tr >
              <th>Student Name </th>
              <th>Father Name</th>
              <th>Cource </th>
              {/* <th>Status</th> */}

            </tr>
          </thead>
          <tbody>
            {Student.map((x: any, index: any) => (
              <tr key={index}>
                <td>{x.studentName}</td>
                <td>
                  {x.fatherName}
                </td>
                <td>
                  {x.course}
                </td>
                <td>
                  <Button
                    onClick={() => Delete(x.id)}
                    variant="outlined">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
























