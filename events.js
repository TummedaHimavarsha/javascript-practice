function trigger(){
alert("clicked")
}
trigger()

function trigger1(event){
console.log(event)
console.log("hello")
}

function types(event){
    console.log(event)
    console.log("keydown")
}

function types(event){
    console.log(event)
    console.log("keyup")
}

function types(event){
    console.log(event)
    console.log("keypress")
}

function types(event){
    console.log(event)
    console.log("onchange event is performed")
}


window.addEventListener('resize',()=>{
    alert("warning dont resize the page")
})

window.addEventListener('scroll',()=>{
    alert("dont scroll!")
})


window.addEventListener('load',()=>{
    alert("dont refresh")
})



