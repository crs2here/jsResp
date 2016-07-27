// reverse string
function reverseString(str) {
    var newStr = str.split('').reverse().join('');
    return newStr;
}

//Return the factorial of the provided integer.
function factorialize(num) {
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    //reverse the string
    var tmpRevStr = str.split('').reverse().join('');
    //compare, and return
    if (tmpRevStr === str) {
        return true;
    } else {
        return false;
    }
}

//Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
    var mulitStr = [];
    var tmpcount = 0;
    var longestWord = 0;
    mulitStr = str.split(" ");
    for (var i = 0; i < mulitStr.length; i++) {
        if (mulitStr[i].length > tmpcount) {
            longestWord = mulitStr[i].length;
            tmpcount = longestWord;
        }
    }
    return longestWord;
}

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    var spltStr = str.toLowerCase().split(" "); // split string into array, and lower all cases
    var len = spltStr.length;
    for (var i = 0; i < len; i++) {
        str = spltStr[i];
        spltStr[i] = str.charAt(0).toUpperCase() + str.slice(1);
    }
    str = spltStr.join(" ");
    return str;
}
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
    var maxArr = [];
    var tmpMax = 0;
    for (var i = 0; i < arr.length; i++) { //loop through main arr
        for (var j = 0; j < arr[i].length; j++) { // jump into sub array
            if (arr[i][j] > tmpMax) {
                tmpMax = arr[i][j];
            } //if
        } //inner for
        maxArr.push(tmpMax);
        tmpMax = 0;
    } //for

    return maxArr;
}


//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
    var arrLen = arr.length;
    if (howMany > 0) {
        if (howMany > arrLen) {
            arr = arr.splice(0, -howMany);
        } else {
            arr = arr.splice(howMany, arrLen);
        }
    }
    return arr;
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    var str = arr[0];
    str = str.toLowerCase();
    var letters = arr[1].toLowerCase().split("");
    var lettersLen = letters.length;
    var match = 0;
    for (var i = 0; i < lettersLen; i++) {
        match = str.indexOf(letters[i]);
        if (match < 0) return false;
    }
    return true;
}

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function bouncer(arr) {
    var screen = function(value) {
        if (typeof(value) == "string" && value !== "") {
            return value;
        } else if (typeof(value) == "number" && value > 0) {
            return value;
        } else if (typeof(value) == "boolean" && value !== false) {
            return value;
        } else {
            return false;
        }
    };
    arr = arr.filter(screen);
    return arr;
}

/*
 You will be provided with an initial array (the first argument in the destroyer
 function), followed by one or more arguments. Remove all elements from the initial
 array that are of the same value as these arguments.
*/
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    return arr.filter(function(element) {
        return args.indexOf(element) === -1;
    });
}


/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) {
    var strLen = str.length; //grab len of str
    var newStrval;
    var newStr = "";
    for (var i = 0; i < strLen; i++) //loop through str one letter at a time
    {
        //grab the char code at each index
        newStrval = str.charCodeAt(i);

        //use ranges to build new string
        if (newStrval >= 65 && newStrval <= 77) { //a-m
            newStr += String.fromCharCode(newStrval + 13);
        } else if (newStrval >= 78 && newStrval <= 90) { //n-z
            newStr += String.fromCharCode(newStrval - 13);
        } else {
            newStr += String.fromCharCode(newStrval);
        }
    }
    return newStr;
}

/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/
function sumAll(arr) {
    var i;
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var len;
    var firstindex = arr[0];
    var total;

    // switch positions
    if (min !== firstindex) {
        arr.shift(); //remove larger element from beg of arr
        arr.push(max); // add it to the end of the array
    } //if


    min = Math.min.apply(null, arr);
    max = Math.max.apply(null, arr);

    len = (max - min) - 1; // determine length of new array

    //add elements to the array
    for (i = 0; i < len; i++) {
        arr.splice((i + 1), 0, (arr[i] + 1));
    }

    // calculate total
    total = arr.reduce(function(a, b) {
        return a + b;
    });

    return total;

} //sumAll

/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
function myReplace(str, before, after) {
    // break string apart
    var subStr, subLen, i;

    //if first letter is uppercase then uppercase 2nd param
    if (before[0] == before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1, after.length);
    } else {
        after[0].toLowerCase();
    }
    str = str.replace(before, after);

    return str;
}

/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
    var strLen, i, startRange, checkVal, retStr;

    retStr = undefined;
    strLen = str.length;
    startRange = str.charCodeAt(0);

    //skipping 0 because it is being utilized as start range
    for (i = 1; i < strLen; i++) {
        if (str.charCodeAt(i) === (startRange + 1)) {
            startRange++;
        } else {
            retStr = String.fromCharCode(startRange + 1);
            i = strLen;
        }
    }

    return retStr;
}

