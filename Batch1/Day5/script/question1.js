let arr=[1,2,3,4,5,6,7,8,9];

console.log(arr);
console.log("to print odd numbers");
let odd=arr.filter(el=>el%2!==0);
console.log(odd);
  
 console.log("to print cube of numbers")
 
 let oddcubes=arr.filter(el=>el%2!==0).map(el=>el**3);
 
 console.log(oddcubes);
