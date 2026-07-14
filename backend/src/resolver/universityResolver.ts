import getCourseById from "../services/courseService";
import getEnrollmentById from "../services/enrollmentService";
import getFacultyById from "../services/facultyService";
import getStudentById from "../services/studentService";


const resolvers = {
    Query: {
        student: (_parent: { id: number }, args: { id: number }) => getStudentById(args.id),
    },
    Student: {
        courses: (parent: { id: number }) => {
            const enrollment = getEnrollmentById(parent.id);
            if (enrollment) {
                const course = getCourseById(enrollment.courseId);
                return course;
            }
        }
    },
    Course: {
        faculty: (parent: { id: number }) => getFacultyById(parent.id)
    }
};

export default resolvers;