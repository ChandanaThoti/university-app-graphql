export const schema=`#graphql
 type Course{
    id:Int
    title:String
    credits:Int
    faculty:Faculty
    students:[Student!]
}
type Faculty{
    id:Int
    name:String
    designation:String
    courses:Course!
}

type Student{
    id:Int
    name:String
    contact:String
    department:String
    courses:[Course!]
}

type Query{
    student(id:Int):Student!
    courses(id:Int):[Course!]
    faculty(id:Int):Faculty!
}
`
