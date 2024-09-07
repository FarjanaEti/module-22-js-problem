let array=[2,5,12,5,23,12,8,2,9,10,9];
let stringarray=['abul','babul','kabul','abul','babul'];

function unique(arrayitem){
  let uni=[];
   for(const item of arrayitem){
//         console.log(item);
if(uni.includes(item)===false){
      uni.push(item);
     }                      
   }
   return uni;
   
}
let uniquearray=unique(stringarray);
console.log(uniquearray);
