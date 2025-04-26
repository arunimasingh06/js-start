//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"arunima",
    [mySym]:"mykey1",
    age:19,
    location:"bengaluru",
    email: "arunima@gmail.com",
    isLoggedIn: false
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(typeof JsUser.mySym) //string

console.log(JsUser[mySym])

// when wanted to be refered as symbol then it is imp that the 
// keys should be in square brackets

JsUser.email="arunimasingh@gmail.com"
//Object.freeze(JsUser) //no changes will be propagated after this

JsUser.email="tmlc"
console.log(JsUser["email"])

JsUser.greeting=function(){
    console.log("hello Js user")
}

JsUser.greeting2=function(){
    console.log(`hello Js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())

