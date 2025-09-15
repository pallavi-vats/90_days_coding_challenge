/* this pattern i need to match
1
10
101
1010
10101
101010
*/

let n=6;
for(let i=0;i<n;i++){
    let row=""; let Switch=1;
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