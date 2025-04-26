const tinderUser= new Object() //singleton object
const tinderUser1 = {} //non singleton object

tinderUser.name="arunima"
tinderUser.id = "123abc"


console.log(tinderUser)

const regularUser= {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname :"arunima",
            lastname :"singh"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastname)

const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}
const obj3=Object.assign({},obj1, obj2)
console.log(obj3)

console.log(Object.keys(tinderUser));//returns ans in array

console.log(tinderUser.hasOwnProperty('id')) //returns boolean value

//destrucutirng
const course={
    coursename: "js",
    fees: "999",
    courseInstructor:"hiteshbrdr"
}

const {courseInstructor :inst} = course
console.log(inst);

const navBar = ({company}) => {

}

navBar(company = "hitesh")

//json apicall
// {
//     "name":"hitesh",
//     "coursename":"js-hindi",
//     "price":"9989"
// }

[
    {},
    {},
    {}
]