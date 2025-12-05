// function declaration

function data(){
    console.log("hi hello");
}
data()


// function expression

let data=function(){
    console.log("javascript")
}
data()

// function with parameters

function data(a,b){
    console.log(`operation: ${a}+${b}=${a+b}`)
}
data(10,20)


// function without parameters

let data=function(){
    console.log("i love javascropt")
}
data()


// function with return

function data(a,b){
    c=a+b
    return c
}
console.log(data(1,2))


// function without return 

function data(){
    console.log("Hi This is HimaVarsha")
}
data()


// method object

let human={
    name:"HimaVarsha",
    age:21,
    data:function (){
        console.log(`hi HimaVarsha age is ${this.age}`)
    }
}
    console.log(human.data())


// arrow functions
let data=()=>{
    console.log("Namaste")
}
data()


// high order and call back function

function data(hi){
    console.log("higher order")
    hi();
    console.log("function")

}
function data1(){
    console.log("call back function")
}
data(data1)


// ananymous functions

let data=function(){
    console.log("functions without name")
}
data()

// iife function

(function(){
    console.log("immediately invoke function expression")
})
()

// recursive function

function factorial(i){
        if(i==1){
            return 1;
        }
        else{
            return i*factorial(i-1);
        }
}
console.log(factorial(4))