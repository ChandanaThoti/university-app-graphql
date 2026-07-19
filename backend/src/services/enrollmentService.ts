import { courses } from "../data/coursesData";
import { enrollments } from "../data/enrollementData";

const getEnrollmentById = (id: number) => {
    try {
        if (isNaN(id)) {
            throw "Invalid Id"
        }
        const enrollment = enrollments.find(enrollment => enrollment.studentId == id);
        return enrollment
    }
    catch (error) {
        throw error
    }
}

export default getEnrollmentById;