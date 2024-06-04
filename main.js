///////////////LOOP ASSIGNMENT////////////////////////
//Question No 1
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson" + i,
        status: i % 2 != 0,
    };
    myWork.push(lesson);
}
console.log(myWork);
///Question No 2
var maxValue = 100;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Generated Random Number: ".concat(randomNumber));
var isCorrectGuess = false;
var predefinedGuesses = [23, 45, 67, 89, 50, 78, 90, 34, 56, 10];
var guessIndex = 0;
while (!isCorrectGuess && guessIndex < predefinedGuesses.length) {
    var currentGuess = predefinedGuesses[guessIndex];
    console.log("Current Guess: ".concat(currentGuess));
    if (currentGuess === randomNumber) {
        isCorrectGuess = true;
        console.log("Correct Guess! The number was ".concat(randomNumber, "."));
    }
    else {
        console.log("Incorrect Guess. Try again!");
    }
    guessIndex++;
}
if (!isCorrectGuess) {
    console.log("None of the guesses were correct. The number was ".concat(randomNumber, "."));
}
///Question NO 3
var counter = 0;
var step = 3;
do {
    console.log("Counter value: ".concat(counter));
    counter += step;
} while (counter < 100);
console.log("Counter value: ".concat(counter));
////Question No 4
var myObject = {
    item1: "Shoes",
    item2: "Dress",
    item3: "Jewellery",
};
for (var property in myObject) {
    if (myObject.hasOwnProperty(property)) {
        console.log("Property: ".concat(property, ", Value: ").concat(myObject[property]));
    }
}
/////Question No 5
// let myArray: number[] = [];
// for (let i = 1; i <= 10; i++) {
//     myArray.push(i);
// }
// console.log("Array after populating:", myArray);
// for (let i = 0; i < myArray.length; i++) {
//     console.log(`Index: ${i}, Value: ${myArray[i]}`);
// }
// for (let value of myArray) {
//     console.log(`Value: ${value}`);}
var myArray = [];
// for loop for adding value to the array
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
// for loop to iterate through array length and display array element with its index
for (var i = 0; i < myArray.length; i++) {
    console.log("Value ".concat(myArray[i], " and its index is ").concat(i));
}
// for of loop to print value of array
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var element = myArray_1[_i];
    console.log(element);
}
