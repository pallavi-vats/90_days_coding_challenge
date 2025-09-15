//write a function the numbers of negative numbers in an array
function neg(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++

        }
    }
    console.log(count);
}
arr=[1,-2,-3,-9,4,6,8];
neg(arr)