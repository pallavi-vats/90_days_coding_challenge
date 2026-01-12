/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let i=0;
    let n=tickets.length;
    let time=0;
    while (tickets[k]>0){
        if (tickets[i]>0){
            time+=1;
            tickets[i]-=1;



        }
        i=(i+1)%n;
    }
    return time;
};