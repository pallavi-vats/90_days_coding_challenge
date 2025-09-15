function fun(arr){
    if(arr.length<2){
        return null;
    }
    let firstmax=arr[0];
    let secondmax=arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>firstmax){
            secondmax=firstmax;
            firstmax=arr[i];
        }
        else if (arr[i] > secondmax){
            secondmax= arr[i]
        }
    }
    console.log(secondmax);
}
let arr=[1,4,7,9,2,8];
fun(arr)