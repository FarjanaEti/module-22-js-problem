// Write a function to count the number of vowels in a string.
let count=0;
const vowels = "aeiouAEIOU";
function numberOfvowel(vowel)
{
 for(const item of vowel){
 //console.log(item);  
//     if(item==='a')
if(vowels.includes(item))
{
  count++;                       
    }                        
 }
 return count;
}
let sentence=' I am learning Programming to become a programmer';
let result = numberOfvowel(sentence);
console.log(result)