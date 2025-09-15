/* new pattern 
1
01
010
1010
10101
010101
*/




let n=6;
let Switch=1;//  defined outside so it continues from last row 
for(let i=0;i<n;i++){
    let row=""; 
    for(let j=0;j<i+1;j++){
        row=row+Switch;
        if(Switch==1){
            Switch=0;
        }
        else{
            Switch=1;
        
        }
       


    }
    console.log(row);
    
}