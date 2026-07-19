export type Student = {
    id: number;
    name: string;
    department: string;
    courses: Course[];
}

export type Course = {
    id: number;
    title: string;
    credits: number;
    faculty: Faculty;
}
export type Faculty = {
    id: number;
    name: string;
    designation: string;
}




