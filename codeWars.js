/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members
which category they will be placed.

To be a senior, a member must be at least 55 years old and hgitave a handicap greater 
than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
    Input will consist of a list of lists containing two items each. 
    Each list contains information for a single potential member. 
    Information consists of an integer for the person's age and an 
    integer for the person's handicap.

Example Input

    [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output
    Output will consist of a list of string values (in Haskell: Open or Senior)
    stating whether the respective member is to be placed in the senior or open category.

Example Output

    ["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

//wrapping this in function to keep var, and func names local.
var usingMap = {
    tc1: [
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20]
    ],
    tc2: [
        [3, 12],
        [55, 1],
        [91, -2],
        [54, 23]
    ],
    tc3: [
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12]
    ],
    openOrSenior: function(data) {
        return data.map(function(element) {
            return (element[0] >= 55 && element[1] > 7) ? 'Senior' : 'Open';
        });
    }, // other soultions to problem
    openOrSenior1: function(data) {
            function determineMembership(member) {
                return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
            }
            return data.map(determineMembership);
        }
        /*,
            openOrSenior2: function(data) {
                return data.map([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
                // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                // Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
            }*/
};
//access object details to run
//console.log(usingMap.openOrSenior(usingMap.tc1));

/*
    INS
        Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

    Example
        doubleChar("String") ==> "SSttrriinngg"
    
        doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
    
        doubleChar("1234!_ ") ==> "11223344!!__  "
*/

var DoubleChar = {
    tc1: "abcd",
    tc2: "illuminati",
    tc3: "123456",
    doubleChar: function(str) {
        return str.split(""). //split string into chars
        map(function(el) { //map to new array and duplicating char
            return (el + el);
        }).join(""); //return array as join str;


    },
    cleverDoubleChar: function doubleChar(str) {
        return str.replace(/(.)/g, "$1$1");
    },
    //arrowDoubleChar let doubleChar=s=>s.replace(/(.)/g,"$1$1"); 
};


//console.log(DoubleChar.doubleChar(DoubleChar.tc1));
//console.log(DoubleChar.doubleChar(DoubleChar.tc2));
//console.log(DoubleChar.doubleChar(DoubleChar.tc3));

// spin words codewars challenge

function spinWords(str) {
    return str.split(" ").map(function(el) {
        return (el.length >= 5 ? el.split('').reverse().join('') : el);
    }).join(" ");
}
//console.log(spinWords("Hey fellow warriors"));
//"Hey wollef sroirraw"

/*
function that can take any non-negative integer as a argument and
return it with it's digits in descending order. Descending order means 
that you take the highest digit and place the next highest digit 
immediately after it.
*/
// this is the clunky way I did it
function descendingOrder(n) {
    var numArray = n.toString().split("").sort(reverseComp).toString().replace(/,/g, "");
    return Number(numArray);

    function reverseComp(a, b) {
        return b - a;
    }
}
// this is better
function aBetterDecendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''));
}

/*
create three functions that one needs to be able to call upon an array:
  1. all-This function returns true only if the predicate supplied returns true for all the items in the array
  ex.
    [1, 2, 3].all(isGreaterThanZero) => true
    [-1, 0, 2].all(isGreaterThanZero) => false
  2.none-This function returns true only if the predicate supplied returns false for all the items in the array  
  ex.
    [-1, 2, 3].none(isLessThanZero) => false
    [-1, -2, -3].none(isGreaterThanZero) => true
  3.any-This function returns true if at least one of the items in the array returns true for the predicate supplied    
  ex.
    [-1, 2, 3].any(isGreaterThanZero) => true
    [-1, -2, -3].any(isGreaterThanZero) => false  
*/

function isGreaterThanZero(num) {
    return num > 0;
}

function isLessThanZero(num) {
    return num < 0;
}


Array.prototype.all = function(p) {
    return this.filter(p).length == this.length;
};
console.log("all");
console.log([1, 2, 3].all(isGreaterThanZero)); //=> true
console.log([-1, 0, 2].all(isGreaterThanZero)); //=> false

