function maxProfit(prices) {
    let minPrice = prices[0];   // minimum price seen so far
    let maxProfit = 0;          // maximum profit

    for (let i = 1; i < prices.length; i++) {
        // check profit if sold today
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);

        // update minPrice if today's price is lower
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;   //  must return the result
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