/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {
    var i, newNum, prev, fibSeq, seq, len;
    newNum = 0;
    prev = 1;
    fibSeq = [1];
    i = 0;

    while (i <= num) { // find Fib. and push to arr
        prev += i;
        fibSeq.push(prev);
        i = prev - i;
    } //while

    len = fibSeq.length;

    for (i = 0; i < len; i++) {
        if (fibSeq[i] % 2 > 0 && fibSeq[i] <= num) {
            newNum += fibSeq[i];
        } //if
    } //for

    return newNum;
}

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
*/
function sumPrimes(num) {

    var i, primeArr, div, total, counter, notPrime;
    total = 0;

    for (counter = 2; counter <= num; counter++) {
        notPrime = false;
        for (i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            total = total + counter;
        }
    }
    return total;
}

/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/
function smallestCommons(arr) {
    var i, tmp, max, counter, total, found, newTot;
    found = false;
    if (arr[0] > arr[1]) {
        tmp = arr[0];
        arr[0] = arr[1];
        arr[1] = tmp;
    }

    max = arr[1];
    total = 1;
    for (counter = arr[0]; counter <= max; counter++) {

        var notPrime = false;
        for (i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            total *= counter;
        }
    }
    i = 1;
    while (found === false) {
        newTot = 0;
        newTot = total * i;
        for (counter = arr[0]; counter <= max; counter++) {
            if (Math.round(newTot / counter) === newTot / counter) {
                found = true;
            } else {
                found = false;
                counter = max;
            }

        }

        i++;
    } //while
    return newTot;
}

/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
    var len, i, arr, j, decVal;
    var placement = [128, 64, 32, 16, 8, 4, 2, 1];

    arr = str.split(" ");
    str = "";
    len = arr.length;
    decVal = 0;

    for (i = 0; i < len; i++) {
        for (j = 0; j <= 7; j++) {
            if (arr[i][j] == 1) {
                decVal += placement[j];
            }
        }

        str = str + String.fromCharCode(decVal);
        decVal = 0;
    }

    return str;
}
/*
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
based on any combination of the formats provided above. The area code is required.
If the country code is provided, you must confirm that the country code is 1. Return
true if the string is a valid US phone number; otherwise return false.
*/
function telephoneCheck(str) {
    // Good luck!
    var i, len, numericsInStr, pass, phonePattern, countryPhonePattern, countryPattern2, pCount;
    phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    countryPhonePattern = /^[1]?\ ([( 0-9 )]{5})?[-. ]([0-9]{3})[-. ]([0-9]{4})$|^[1]?\ ([0-9]{3})?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
    countryPattern2 = /^[1]([(]{1})([0-9]{3})([)]{1})([0-9]{3})[-. ]([0-9]{4})$/;
    len = str.length;
    numericsInStr = 0;
    pCount = 0;
    // check number of digits found to confirm proper length
    for (i = 0; i <= len; i++) {
        if (str[i] === "(" ||
            str[i] === ")") {
            pCount = pCount + 1;
        }
        if (!isNaN(str[i])) {
            if (str[i] !== " ") //ignore space count
                numericsInStr += 1;
        }
    }
    if (numericsInStr < 10 || numericsInStr > 11 || pCount === 1) {
        return false;
    }

    /*
     at this point # is proper length, and countnry code of 1
     check pattern?
    */
    if (phonePattern.test(str) && numericsInStr === 10) {
        return true;
    } else if (countryPhonePattern.test(str) ||
        countryPattern2.test(str)) {
        return true;
    } else if (numericsInStr === 10) {
        return false;
    } else {
        return false;
    }
}

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
*/
function checkCashRegister(price, cash, cid) {
    var change, valsInDr, totalInDr, valDesc, baseVal;
    var i, changeArr, rem, runningTTL;

    baseVal = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
    runningTTL = 0.00;
    totalInDr = 0.00;
    valDesc = [];
    changeArr = [];
    //calc. change due
    change = (cash.toFixed(2) - price.toFixed(2));

    /*calc. ttl in drawer
      create arrays of amount values
      create arrays of desc. of values*/

    valsInDr = cid.map(function(val) {
        totalInDr += val[1];
        valDesc.push(val[0]);
        return val[1];
    });

    totalInDr = totalInDr.toFixed(2);

    // handle possible change issues
    if (totalInDr < change) {
        return "Insufficient Funds";
    }
    if (totalInDr === change.toFixed(2)) {
        return "Closed";
    }

    //return change with proper desc.
    for (i = cid.length - 1; i >= 0; i--) {
        if (valsInDr[i] > change) {
            rem = change % baseVal[i];
        } else {
            rem = change % valsInDr[i];
        }
        if (isNaN(rem)) {
            if (change % baseVal[i] === 0) {
                return "Insufficient Funds";
            }
        }

        if (!isNaN(rem) && rem !== change) {
            if (rem !== change) {
                rem = rem.toFixed(2);
                change -= rem;

                if (change > 1.00) {
                    change = Number(Math.round(change.toFixed(2)));
                } else {
                    change = Number(change.toFixed(2));
                }
                if (change > 0.00) {
                    changeArr.push([valDesc[i], change]);
                }
                change = rem;
            } //if rem!==change
            else if (rem < valsInDr[i]) {
                changeArr.push([valDesc[i], baseVal[i]] * Math.round(valsInDr[i] / rem));
                change -= Math.round(valsInDr[i] / rem);

            }
        } //if isnan is false
    } //for

    return changeArr;
}

