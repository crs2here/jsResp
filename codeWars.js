/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members
which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater 
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
console.log(usingMap.openOrSenior(usingMap.tc1));

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
     return str.split("").      //split string into chars
      map(function(el){           //map to new array and duplicating char
        return (el+el);
      }).join("");        //return array as join str;
     
 
    }
};


console.log(DoubleChar.doubleChar(DoubleChar.tc1));
console.log(DoubleChar.doubleChar(DoubleChar.tc2));
console.log(DoubleChar.doubleChar(DoubleChar.tc3));

// spin words codewars challenge
function spinWords(str){
  
 function revStr(val) { 
   return val.split('').reverse().join('');
 } 

  
  return str.split(" ").map(function (el){
      return (el.length>=5? el.split('').reverse().join(''): el); 
  }).join(" ");
}
console.log(spinWords("Hey fellow warriors"));
//"Hey wollef sroirraw"
