const user ={
    username: "arunima",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}
//talks about the current context , defines in that particular scope
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);//empty cus doesnt have any context

//browser ke andar global obj is window

// function one(){
//     let username1:"aru",
//     console.log(this.username1);
    
// }
// one()

//declaration of functions through arrow

const addtwo=(num1,num2) => {
    return num1+num2
}
addtwo(3,4)

const add= (num1,num2) => (num1+num2)

console.log(add(3,4))