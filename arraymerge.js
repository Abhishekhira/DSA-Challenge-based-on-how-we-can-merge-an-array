console.log('this file is connected')


let arr=[23,25,69,87,85,47]
let arr2=[56,44,74,58,63]
let arr3=[]
for(let i=0;i<=arr.length-1;i++){
arr3[i]=arr[i]

}
for (let i = 0; i< arr2.length; i++) {
  arr3[arr.length+i]=arr2[i]
    }
    console.log(arr3)

//another way of doing the same thing is what we can do here is we can use spread operator
let arr4=[...arr,...arr2]
console.log(arr4)