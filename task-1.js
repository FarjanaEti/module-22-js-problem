// Write a function to convert temperature from Celsius to Fahrenheit.
// (°C × 9/5) + 32 = °F

function celtofahren(cel){
  let fah=(cel*1.8)+32;
  return fah;
}
const fahren=celtofahren(6);
console.log(fahren)