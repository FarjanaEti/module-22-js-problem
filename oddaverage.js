// average of odd number from a array
let sum=0,avg=0;
let count=0;
function oddavg(number){
 console.log(number);
console.log( number.includes(12));  
 for(const num of number){
     if(num%2===1){   
        count++;
        sum=sum+num;
        avg=sum/count;
        return avg;
    }                                               
  }                      
}                     
  let numbers=[12,13,5,14,45];
 let average=oddavg(numbers);
 console.log('Average is=', average);