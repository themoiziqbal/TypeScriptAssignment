//1. Node.js, TypeScript and VS Code Is Installed.

// 2. Personal Message
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

//3. Store a person's name in a variable
let personName: string = "Moiz Iqbal";

// Print the person's name in lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Print the person's name in title case
console.log("Titlecase: " + toTitleCase(personName));

// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//4. Allama Iqbal Famous Quote //
var quote = 'Allama Iqbal once said, "Vision without power does bring moral elevation but cannot give a lasting culture."';
console.log(quote);

//5. Storing the famous person's name in a variable
var famous_person = 'Allama Iqbal';
// Composing message using the famous person's name
var message = "".concat(famous_person, " once said, \"Vision without power does bring moral elevation but cannot give a lasting culture.\"");
// Printing the message to the console
console.log(message);

//6. Storing the person's name with whitespace characters
var personNameWithWhitespace = "\t \n   John Doe  \n \t";
// Printing the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);
// Striping the whitespace using trim() method
var strippedName = personNameWithWhitespace.trim();
// Printing the stripped name
console.log("Stripped name:", strippedName);

//7. Addition operation resulting in 8
console.log("Addition:", 5 + 3);
// Subtraction operation resulting in 8
console.log("Subtraction:", 10 - 2);
// Multiplication operation resulting in 8
console.log("Multiplication:", 4 * 2);
// Division operation resulting in 8
console.log("Division:", 64 / 8);

//8. Four Lines Making Eight
console.log(5 + 3);
console.log(4 * 2);
console.log(10 - 2);
console.log(16 / 2);

//9. Favorite Number in a variable
var favoriteNumber = 3;
// Creating a message revealing my favorite number
var message = "My favorite number is ".concat(favoriteNumber, ".");
// Print the message
console.log(message);

//10. Adding comments

// Author: [Moiz Iqbal]
// Date: [19/2/2024]
// This program performs addition operation and prints the result.
// Addition operation resulting in 8
console.log(5 + 3);
// Author: [Moiz Iqbal]
// Date: [19/2/2024]
// This program stores a favorite number in a variable, creates a message revealing the favorite number, and prints the message.
// Storing favorite number in a variable
var favoriteNumber = 3;
// Creating a message revealing favorite number
var message = "My favorite number is ".concat(favoriteNumber, ".");
// Printing the message
console.log(message);

//11.Store the names of friends in an array called names
var names = ["Sir Kamran", "Sir Zia", "Sir Qasim", "Sir Daniyal", "Sir Ameen"];
// Print each person's name by accessing each element in the list, one at a time
names.forEach(function (name) {
    console.log(name);
});

//12. Storing the names of friends in an array called names
var names = ["Sir Kamran", "Sir Zia", "Sir Qasim", "Sir Daniyal", "Sir Ameen"];
// Printing a personalized greeting message to each person
names.forEach(function (name) {
    console.log("Hello, ".concat(name, "! Your student Moiz here, I hope you're fine and doing well."));
});

//13. Storing examples of favorite mode of transportation in an array called transportation
var transportation = ["Honda motorcycle & Laptop", "Farrari", "Toyota car", "Tesla electric car"];
// Print statements about each item in the list
transportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "."));
});

//14. Storing the names of people i would like to invite to dinner in an array called guestList
var guestList = ["Elon Musk", "Bill Gates", "Brad Pitt"];
// Printing an invitation message to each person in the guest list
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});

//15. Storing the names of people i would like to invite to dinner in an array called guestList
var guestList = ["Bill Gates", "Elon Musk", "Brad Pitt"];
// Printing an invitation message to each person in the guest list
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});
// Printing the name of the guest who can't make it
var guestWhoCantMakeIt = guestList[1];
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Modifying the list, replacing the name of the guest who can’t make it with the name of the new person we are inviting
guestList[1] = "Johnny Deep";
// Printing a second set of invitation messages for each person who is still in my list
console.log("\nSecond set of invitations:");
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});

