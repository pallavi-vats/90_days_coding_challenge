//write function to find largest number in array
function large(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max);
}
let arr=[2,9,30,14,5,6];
large(arr)