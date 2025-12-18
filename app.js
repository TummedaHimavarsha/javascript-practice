let p=document.getElementsByTagName("h1")
console.log(p)
p[0].style.color="green"

let a=document.getElementsByClassName("classname")
console.log(a)
a[0].style.color="orange"

let b=document.getElementById("idname")
console.log(b)
b.style.textDecoration="underline"
b.style.color="blue"

let c=document.querySelector("ul")
console.log(c)
c.style.color="yellow"

let c=document.querySelectorAll("ul")
console.log(c)

c[1].style.color="yellow"