//Q How do we assign a value to a variable?
//A by using an equal sign. ex). x = value. 

//Q How do we change the value of a variable?
//A again by using the equal sign, You would assign a new value to the variable. 
//ex) x = value, change it to x = 0,

//How do we assign an existing variable to a new variable?
//A you would pass the existing variable as a value to the new variable by using the equal sign.

//Q Remind me, what are declare, assign, and define?
//Declare - initiating/giving a variable. ex) let x;
//Assign - assigning a value to whats being declared. x = 10;
//Define - it declares and assigns in one set. ex) let x = 10;

//Q What is pseudocoding and why should you do it?
//A thinking and outlining the solution before writing out the code.

//Q What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//A 80% planing and thinking 20% coding. 

/**Create a variable called firstVariable.

Assign it the value of the string "Hello World".
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable.
Change the value of secondVariable to any string.
What is the value of firstVariable? */
/*const firstVariable = "Hello World"; {
    let firstVariable = 10
    let secondVariable = firstVariable;
    secondVariable = "World!";
    console.log(firstVariable);
}*/
firstVariable = "Hello World!";
firstVariable = 10;
secondVariable = firstVariable;
secondVariable = "Hi there!";
console.log(firstVariable); //value is 10.

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated
yourName = "Workenesh Badoes";
myName = "Hello my name is " + yourName;
console.log(myName);

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax, not weird things that don't make sense but happen to print true to the console.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(!false || !false || !false || !false || !false || true);
console.log(!false || !false)
console.log(e === 'Kevin');
console.log(a && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/**Declare a variable animal. Set it to be "cow" or some other animal Write code that will print out "mooooo" if the variable is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."*/
const animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.")
}

/**Make a variable that holds a person's age; be semantic.
Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young." */
const age = 24; {
    if (age >= 16) {
        console.log("Here are the kesy!");
    } else {
        console.log("Sorry, you're too young.")
    }
}

/**Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++) 
Write a loop that will print out all the numbers from 0 to 10, inclusive.
Write a loop that will print out all the numbers from 10 up to and including 400.
Write a loop that will print out every third number starting with 12 and going no higher than 4000*/
/*for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
    console.log(i);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i += 3) {
    console.log(i)
}

//Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " <-- is an even number");
    } else {
        console.log(i);
    }
}

//For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five
for (let i = 0; i <= 100; i++) {
    console.log("I found a " + i + "." + " High five!")
}


//Add to the code from above to print out "I found a number. Three is a crowd." if the number is a multiple of three
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("I found a " + i + "." + " Three is a crowd");
    } else {
        console.log("I found a " + i + "." + " High five!");
    }
}

//For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account
let bank_account = 0;
 for (let i = 1; i <= 10; i++) {
    bank_account += i
 }
console.log(bank_account);
*/
//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2
let bank_account = 0;
 for (let i = 1; i <= 100; i++) {
     bank_account += i * 2;
 }
console.log(bank_account);

/**What are the things in an array called?
Do Arrays guarantee those things will be in order?
What real-life thing could you model with an array? */
//A - they are called array elements.
//A - elements in array do guarantee they will be stored in order.
//A - lists of any kind ex) grades. 

//Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
    'this is a quote',
    'another quote',
    'WOW! another one.'
]
console.log(quotes);

/**Given the following array, const randomThings = [1, 10, "Hello", true]:

How do you access the 1st element in the array?
What would you write to access the 3rd element of the array? */
const randomThings = [1, 10, "Hello", true];

//How do you access the 1st element in the array?
console.log(randomThings[0]);
//What would you write to access the 3rd element of the array?
console.log(randomThings[2]);

/**Given the following array, const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]:

Change the value of "Github" to "Octocat".
Add a new element, "Cloud City" to the array.
Check the value of the array to make sure it updated the array */
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass)

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//Check the value of the array to make sure it updated the array.
//it has updated.

/**Given the following array, const myArray = [5, 10, 500, 20]:

Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
Remove the 5 from the beginning of the array.
Add the string "Bob Marley" to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). */
/*const myArray = [5, 10, 500, 20]

//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array
myArray.push("Aegon");
console.log(myArray);

//Remove the 5 from the beginning of the array
myArray.shift([0])
console.log(myArray)

//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array
myArray.pop();
console.log(myArray);

//Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray) //it reversed the order of the array. 
*/

