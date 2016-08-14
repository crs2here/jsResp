var symbolsArr = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

//for each example-> does something to every element of an array
function getStocksymbols(stocks) {
    var symbolsArr = [];

    stocks.forEach(function(stock) {
        symbolsArr.push(stock.symbol);
    });

    return symbolsArr;

}

console.log(JSON.stringify(getStocksymbols(symbolsArr)));

//map example -> great for transforming all elements of an array and passing to new array
function getStockwithMap(stocks) {
    return stocks.map(function(stock) {
        return stock.symbol;
    });
}
console.log(JSON.stringify(getStockwithMap(symbolsArr)));

//filter example great for applying test to elements of array, and creating array of elements that passed test.
function getStocksOver(stocks, minPrice) {
    return stocks.filter(function(stock) {
        return stock.price >= minPrice;
    });
}

console.log(JSON.stringify(getStocksOver(symbolsArr, 150)));

/*
 concat all method flatten array down from one dim to another
*/

var exchanges = [
    [
        { symbol: "XFX", price: 240.22, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 },
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 }
    ]
];

Array.prototype.concatAll = function() {
    var results = [];

    this.forEach(function(subArray) {
        subArray.forEach(function(item) {
            results.push(item);
        });
    });
    return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
    console.log(JSON.stringify(stock));
});