//16. Storing the names of people i would like to invite to dinner in an array called guestList
var guestList = ["Bill Gates", "Johnny Deep", "Brad Pitt"];
// Printing an invitation message to each person in the guest list
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});
// Printing a message informing people that i found a bigger dinner table
console.log("Great news! I found a bigger dinner table.");
// Adding one new guest to the beginning of your array
guestList.unshift("Dwayne The Rock Johnson");
// Adding one new guest to the middle of array
guestList.splice(Math.floor(guestList.length / 2), 0, "Isaac Newton");
// Using push() to add one new guest to the end of the list
guestList.push("Justin Bieber");
// Printing a new set of invitation messages for each person in the list
console.log("\nNew set of invitations:");
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});

//17. Storing the names of people i would like to invite to dinner in an array called guestList
var guestList = ["Johnny Depp", "Bill Gates", "Isaac Newton", "Dwayne the rock Johnson", "Brad pitt", "Justin Beiber"];
// Printing an invitation message to each person in the guest list
guestList.forEach(function (person) {
    console.log(" Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});
// Printing a message saying that you can invite only two people for dinner
console.log("\nSorry, but I can only invite two people for dinner.");
// Remove guests from your list one at a time until only two names remain
while (guestList.length > 2) {
    var removedPerson = guestList.pop();
    console.log("Sorry, ".concat(removedPerson, ", but I can't invite you to dinner."));
}
// Printing a message to each of the two people still on your list, letting them know they're still invited
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nYou're still invited to dinner.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});
// Remove the last two names from your list
guestList.splice(0, 2);
// Printing your list to make sure you actually have an empty list at the end of your program
console.log("\nFinal guest list:", guestList);

//18.Seeing The World
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
// Storing the locations i would like to visit in an array
var placesToVisit = ["Turkey", "Paris", "New York", "Dubai", "Japan"];
// Printing array in its original order
console.log("Original order:", placesToVisit);
// Printing array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Showing that array is still in its original order by printing it
console.log("Original order after sorting:", placesToVisit);
// Printing array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Showing that array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of your list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort to change array so it’s stored in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:", placesToVisit);

//19. Storing the names of people i would like to invite to dinner in an array called guestList
var guestList = ["Johnny Depp", "Bill Gates", "Elon Musk", "Brad Pitt", "Dwayne the rock Johnson", "Justin Bieber"];
// Printing an invitation message to each person in the guest list
guestList.forEach(function (person) {
    console.log("Hello Dear Sir ".concat(person, ",\n\nI would like to invite you to dinner. It would be an honor to have your presence.\n\nYour Sincerely,\n[Moiz Iqbal]"));
});
// Printing the number of people being invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));

//20. Storing a list of famous landmarks around the world
var landmarks = [
  "Eiffel Tower (Paris, France)",
  "Great Wall of China (China)",
  "Statue of Liberty (New York City, USA)",
  "Taj Mahal (Agra, India)",
  "Machu Picchu (Cusco, Peru)"
];
// Printing the list of landmarks
console.log("List of Famous Landmarks:");
landmarks.forEach(function (landmark) {
  console.log(landmark);
});

//21. Defining objects representing information about different books
var book1 = {
  title: "Anna Karenina",
  author: "Leo Tolstoy",
  year: 1878
};
var book2 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813
};
var book3 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};
// Printing information about each book
console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Year:", book1.year);
console.log("\nBook 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Year:", book2.year);
console.log("\nBook 3:");
console.log("Title:", book3.title);
console.log("Author:", book3.author);
console.log("Year:", book3.year);

//22. Intentional Error

// Defining an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Accessing an element beyond the array length to produce an index error
console.log(numbers[6]); // This will produce an index error
// Accessing an element within the array bounds
console.log(numbers[4]); // Accessing the last element of the array

//23. Conditional Test

var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
// Test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 5
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');
// Test 6
console.log("Is car.length < 6? I predict False.");
console.log(car.length < 6);
// Test 7
console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);
// Test 8
console.log("Is car.includes('u')? I predict True.");
console.log(car.includes('u'));
// Test 9
console.log("Is car.startsWith('s')? I predict True.");
console.log(car.startsWith('s'));
// Test 10
console.log("Is car.endsWith('u')? I predict True.");
console.log(car.endsWith('u'));

//24.CMT