Array.prototype.none = function(p) {
    return this.filter(p).length == 0;
};

console.log("none");
console.log([-1, 2, 3].none(isLessThanZero)); // => false
console.log([-1, -2, -3].none(isGreaterThanZero)); // => true


Array.prototype.any = function(p) {
    return this.filter(p).length > 0;
};
console.log("any");
console.log([-1, 2, 3].any(isGreaterThanZero)); //true
console.log([-1, -2, -3].any(isGreaterThanZero)); //false

/*
Write calculations using functions & get the results. 

some examples:

  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3

Requirements:
•There must be a function for each number from 0 ("zero") to 9 ("nine")
•There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
•Each calculation consist of exactly one operation and two numbers
•The most outer function represents the left operand, the most inner function represents the right operand
ES6 way of solving this
let zero =(exp)=>calc(0,exp);
let one =(exp)=>calc(1,exp);
let two =(exp)=>calc(2,exp);
let three =(exp)=>calc(3,exp);
let four =(exp)=>calc(4,exp);
let five =(exp)=>calc(5,exp);
let six =(exp)=>calc(6,exp);
let seven =(exp)=>calc(7,exp);
let eight =(exp)=>calc(8,exp);
let nine =(exp)=>calc(9,exp);

let calc =(num,exp)=>exp===undefined?num:exp(num);

function times(arg1) { 
  return function(arg2)  { 
    return arg2 * arg1;  }; 
}

function dividedBy(arg1) { 
  return function(arg2)  { 
    return arg2 / arg1;  }; 
}

function minus(arg1) { 
  return function(arg2)  { 
    return arg2 - arg1;  }; 
}

function plus(arg1) { 
  return function(arg2)  { 
    return arg2 + arg1;  }; 
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
*/
/*
Replace With Alphabet Position
given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. 
a being 1, b being 2, etc. As an example:
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
*/
// better alternative ways to solve with closures
var n = function(digit) {
    return function(op) {
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
    return function(l) {
        return l + r;
    };
}

function minus(r) {
    return function(l) {
        return l - r;
    };
}

function times(r) {
    return function(l) {
        return l * r;
    };
}

function dividedBy(r) {
    return function(l) {
        return l / r;
    };
}


// another way to solve function probelm
function zero(func) {
    return func ? func(0) : 0; };

function one(func) {
    return func ? func(1) : 1; };

function two(func) {
    return func ? func(2) : 2; };

function three(func) {
    return func ? func(3) : 3; };

function four(func) {
    return func ? func(4) : 4; };

function five(func) {
    return func ? func(5) : 5; };

function six(func) {
    return func ? func(6) : 6; };

function seven(func) {
    return func ? func(7) : 7; };

function eight(func) {
    return func ? func(8) : 8; };

function nine(func) {
    return func ? func(9) : 9; };

function plus(b) {
    return function(a) {
        return a + b; }; };

function minus(b) {
    return function(a) {
        return a - b; }; };

function times(b) {
    return function(a) {
        return a * b; }; };

function dividedBy(b) {
    return function(a) {
        return a / b; }; };




//es 6 version 
/*
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
*/
function alphabetPosition(text) {
    //split alpha into array
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    //transform arg for matching by uppercase, and removing non alpha chars
    return text.toUpperCase().replace(/[^A-Z]/g, "").split("").map(function(cv) { //left off here
        return alpha.indexOf(cv) > -1 ? (alpha.indexOf(cv) + 1) : "";
    }).join(" ");

}

console.log(alphabetPosition("The sunset sets at twelve o' clock"));

/*
Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/
var capitals = function(word) {
    return word.split("").map(function(cv, index) {
        return word[index].toUpperCase() === word[index] ? index : null;
    }).filter(function(cv, index) {
        return word[index].toUpperCase() === word[index];
    });
};
console.log(capitals('CodEWaRs')); // [0,3,4,6]

// this is a better way to write it (use reduce)
var betterCapitals = function(word) {
    return word.split("").reduce(function(memo, v, i) {
        return v === v.toUpperCase() ? memo.concat(i) : memo;
    }, []);
};