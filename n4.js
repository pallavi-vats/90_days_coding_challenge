/*write a function that searches for an element in an array
 returns the index if the element in an array returns the index
  if the element is not prsent then just return -1 */
  function  search(n){
    let arr=[2,6,7,9,10,12];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            console.log(i);
            return ;// for terminating function immedetily
        }
    }
    console.log(-1); 
  }
  search(10)