/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3}
and set B = {2, 3, 4}), the mathematical term "symmetric difference"
of two sets is the set of elements which are in either of the two sets,
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference
you take (say on a set D = {2, 3}), you should get the set with elements which
are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/
function sym(args) {

    // convert to array to get array funcs
    newArgArr = [].slice.call(arguments);

    // return difference between two arrays
    //filter creates new array with elements that are not in the second array
    function diff(r1, r2) {
        return r1.filter(function(indVal) {
            return r2.indexOf(indVal) < 0;
        });
    }


    // grab first array, and modify arguments passed in
    var combo = newArgArr.shift();
    newArgArr.map(function(arr) {
        // compare arrays & combine differences into array
        combo = diff(combo, arr).
        concat(diff(arr, combo));
    });

    //remove duplicate values
    var uniqCombo = combo.reduce(function(arr, elem) {
        if (arr.indexOf(elem) < 0) arr.push(elem);
        return arr;
    }, []);

    return uniqCombo;
}

/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the
new item and quantity into the inventory array. The returned inventory array should be in alphabetical
order by item.
*/
function updateInventory(arr1, arr2) {


    var quant = [];
    sortArr(arr2);

    var items = arr1.map(function(val) {
        return val[1];
    });

    var items2 = arr2.map(function(val) {
        return val[1];
    });

    arr2.forEach(increaseArrayElements);

    // retrieve items that are not in arr1, but are in arr2
    var filt = items2.filter(function(indVal) {
        return items.indexOf(indVal) < 0;
    });

    //this compares arr2 to filtered items, and pushes missing items to array1
    for (var i = 0; i < arr2.length; i++) {
        //arr1[i][0]+=quant[i];
        for (var j = 0; j < filt.length; j++) {
            if (arr2[i][1] === filt[j]) {
                arr1.push(arr2[i]);
            }
        }
    }

    // now need to update counts from arr2 to arr1

    function increaseArrayElements(element, index, array) {
        for (var k = 0; k < arr1.length; k++) {
            if (element[1] === arr1[k][1]) {
                arr1[k][0] += element[0];
            }
        }
    }

    // sort updated array
    function sortArr(arr2BeSrted) {
        return arr2BeSrted.sort(function(a, b) {
            if (a[1] > b[1]) {
                return 1;
            }
            if (a[1] < b[1]) {
                return -1;
            }
            return 0; // a must be equal to b
        });
    }

    return sortArr(arr1);
}

/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.
*/
function makeFriendlyDates(arr) {

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var printYear = false;
    var printMonth = false;

    var startDate = arr.splice(0, 1).toString().split("-");
    var endDate = arr.splice(0, 1).toString().split("-");

    var testDate = new Date();
    var currYear = testDate.getFullYear();

    var beginDateRange = new Date();
    createDate(startDate, beginDateRange);
    var printedMonth = months[beginDateRange.getMonth()];
    var printedDay = dayPostfix(parseInt(startDate[2]));

    var endDateRange = new Date();
    createDate(endDate, endDateRange);
    var endPrintedMonth = months[endDateRange.getMonth()];
    var endPrintedDay = dayPostfix(parseInt(endDate[2]));

    var range = dateDiffInDays(beginDateRange, endDateRange);


    //handle print statments
    if (startDate[1] !== endDate[1] || range > 28) printMonth = true;
    if (startDate[0] !== endDate[0] && range < 365) printMonth = true;
    if (range >= 365) {
        printYear = true;
        printMonth = true;
    } else if (range === 0) return [printedMonth + " " + printedDay + ", " + startDate[0]];
    if (range < 28) {
        printYear = false;
        printMonth = false;
    }


    if (printYear && printMonth)
        return [printedMonth + " " + printedDay + ", " + startDate[0], endPrintedMonth + " " + endPrintedDay + ", " + endDate[0]];
    else if (printMonth && beginDateRange.getFullYear() !== currYear)
        return [printedMonth + " " + printedDay + ", " + startDate[0], endPrintedMonth + " " + endPrintedDay];
    else if (beginDateRange.getFullYear() === currYear && (range > 28 && range < 364))
        return [printedMonth + " " + printedDay, endPrintedMonth + " " + endPrintedDay];
    else if (printMonth === false && printYear === false)
        return [printedMonth + " " + printedDay, endPrintedDay];


}

