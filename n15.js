//leetcode question number 509
function fib(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    let a=0;
    let b=1;
    let sum=a+b;
    for(let i=2;i<n;i++){
        sum=a+b;
        a=b;
        b=sum;
    }
    console.log(sum);
}
fib(2)