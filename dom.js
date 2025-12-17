// global scoping : var ,let , const supports global scoping

let a=10
function lets(){
    console.log(a)
}
lets()


const a=10
function consts(){
    console.log(a)
}
consts()


var a=10
function variables(){
    console.log(a)
}
variables()


// local scoping or functional scoping 

function global(){
    const a=10
    console.log(a)
}
global()
console.log(a)

function global(){
    let a=10
    console.log(a)
}
global()
console.log(a)

function global(){
    var a=10
    console.log(a)
}
global()
console.log(a)



// block scope
{
    let a=10
    console.log(a)
}
console.log(a)

{
    const a=10
    console.log(a)
}
console.log(a)

{
    var a=10
    console.log(a)
}
console.log(a)


// hoisting only function declaration and var 
fun()
function fun(){
    let a=100
    console.log(a)
}

console.log(A)
var A=10


// DOM SELECTORS
getElementById
let a=document.getElementById("head1")
a.style.color="red"

// getelement by class name
let b=document.getElementsByClassName("head2");
console.log(b);
b[0].style.color="green";


// getelementbytagname
let c=document.getElementsByTagName("h3")
console.log(c)
c[0].style.background="yellow"

let d=document.querySelector("ul")
console.log(d)
d.style.color="orange"





