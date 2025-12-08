let arr1=["pinky@gmail.com","jyo@gmail.com","sweety@gmail.com","chinnu@gmail.com","supriya@gmail.com"]
for (let i in arr1){
     if (i>2){
        break
    }
        console.log(arr1[i])
}


let arr=["pinky@gmail.com","jyo@gmail.com","sweety@gmail.com","chinnu@gmail.com","supriya@gmail.com"]
for (let i in arr){
    console.log(arr[i])
}


let a=2
for (let i=1;i<=10;i++){
    let c=a*i
    console.log(`${a}*${i}=${c}`)
}

function num(){
    for (let i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log(i,"FizzBuzz")
        }
        else if (i%3==0){
            console.log(i,"Fizz")
        }
        else if(i%5==0){
            console.log(i,"Buzz")
        }
        else{
            console.log(i)
        }
    }
}
num()