prices = [7, 6, 4, 5, 1];

function maxProfit(prices) {
 let lowest = prices[0];
 let profit = 0;
 for (let i = 0; i < prices.length; i++) {
   if (prices[i] < lowest) {
     lowest = prices[i];
   } else {
     let currentProfit = prices[i] - lowest;
     if (currentProfit > profit) {
       profit = currentProfit;
     }
   }
 }
 return profit;
}

console.log(maxProfit(prices));
