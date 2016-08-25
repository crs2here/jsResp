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

console.log(getCount("abracadabra")); //5
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
 */

var uniqueInOrder = function(iterable) {
    //your code here - remember iterable can be a string or an array
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')); //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //[1,2,3]