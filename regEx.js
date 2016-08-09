console.log(/abc/.test("test"));//false 
console.log(/abc/.test("abcde"));//true 

console.log(/[0123456789]/.test("in 1992")); //true
console.log(/[0-9]/.test("in 1992")); //true 

/*
\d Any digit character 
\w An alphanumeric character (“word character”) 
\s Any whitespace character (space, tab, newline, and similar) 
\D A character that is not a digit 
\W A nonalphanumeric character 
\S A nonwhitespace character 
. Any character except for newline 
*/

//match a date and time format like 30-01-2003 15:20 with the following expression:
var dateTime=/\d\d-\d\d-\d\d\d\d \d\d:\d\d/;//will see cleaner version later
console.log(dateTime.test("30-01-2003 15:20"));// → true
console.log(dateTime.test("30-jan-2003 15:20"));// → false

//to Invert set of chars (match any char except the ones in set) use ^
var notBinary=/[^01]/;
console.log(notBinary.test("1100100010100110"));// → false
console.log(notBinary.test("1100100010200110"));// → true


//Repeating parts of a pattern

//+ indicates element may be repeated more than once /\d+/-> matches on or more digits
//The star (*) has a similar meaning but also allows the pattern to match zero times
console.log(/'\d+'/.test("'123'")); // true
console.log(/'\d+' /.test("''"));   //false
console.log(/'\d*'/.test("'123'")); //true 
console.log(/'\d*'/.test("''"));    //true

//?-> makes part of the pattern optional meaning it may occur 0 or 1 time 
var neighbor = /neighbou?r/;  //-> u is optional

console.log(neighbor.test("neighbour"));//true
console.log(neighbor.test("neighbor"));//true

/*
indicate pattern should occur prcise # of times use curly {num} after element
can also indicate range {2,4} -> element must occur at least twice, and at most four times
You can also specify open-ended ranges when using curly braces by omitting the number after the comma. So {5,} means five or more times.
Here is another version of the date and time pattern that allows both single- and double-digit days, months, and hours. It is also slightly more readable.
*/
var dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("30-1-2003 8:45"));  //true

// exec (execute) method that will return null if no match was found and return an object with information about the match otherwise.

var match = /\d+/.exec("one two 100");
console.log(match);//["100"]
console.log(match.index);//8


//b marker insures where pattern matches. Like a word boundary 
/*
A word boundary can be the start or end of the string or any point in the string that has a word character (as in \w) on one side and a nonword character on the other.
*/
console.log(/cat/.test("concatenate"));// → true
console.log(/\bcat\b/.test("concatenate"));// → false

//Choice Patterns-piece of text contains not only a number but a number followed by one a specific word
var animalCount=/ \b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));// → true
console.log(animalCount.test("15 pigchickens"));// → false

//Replace Method
console.log("papa".replace("p","m")); //mapa

// g is for global and when in use with replace all matches will be replaced, and not just the first
console.log("Borobudur".replace(/[ou]/,"a"));  //Barobudur
console.log("Borobudur".replace(/[ou]/g,"a")); //Barabadar


// replace options 
console.log(
  "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis"
    .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
// → Grace Hopper
//   John McCarthy
//   Dennis Ritchie


var s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
  return str.toUpperCase();
}));
// → the CIA and FBI


var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

//Dynamically creating RegExp objects
var name = "harry";
var text = "Harry is a suspicious character.";
var regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.


//SEARCH Method
console.log("  word".search(/\S/));
// → 2
console.log("    ".search(/\S/));
// → -1


//Looping over matches, and finding multiple digits in a string 
var input = "A string with 3 numbers in it... 42 and 88.";
var number = /\b(\d+)\b/g;
var match;
while (match = number.exec(input))
  console.log("Found", match[1], "at", match.index);
// → Found 3 at 14
//   Found 42 at 33
//   Found 88 at 40


//cheat sheet 
/*

/abc/ A sequence of characters 
/[abc]/ Any character from a set of characters 
/[^abc]/ Any character not in a set of characters 
/[0-9]/ Any character in a range of characters 
/x+/ One or more occurrences of the pattern x 
/x+?/ One or more occurrences, nongreedy 
/x[*]/ Zero or more occurrences 
/x?/ Zero or one occurrence 
/x{2,4}/ Between two and four occurrences 
/(abc)/ A group 
/a|b|c/ Any one of several patterns 
/\d/ Any digit character 
/\w/ An alphanumeric character (“word character”) 
/\s/ Any whitespace character 
/./ Any character except newlines 
/\b/ A word boundary 
/^/ Start of input 
/$/ End of input 
*/


