function sayMyName(){
    console.log("h");
    console.log("i");
}

sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
    
}
addTwoNumbers(2,3)

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        
    }else{
        return `${username} just logged in`
    }
}

console.log(loginUserMessage("arunima"))
console.log(loginUserMessage()) //undefined just logged in

function calc(...num){
    return num
}
console.log(calc(200,2));
