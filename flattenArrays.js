var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];
//Solution 1: Using concat() and apply()
var myNewArray = [].concat.apply([], myArray);

//Solution 2: Using reduce()
var myNewArray = myArray.reduce(function(prev, curr) {
  return prev.concat(curr);
});

//Solution 3:
var myNewArray3 = [];
for (var i = 0; i < myArray.length; ++i) {
  for (var j = 0; j < myArray[i].length; ++j)
    myNewArray3.push(myArray[i][j]);
}
console.log(myNewArray3);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Solution 4: Using spread operator in ES6
var myNewArray4 = [].concat(...myArray);
console.log(myNewArray4);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]