import { students } from "../data/studentData"

const getStudentById = (id: number) => {
    try {
        if (isNaN(id)) {
            throw "Invalid Id"
        }
        const student = students.find(student => student.id == id);
        return student
    }
    catch (error) {
        throw error
    }
}

export default getStudentById;