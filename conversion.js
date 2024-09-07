function inchtofeet(inch){
const feetfruction=inch/12;
const feetint=parseInt(feetfruction);
const inchremaining=inch%12;
const result=feetint +" ft "+inchremaining +" ich ";
// return result;
if(inch===null){
    console.log('y') 
    return true;                         
}
}
let height=inchtofeet(75);
 console.log(height);