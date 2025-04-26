let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString()) //Fri Apr 25 2025

console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date("1947-08-15")

console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.getTime())

let newDate=new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})



