
//palindrome question of leetcode 9 no 
function Palindrome(x){
 if(x<0){
        return false;
    }
   let rev=0;
   let final = x;
   while(x>0){
    let rem=x%10;
    rev=(10*rev)+rem;
    x=Math.floor(x/10);
   }
  
    return rev==final;
}
let x=123;
console.log(Palindrome(x));

