// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
let count=0;
function double(num){
for(let item of num){
    console.log(item);
if(item===25){
//  console.log('true');  
count++;                     
}                      
}
return count;
}
let numbers = [5,6,11,12,98, 5]
const Dnumber=double(numbers);
console.log(Dnumber)