/**Create a variable that contains an integer.

Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100.
console.log()s "big number" if the number is greater than or equal to 100. */
let x = 101;
for (let i = 0; i <= 100; i++) {
    if (x < 100) {
        console.log("little number.");
    } else {
        console.log("Big number.");
    }
    
}

/**Write an if ... else statement:

console.log() little number if the number entered is less than 5.
If the number entered is more than 10, log "big number".
Otherwise, log "monkey". */
let y = 1;

if (y < 5) {
    console.log("Little number");
} else if (y > 10) {
    console.log("Big number");
} else {
    console.log("Hi there.")
}

//What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"
kristynsCloset.splice(kristynsCloset.indexOf("yellow knit hat") + 1, 0, "raybans");
console.log(kristynsCloset)

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow
kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained knit hat";
console.log(kristynsCloset);

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array
const outfitForThom = thomsCloset[0][0];
console.log(outfitForThom);

//In the same way, access one item from Thom's pants array
const pantsForThom = thomsCloset[1][1];
console.log(pantsForThom);

//Access one item from Thom's accessories array
const accessoriesForThom = thomsCloset[2][2];
console.log(accessoriesForThom);

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a " + outfitForThom + ", " + pantsForThom + "," + " and " + accessoriesForThom + "!");

//Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

//Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting, like so
function printGreeting(name) {
    return `Hello, ${name}!`
}
console.log(printGreeting("Benti"))

//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
    console.log(`${name} is cool.`);
}
printCool("Captain Reynolds");

//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(x) {
    const number = x ** 10;
    return `${x} is ${number}`
}
console.log(calculateCube(5));

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case
function isVowel(character) {
    const x = character.toLowerCase();
    if (x === "i" || x === "e" || x === "a" || x === "o" || x === "u") {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel("U"));

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string
function getTwoLengths(string, string2) {
    const firstString = string.length;
    const secondString = string2.length;
    return [firstString, secondString];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string
function getMultipleLengths(oneString) {
    const singleString = [];
    for (let i = 0; i < oneString.length; i++) {
        singleString.push(oneString[i].length);
    }
    return singleString;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(x, y, z) {
    return Math.max(x, y, z)
}
console.log(maxOfThree(6, 9, 1));

//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(oneArgument) {
    let longersWord = "";
    for (let i = 0; i < oneArgument.length; i++) {
        let theWord = oneArgument[i];
        if(theWord.length > longersWord.length || longersWord === "") {
            longersWord = theWord;
        }
    }
    return longersWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

///Create an object called user.
//Write into the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like
const user = {
    name: "Julie",
    email: "julie@gmail.com",
    age: 26,
    purchased: [],
}
console.log(user)


//Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address
const reNewEmail = "mynew.email@gmail.com";
const updateIt = { ...user, email: reNewEmail };
console.log(updateIt);

//Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
const changeAge = { ...user, age: user.age++ };
console.log(changeAge);

//Without changing the original user object, add a new key location to the object, and give it a value of some location (a string).
console.log(user, { ...user, location: "Hays" });

//Our user has purchased some items! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array
user.purchased.push("carbohydrates");
console.log(user);

//They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array
user.purchased.push("peace of mind");
console.log(user);

//They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino Jodhpurs");
console.log(user);

//Console.log just the "Merino jodhpurs" from the purchased array
console.log(user, { ...user, purchased: "Merino Jodhpurs" });

/**Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now).
Console.log just the friend's name.
Console.log just the friend's location.
Change the friend's age to 55.
The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
Console.log just "A latte" from the friend's purchased array */
user.friend = {
    name: "Grace Hopper",
    age: 55,
    location: "Kansas City",
    purchased: []
};

user.userFriend = user.friend;
console.log(user);


//Console.log just the friend's name
console.log(user.friend);

//Console.log just the friend's location
console.log(user.userFriend.location);


//Change the friend's age to 55
const friendsAge = { ...user.friend, age: user.friend.age++ };
console.log(friendsAge);

//The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
console.log(user.friend);

//The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array
user.friend.purchased.push("A Latte");
console.log(user.friend);

//Console.log just "A latte" from the friend's purchased array.
console.log(user.friend, { ...user.friend, purchased: "A Latte" });

//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}

//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console
for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

/**Write a single function updateUser that takes no parameters. When the function is run, it should:

Increment the user's age by 1.
Make the user's name uppercase. */
function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}
console.log(user);
updateUser();
console.log(user);

/**Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument */
function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}
console.log(user.friend);
oldAndLoud(user.friend);
console.log(user.friend);

