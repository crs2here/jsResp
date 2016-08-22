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
console.log(myLikes([]));
console.log(myLikes(["Chris"]));
console.log(myLikes(["Chris", "Maddie"]));
console.log(myLikes(["Chris", "Maddie", "Nolan"]));
console.log(myLikes(["Chris", "Maddie", "Nolan", "Oliver", "Emma"]));

/* 
 other versions of like
 this one is pretty similar to what  I did
*/

function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0:
            return 'no one likes this';
            break;
        case 1:
            return names[0] + ' likes this';
            break;
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
            break;
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
            break;
        default:
            return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}