import { courses } from "../data/coursesData";

const getCourseById = (id: number) => {
    try {
        if (isNaN(id)) {
            throw "Invalid Id"
        }
        const course = courses.filter(course => course.id == id);
        return course
    }
    catch (error) {
        throw error
    }
}

export default getCourseById;