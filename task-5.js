// Generate a random number between 10 to 20.
function randomvalue(lower,upper){
const randoms=Math.floor(Math.random()*(upper-lower)+lower);
return randoms;
}
let random=randomvalue(10,20);
console.log(random);