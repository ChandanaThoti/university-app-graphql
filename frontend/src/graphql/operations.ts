import { useQuery } from "@apollo/client/react";
import { GET_STUDENT_COURSE_FACULTY } from "./queries";


const getStudent = async () => {
    const { data } = useQuery(GET_STUDENT_COURSE_FACULTY)
    console.log(data)
};
export default getStudent