function createDate(dateArr, d) {
    d.setDate(parseInt(dateArr[2]));
    d.setMonth(parseInt(dateArr[1]) - 1);
    d.setFullYear(parseInt(dateArr[0]));
    return d;
}

function dayPostfix(val) {
    switch (val) {
        case 1:
        case 21:
        case 31:
            return val + 'st';
        case 2:
        case 22:
            return val + 'nd';
        case 3:
        case 23:
            return val + 'rd';
        default:
            return val + 'th';
    }
}

function dateDiffInDays(a, b) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    return Math.floor((b - a) / _MS_PER_DAY);
}

/*
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var orbPer = 0;

    function calcOrb(element, index) {
        orbPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[index].avgAlt + earthRadius, 3) / GM));
        delete arr[index].avgAlt;
        arr[index].orbitalPeriod = orbPer;
    }
    arr.forEach(calcOrb);
    return arr;
}

/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/
function pairwise(arr, arg) {
    var indxs = [];
    if (arr.length === 0) return 0;
    for (var i in arr) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && j > i && indxs.indexOf(+i) === -1 && indxs.indexOf(+j) === -1) {
                indxs.push(+i, +j);
                break;
            }
        }
    }
    var sumOfindxs = indxs.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
    });
    return sumOfindxs;
}

//callback examp from https://medium.freecodecamp.com/javascript-callbacks-explained-using-minions-da272f4d9bcd#.9z1nzogkr
//http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
//generic reportOrders() that shows order to func
function reportOrders(minionOrders){
  if(typeof minionOrders === "string"){
    console.log(minionOrders);
  }
  else if (typeof minionOrders === "object"){
    for(var item in minionOrders){
      console.log(item+": "+minionOrders[item]);
    }
  }
}

//func that takes 2 params, the 2nd=callback function
function speakOrders(orders,callback){
  callback(orders);
}

// When we call the speakOrders function, we pass reportOrders as a parameter.
// So reportOrders will be the function that will called back (or executed) inside the speakOrders 

speakOrders({name:"chris", loves:"maddie"}, reportOrders);

function packBox(item){
  //put item in box
  console.log("put "+ item +  " in the box");
  // The addressPackage() function is a closure! It can be called at any time after the        packBox function has been called. It also has access to the variables and arguments      from the time when packBox() was originally called.
  function addressPackage(address){
    //write label
    console.log("addressed the box to "+address+ " and ready to send the "+item+" gift");
  }
  
  return addressPackage;
}

var maddiesBdayGift=packBox("makeup");

maddiesBdayGift("home address");

//Put makeup in the box 
// Addressed the box to home address and ready to send the makeup gift 


var brotherGift = packBox('jersey');
var motherGift = packBox('iTunesCard');
var fatherGift = packBox('golfclubs');
var sisterGift = packBox('lacrossestick');

brotherGift('123 Main Street, Anywhere USA 01234');
//Put jersey in the box
// Addressed the box to 123 Main Street, Anywhere USA 01234 and ready to send the jersey gift
motherGift('123 High Street, Los Angeles USA 01234');
//Put iTunesCard in the box
// Addressed the box to 123 High Street, Los Angeles USA 01234 and ready to send the iTunesCard gift
fatherGift('123 Upper East Street, New York City NY 01234');
//Put golfclubs in the box
// Addressed the box to 123 Upper East Street, New York City NY 01234 and ready to send the golfclubs gift
sisterGift('123 Top Street, Chicago IL 01234');
//Put lacrossestick in the box
// Addressed the box to 123 Top Street, Chicago IL 01234 and ready to send the lacrossestick gift

//example from https://medium.freecodecamp.com/javascript-closures-explained-by-mailing-a-package-4f23e9885039#.ioz582jlq