// Tests for equality and inequality with strings
var color = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color == 'blue');
console.log("Is color not equal to 'red'? I predict True.");
console.log(color != 'red');
// Tests using the lower case function
var personName = 'John';
console.log("Is name in lowercase equal to 'john'? I predict True.");
console.log(personName.toLowerCase() == 'john');
// Numerical tests
var x = 5;
var y = 10;
console.log("Is x equal to y? I predict False.");
console.log(x == y);
console.log("Is x not equal to y? I predict True.");
console.log(x != y);
console.log("Is x greater than y? I predict False.");
console.log(x > y);
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);
console.log("Is x less than or equal to y? I predict True.");
console.log(x <= y);
// Tests using "and" and "or" operators
var age = 25;
console.log("Is age greater than 18 and less than 30? I predict True.");
console.log(age > 18 && age < 30);
console.log("Is age greater than 30 or less than 20? I predict False.");
console.log(age > 30 || age < 20);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));

//25. Alien Color

var Alien_Color = 'green';
if (Alien_Color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var AlienColor = 'red'; // Assigning a color other than 'green'
if (AlienColor === 'green') {
    console.log("Congratulations! You just earned 5 points."); // This block won't be executed as the condition is false
}

//26. Alien Color 2

var alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points."); // This block won't be executed
}
var alien_color = 'red'; // Assigning a color other than 'green'
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien."); // This block won't be executed
}
else {
    console.log("Congratulations! You just earned 10 points.");
}

//27. Alien Color 3

//If the alien is green:
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points."); // This block won't be executed
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points."); // This block won't be executed
}
//If the alien is yellow:
var aliencolor = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points."); // This block won't be executed
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points."); // This block won't be executed
}
//If the alien is red:
var alienColor = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points."); // This block won't be executed
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points."); // This block won't be executed
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points.");
}

//28. Stages Of Life

var age = 20;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}

//29.Making an array of three favorite fruits
var favorite_fruits = ['banana', 'apple', 'strawberry'];
// Checking whether certain fruits are in array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
else {
    console.log("Oranges are not among my favorite fruits.");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
else {
    console.log("Kiwis are not among my favorite fruits.");
}

//30. Array of usernames
var usernames = ['admin', 'Eric', 'John', 'Alice', 'Jane'];
// Loop through the array and print greetings
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});

//31. Array of usernames
var usernames = [];
// Checking if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and printing greetings
    usernames.forEach(function (username) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
else {
    console.log("We need to find some users!");
}

//32. List of current users
var current_users = ['Baber', 'Fahad', 'Alina', 'Bobby', 'Hamza'];
// List of new users
var new_users = ['Mariam', 'alina', 'Baber', 'Fawad', 'Hamza'];
// Converting all current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
// Loop through new_users to check for unique usernames
new_users.forEach(function (new_username) {
    // Convert the new username to lowercase for case-insensitive comparison
    var new_username_lower = new_username.toLowerCase();
    // Checking if the new username exists in the current usernames list (case-insensitive)
    if (current_users_lower.includes(new_username_lower)) {
        console.log("Sorry, the username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_username, "' is available."));
    }
});

//33. Storing the numbers 1 through 9 in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
});

