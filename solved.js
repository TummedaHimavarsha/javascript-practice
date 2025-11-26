let num=prompt("enter a number: ")
if (num>0){
    console.log("The given number is postive")
}
else{
    console.log("the number is negative")
}

let a=prompt("enter a number: ")
if (a>0){
    console.log("the number is positive")
}
else if (a==0){
    console.log("the number is equal to zero")
}
else{
    console.log("the number is negative")
}


let age=prompt("enter your age: ")
if (age>=18){
    console.log("your eligible to vote")
}
else{
    console.log("NOT")
}


let a=prompt("enter a number: ")
var b=prompt("enter a number: ")
if (a>b){
    console.log(a,"is greater")
}
else{
    console.log(b,"is greater")
}


var num=prompt("enter a number: ")
if (num%5==0){
    console.log(num,"divisible by 5")
}
else{
    console.log(num,"is not divisible by 5")
}


var leap=prompt("enter the year: ")
if (leap%400==0 || leap%4==0 && leap%100!=0){
    console.log(leap,"is a leap year")
}
else{
console.log(leap,"is not a leap year")
}


let a=prompt("enter a letter: ")
if (a =="a"|| a=="e" || a=="i" || a=="o" || a=="u"){
    console.log("yes the given is a vowel")
}
else{
    console.log("the given letter is a constant")
}


let marks=prompt("enter the marks secured: ")
if (marks>=90 && marks<=100){
    console.log("A GRADE")
}
else if(marks>=75 && marks<=89){
    console.log("B GRADE")
}
else if(marks>=50 && marks<=74){
    console.log("C GRADE")
}
else{
    console.log("FAIL")
}

let a=Number(prompt("enter a number: "))
let b=Number(prompt("enter a number: "))
let c=Number(prompt("enter a number: "))
if (a>b && a>c){
    console.log(a,"is the largest ")
}
else if(b>a && b>c){
     console.log(b,"is the largest ")
}
else{
 console.log(c,"is the largest ")
}


let color=prompt("enter the color name: ")
if (color=="red"){
    console.log("STOP")
}
else if(color=="yellow"){
    console.log("READY")
}
else if(color=="green"){
    console.log("GO")
}
else{
    console.log("please enter a proper color")
}


let week=Number(prompt("enter the day of the week: "))
switch(week){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("sorry")
}


let operator=prompt("enter the operator: ")
let a=1
let b=1
if (operator=="+"){
    console.log(a+b)
}
else if (operator=="-"){
    console.log(a-b)
}
else if (operator=="*"){
    console.log(a*b)
}
else if (operator=="**"){
    console.log(a**b)
}
else if (operator=="/"){
    console.log(a/b)
}
else if (operator=="%"){
    console.log(a%b)
}
else{
    console.log("please enter a valid operator")
}




let operator=prompt("enter the operator: ")
let a=1
let b=1
switch (operator){
    case "+":
        console.log(a+b)
        break;
    case "-":
        console.log(a+-b)
        break;
    case "*":
        console.log(a*b)
        break;
    case "**":
        console.log(a**b)
        break;
    case "/":
        console.log(a/b)
        break;
    case "%":
        console.log(a%b)
        break;
    default:
        console.log("none")

}


let marks=prompt("enter the marks secured: ")
result=((marks>36)?"pass":"fail");
console.log(result)


let num=prompt("enter a number: ")
if (num>=1 && num<=100 ){
    console.log(num,"is between 1 to 100")
}
else{
    console.log(num,"is not between 1 to 100")
}

let username=prompt("enter a user name: ")
let password=Number(prompt("enter a password name: "))
if (username=="admin" && password==1234){
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}


let units=prompt("enter the units: ")
if (units<=100){
    console.log("3/unit")
}
else if(units>=101 && units<=200){
    console.log("5/unit")
}
else{
    console.log("7/unit")
}

let side1=prompt("enter the side length: ")
let side2=prompt("enter the side length: ")
let side3=prompt("enter the side length: ")
if (side1==side2==side3){
    console.log("equilateral")
}
else if(side1!=side2!=side3){
    console.log("scalene")
}
else if(side1==side2 || side2==side3 ||side3==side1){
    console.log("isosceles")
}
else{
    console.log("sorry")
}

let pin=Number(prompt("enter the pin: "))
if (pin==1234){
    console.log("Access Granted")
}
else{
    console.log("incorrect pin")
}

let a=Number(prompt("enter a number: "))
let random=10
if (a==random){
    console.log("Correct!")
}
else{
    console.log("Try Again")
}

let percentage=Number(prompt("enter the percentage: "))
let income=Number(prompt("enter the income: "))
if (percentage>=85 && income<200000){
    console.log("eligible")
}
else{
    console.log("Not eligible")
}