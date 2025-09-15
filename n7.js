//write function that return smallest number in array
function small(arr){
    let min=Infinity;
    for (let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
            
    }
    console.log(min);
}
let arr=[8,7,9,10,3,1,-1];
small(arr)