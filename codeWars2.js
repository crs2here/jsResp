/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -&gt; String, which must take in input array,
containing the names of people who like an item. It must return the display text as
shown in the examples:
 likes [] // must be "no one likes this"
 likes ["Peter"] // must be "Peter likes this"
 likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

For more than 4 names, the number in and 2 others simply increases.
 
*/

function myLikes(names) {
    var len = names.length;
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names.toString("") + " likes this";
        case 2:
            return names.join(" and ") + " like this";

        default:
            names.splice(2);
            return names.join(", ") + " and " + (len - 2) + " others like this";
    }
}
/*
console.log(myLikes([]));
console.log(myLikes(["Chris"]));
console.log(myLikes(["Chris", "Maddie"]));
console.log(myLikes(["Chris", "Maddie", "Nolan"]));
console.log(myLikes(["Chris", "Maddie", "Nolan", "Oliver", "Emma"]));
*/
/* 
 other versions of like
 this one is pretty similar to what  I did
*/

function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0:
            return "no one likes this";
            break;
        case 1:
            return names[0] + " likes this";
            break;
        case 2:
            return names[0] + " and " + names[1] + " like this";
            break;
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
            break;
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}

/*
    Vowel Count

    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    var arr = str.split("");

    for (var index = 0; index < arr.length; index++) {
        for (var innerInd = 0; innerInd < vowels.length; innerInd++) {
            if (arr[index] === vowels[innerInd]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}

//console.log(getCount("abracadabra")); //5
//                    1  2 3 4  5

function aBetterGetCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}


function getCountReplace(str) {
    return str.replace(/[^aeiou]/ig, "").length;
}

/*
   Unique In Order
   
    Description:

    Implement the function unique_in_order which takes as argument
    a sequence and returns a list of items without any elements with
    the same value next to each other and preserving the original order of elements.

    For example:

        uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
        uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
        uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder = function(iterable) {
    //your code here - remember iterable can be a string or an array
    if (typeof iterable === "string") {
        var newArr = [];
        iterable.split("").forEach(function(val, ind) {
            if (val !== iterable[ind + 1]) {
                newArr.push(val);
            }
        });
    } else {
        return iterable;
    }
    return newArr;
};
        
 */

var uniqueInOrder = function(iterable) {

    var newArr = [];

    if (typeof iterable === "string") {
        iterable = iterable.split("");
    }
    iterable.forEach(function(val, ind) {
        if (val !== iterable[ind + 1]) {
            newArr.push(val);
        }
    });
    return newArr;
};



/*

a more compact version of unique_in_order

var uniqueInOrder = function (iterable){
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

var uniqueInOrder=function(iterable){
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
  }
  return res;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //[1,2,3]
*/

/*
 #1 - Factorial

    In mathematics, the factorial of a non-negative integer n, denoted by n!,
    is the product of all positive integers less than or equal to n. For example,

    5! = 5 * 4 * 3 * 2 * 1 = 120.

    The value of 0! is 1.

    Your task   
        You have to create the function factorial that receives n and returns n!. You have to use recursion.
 */

const factorial = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

//const factorial = n => n > 1 ? n*factorial(n-1) : 1;

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));