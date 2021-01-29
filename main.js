// 16 - Destructuring Mixed Content:

// Example 1
/* const user = {
    username: "Kinan",
    city: "Berlin",
    skills: {
        html: "80%",
        css: "85%",
        js: ["vuejs", "reactjs", "angularjs"]
    }
};

const {username, city, skills: {html, css, js: [one, two, three]}} = user;

console.log(`My Name Is: ${username} And I Live In: ${city}.`);
console.log(`My Html Skills Progress Is: ${html} And Css Is: ${css}`);
console.log(`I Have Knowledge In Js Framework Like ${one} ${two} ${three}`); */

// Example 2
/* const user = {
    username: "Kinan",
    city: "Berlin",
    skills: {
        html: "80%",
        css: "85%",
        js: {
            frameone: "vuejs",
            frametwo: "reactjs",
            framethree: "angularjs"
        }
    }
};

const {username, city, skills: {html, css, js: {frameone: one, frametwo: two, framethree: three}}} = user;
console.log(`My Name Is: ${username} And I Live In: ${city}.`);
console.log(`My Html Skills Progress Is: ${html} And Css Is: ${css}`);
console.log(`I Have Knowledge In Js Framework Like ${one} ${two} ${three}`); */

// ________________________________________

// 17 - Destructuring Function Parameters:

/* const user = {
    username: "Kinan",
    city: "Berlin",
    skills: {
        html: "80%",
        css: "85%",
        js: ["vuejs", "reactjs", "angularjs"]
    }
}; */

// const {username, city, skills: {html, css, js: [one, two, three]}} = user;

// Without Destructuring
/* function showMyInfo(user){
    console.log(`My Name Is: ${user.username} And I Live In: ${user.city}.`);
console.log(`My Html Skills Progress Is: ${user.skills.html} And Css Is: ${user.skills.css}`);
console.log(`I Have Knowledge In Js Framework Like ${user.skills.js[0]} ${user.skills.js[1]} ${user.skills.js[2]}`);
}
showMyInfo(user); // ReferenceError: username is not defined
// at showMyInfo */

// With Destructuring
/* function showMyInfo({username, city, skills: {html, css, js: [one, two, three]}}){
    console.log(`My Name Is: ${username} And I Live In: ${city}.`);
console.log(`My Html Skills Progress Is: ${html} And Css Is: ${css}`);
console.log(`I Have Knowledge In Js Framework Like ${one} ${two} ${three}`);
}
showMyInfo(user); */

// ________________________________________

// 18 - Enhanced Object Literals:
/*  1- Property Value Shorthand
    2- Methods Shorthand
    3- Computed Object Property Name */

// 1- Property Value Shorthand:
// Before
/* const username = "Kinan",
      website = "Musician.com";

const user = {
    username: username,
    website: website
}
console.log(user); */

// After
/* const username = "Kinan",
      website = "Musician.com";

const user = {
    username,
    website
}
console.log(user); */

// 2- Methods Shorthand:
// Before
/* const user = {
    myMethod: function(param){
        return param;
    }
}
console.log(user.myMethod(`Hello From Parameter`)); */

// After
/* const user = {
    myMethod(param){
        return param; 
    }
}
console.log(user.myMethod(`Hello From Parameter`)); */

// Before
// 3- Computed Object Property Name:

/* // Normal Variable
const myVariable = "Key";
// Create New Object
const myObject = {
    myProperty: "MyValue"
};
//  Add Dynamic Property And Assign A Value
// myObject["Kinan"] = "Value";
myObject[myVariable] = "Value";
console.log(myObject); */

// After
// Normal Variable
/* const myVariable = "Key";
// Create New Object
const myObject = {
    myProperty: "MyValue",
    [myVariable]: "Value"
};
console.log(myObject); */

// ____________________________________

// 19 - Set vs Array:
/* Set: new Set(Iterable)

 */
/* let myBooks = new Set();
// console.log(typeof myBooks); // Object
*/

/* let x = "Kinan";
for(let i = 0; i < x.length; i++){
    console.log(x[i]);
} */

// You Cannot Loop A Number
/* let y = 10;
for(let i = 0; i < y.length; i++){
    console.log(y[i]);
}

let myBooks = new Set(1);
console.log(myBooks); // TypeError: number 1 is not iterable */

/* let myBooks = new Set([1,2,3,3]);
let myArray = [1,2,3,3];

console.log(myBooks); // Set(3) {1, 2, 3} (The Number 3 Is Not Repeated Twice, Because It Is An Object). Lets Use Store Unique Value
console.log(myArray); // (4) [1, 2, 3, 3] */

/* let myBooks = new Set([1,2,3,3]);
let myArray = [1,2,3,3];

console.log(myBooks[1]); // undefined (It Has No Accessible Index)
console.log(myArray[1]); */

/* // Convert From An Array To Set
// The Benefit Is That Duplicate Items Are Deleted
let myArray = [1,2,3,3,4,4,2,5,5,5];
let myBooks = new Set(myArray);
console.log(myBooks); // Set(5) {1, 2, 3, 4, 5} */

/* // Convert From Set To An Array With Spread Operator:
let myArray = [1,2,3,3,4,4,2,5,5];
let myBooks = new Set(myArray);
console.log(myBooks); // Set(5) {1, 2, 3, 4, 5}
console.log([...myBooks]); // (5) [1, 2, 3, 4, 5] */

// ____________________________________

// 20 - Set Methods:

// Add :
// Answer 1 (With Chain Add)
/* let myBooks = new Set().add("One").add("Two").add("Three");
console.log(myBooks); // Set(3) {"One", "Two", "Three"} */

// Answer 2
/* let myBooks = new Set();
myBooks.add("One");
myBooks.add("Two");
myBooks.add("Three");

console.log(myBooks); // Set(3) {"One", "Two", "Three"} */

/* let myBooks = new Set("Osama"); // Accept Iteration
myBooks.add("Osama"); // Accept Value

console.log(myBooks); // {"O", "s", "a", "m", "Osama"} (There Is No Similarity Between The First And The Second Element, So The Word "Osama" Remained) */

/* let myBooks = new Set("Osama"); // Accept Iteration
myBooks.add("O"); // Accept Value

console.log(myBooks); //  {"O", "s", "a", "m"}
// (There Is Similarity Between The First And The Second Element, So The Character "Osama" Was Deleted) */

// Delete:
/* let myBooks = new Set("Osama");
myBooks.add("Osama");
myBooks.delete("s"); 

console.log(myBooks); // {"O", "a", "m", "Osama"} */

// Has: (If Checks A Specific Item)
// Example 1
/* let myBooks = new Set("Osama");
myBooks.add("Osama");
myBooks.delete("s"); 

console.log(myBooks);
console.log(myBooks.has("Osama")); // true */

// Example 2
/* let myBooks = new Set("Osama");
myBooks.add("osama");
myBooks.delete("s"); 

console.log(myBooks);
console.log(myBooks.has("Osama".toLowerCase())); // true  */

// Size: (To See How Many Elements Are In Set)
/* let myBooks = new Set("Osama");
myBooks.add("osama");
myBooks.delete("s"); 

console.log(myBooks);
console.log(myBooks.size); */

// Clear: (To Delete All Items In Set)
/* let myBooks = new Set("Osama");
myBooks.add("osama");
myBooks.delete("s");
myBooks.clear()

console.log(myBooks); // Set(0) {} */

// ____________________________________