function countDigit(n){
    let count=0;
    
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }
    console.log(count);
    }
    let n=263568976542309876;
    countDigit(n)