import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_STUDENT_COURSE_FACULTY } from "../graphql/queries";
import { Student } from "../types/universityType";
type getStudent = {
    student: Student
}
const Home = () => {
    const [student, setStudent] = useState<Student>()

    const { data } = useQuery<getStudent>(GET_STUDENT_COURSE_FACULTY);
    const getStudent = () => {
        if (data) {
            const { student } = data;
            const { id, name, department, courses } = student;
            setStudent({ id, name, department, courses })

        }
    }
    useEffect(() => { getStudent() }, [])

    return (
        <div>
            <center>
                <div style={{ backgroundColor: "beige", width: 500, padding: 30 }}>
                    <h3>Student Name: {student?.name}</h3>
                    <p>Department: {student?.department}</p>
                    {student?.courses.map((course) =>
                        <div>
                            <h4>Course Name: {course.title}</h4>
                            <p>Credits: {course.credits}</p>
                            <p>Faculty:{course.faculty.name}</p>
                        </div>
                    )}
                </div>




            </center>
        </div>
    )
}

export default Home;