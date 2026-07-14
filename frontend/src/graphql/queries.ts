import { gql } from "@apollo/client";

export const GET_STUDENT_COURSE_FACULTY = gql`
query {
  student(id: 1) {
    id
    name
    department

    courses {
      title
      credits

      faculty {
        name
        designation
      }
    }
  }
}`