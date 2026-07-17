import { useQuery } from "@apollo/client/react";
import { GET_STUDENT_COURSE_FACULTY } from "../graphql/queries";

const Home = () => {
    const { loading, error, data } = useQuery(GET_STUDENT_COURSE_FACULTY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <center>
                <div style={{ backgroundColor: "beige", width: 500, padding: 30 }}>
                    <h3>Student Name: {data.student?.name}</h3>
                    <p>Department: {data.student?.department}</p>
                    {data.student?.courses.map((course) =>
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