// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longestword(sentence){
let split=sentence.split(' ');
  let longest='';
  for(const word of split){
    if(word.length>longest.length)    {
         longest=word;                     
    }                      
  }
  return longest;
}
let sentences=' I am learning Programming to become a programmer';
let result = longestword(sentences);
console.log(result)

