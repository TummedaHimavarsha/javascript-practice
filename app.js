let p=document.getElementsByClassName("types")
console.log(p)

let a=document.createElement("li")
a.setAttribute("id","id4")
a.innerHTML="carsfour";
console.log(a)


let b=document.createElement("li")
b.setAttribute("id","id5")
b.innerHTML="carsfive";
console.log(b)
p[0].appendChild(a)
p[0].append(a,b)
p[0].prepend(b)
p[0].replaceChild(a,b)
// p[0].removeChild(b)

let a=document.querySelector("ul")
let b=a.getAttribute("class")
console.log(b)