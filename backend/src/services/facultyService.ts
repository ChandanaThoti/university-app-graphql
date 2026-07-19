import { faculty } from "../data/facultyData";

const getFacultyById = (id: number) => {
    try {
        if (isNaN(id)) {
            throw "Invalid Id"
        }
        const getFaculty = faculty.find(f => f.courseId == id);
        return getFaculty
    }
    catch (error) {
        throw error
    }
}

export default getFacultyById;