//34. Array of favorite pizza names
var favorite_pizzas = ['Pepperoni', 'Margherita', 'Supreme'];
// Printing the name of each pizza
console.log("Printing pizza names:");
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log(favorite_pizzas[i]);
}
// Printing a sentence using the name of each pizza
console.log("\nPrinting pizza statements:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
// Printing a sentence about liking pizza
console.log("\nI really love pizza!");

//35. Array of animals
var animals = ['dog', 'cat', 'rabbit'];
// Printing the name of each animal
console.log("Printing animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Printing a statement about each animal
console.log("\nPrinting statements about animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Printing a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");

//36. Defining the make_shirt function
function make_shirt(size, message) {
  console.log("You have ordered a ".concat(size, " T-shirt with the message: \"").concat(message, "\"."));
}
// Call the function
make_shirt('large', 'Hello, World!');

//37. Defining the make_shirt function with default values
function make_shirt(size, message) {
  if (size === void 0) { size = 'large'; }
  if (message === void 0) { message = 'I love TypeScript'; }
  console.log("You have ordered a ".concat(size, " T-shirt with the message: \"").concat(message, "\"."));
}
// Calling the function to create a large shirt with the default message
make_shirt();
// Calling the function to create a medium shirt with the default message
make_shirt('medium');
// Calling the function to create a shirt of any size with a different message
make_shirt('small', 'Hello, World!');

//38. Defining the describe_city function with a default parameter for country
function describe_city(city, country) {
  if (country === void 0) { country = 'Pakistan'; }
  console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');

//39. Defining the city_country function
function city_country(city, country) {
  return "".concat(city, ", ").concat(country);
}
// Calling the function with city-country pairs and print the returned value
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Tokyo', 'Japan'));

//40.Defining the make_album function
function make_album(artist, title, tracks) {
  var album = {
      artist: artist,
      title: title
  };
  if (tracks !== undefined) {
      album.tracks = tracks;
  }
  return album;
}
// Making three dictionaries representing different albums
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 15);
var album3 = make_album('Artist3', 'Album3', 7);
// Printing each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

//41.Defining the magicians function
function show_magicians(magicians) {
  magicians.forEach(function (magician) {
      console.log(magician);
  });
}
// Array of magician's names
var magicians = ['David Copperfield', 'Jimmy', 'Rob', 'Atif'];
// Calling the show_magicians function
show_magicians(magicians);

//42. Defining the  great magicians function
function show_magicians(magicians) {
  magicians.forEach(function (magician) {
      console.log(magician);
  });
}
// Defining the make_great function
function make_great(magicians) {
  return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Calling make_great to modify the array of magicians
magicians = make_great(magicians);
// Calling the show_magicians function to see the modified list
show_magicians(magicians);

//43:Unchanged Magicians

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
// Defining the show_magicians function
function show_magicians(magicians) {
  magicians.forEach(function (magician) {
      console.log(magician);
  });
}
// Defining the make_great function
function make_great(magicians) {
  return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var original_magicians = ['David Copperfield', 'Jimmy', 'Rob', 'Atif'];
// Creating a copy of the original array
var modified_magicians = __spreadArray([], original_magicians, true);
// Call make_great with the copy of the array of magicians' names
modified_magicians = make_great(modified_magicians);
// Call show_magicians to show the original array of names
console.log("Original magicians:");
show_magicians(original_magicians);
// Call show_magicians to show the modified array with 'the Great' added
console.log("\nModified magicians:");
show_magicians(modified_magicians);

//44. Defining the function for ordering sandwiches
function orderSandwich() {
  var items = [];
  for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
  }
  console.log("You ordered a sandwich with the following items:");
  items.forEach(function (item) {
      console.log("- " + item);
  });
  console.log("Enjoy your sandwich!\n");
}
// Calling the function with different number of arguments
orderSandwich('Fries', 'Cheese');
orderSandwich('Chicken', 'Lettuce', 'Tomato', 'Mayonnaise');
orderSandwich('Peanut Butter', 'Jelly');

//44. Defining the function for ordering sandwiches
function orderSandwich() {
  var items = [];
  for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
  }
  console.log("You ordered a sandwich with the following items:");
  items.forEach(function (item) {
      console.log("- " + item);
  });
  console.log("Enjoy your sandwich!\n");
}
// Calling the function with different number of arguments
orderSandwich('Fries', 'Cheese');
orderSandwich('Chicken', 'Lettuce', 'Tomato', 'Mayonnaise');
orderSandwich('Peanut Butter', 'Jelly');


//45. Defining the function for storing information about a car
function carInfo(manufacturer, modelName) {
  var extras = [];
  for (var _i = 2; _i < arguments.length; _i++) {
      extras[_i - 2] = arguments[_i];
  }
  var car = {
      manufacturer: manufacturer,
      modelName: modelName
  };
  // Adding the extra information to the car object
  extras.forEach(function (extra) {
      var key = extra[0], value = extra[1];
      car[key] = value;
  });
  return car;
}
// Calling the function with required information and additional name-value pairs
var carDetails = carInfo('Toyota', 'Corolla', ['color', 'blue'], ['year', 2024]);
// Printing the Object that's returned
console.log(carDetails);
