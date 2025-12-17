let a=document.getElementsByTagName("ul")
console.log(a)

let b=document.createElement("li")
b.setAttribute('id',"l3")
b.innerHTML="Fish fry"
console.log(b)

a[0].appendChild(b)


let add=document.getElementsByTagName("ul")
console.log(add)

let h=document.createElement("li")
h.innerHTML="Raspberry"
h.setAttribute("class","li4")
console.log(h)
a[0].append(h)

a[0].prepend(h)
a[0].insertBefore(h,b)
a[0].replaceChild(h,b)
a[0].removeChild(h)

