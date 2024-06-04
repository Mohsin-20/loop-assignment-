///////////////LOOP ASSIGNMENT////////////////////////
//Question No 1

let myWork : {name: string; status:boolean } [] = []


for (let i=1; i<=10; i++){
  let lesson = {
      name: "lesson"+i ,
      status:i % 2 != 0,
  };
myWork.push(lesson);
}
console.log(myWork);

///Question No 2

const maxValue = 100;

const randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log(`Generated Random Number: ${randomNumber}`); 
let isCorrectGuess = false;


const predefinedGuesses: number[] = [23, 45, 67, 89, 50, 78, 90, 34, 56, 10];

let guessIndex = 0;

while (!isCorrectGuess && guessIndex < predefinedGuesses.length) {
    const currentGuess = predefinedGuesses[guessIndex];
    console.log(`Current Guess: ${currentGuess}`);
    
    if (currentGuess === randomNumber) {
        isCorrectGuess = true;
        console.log(`Correct Guess! The number was ${randomNumber}.`);
    } else {
        console.log(`Incorrect Guess. Try again!`);
    }

    guessIndex++;
}

if (!isCorrectGuess) {
    console.log(`None of the guesses were correct. The number was ${randomNumber}.`);
}
///Question NO 3

let counter =0;
let step =3;
do{
    console.log(`Counter value: ${counter}`);
    counter+=step;
} while(counter < 100);
console.log(`Counter value: ${counter}`);


////Question No 4
let myObject ={
    item1:"Shoes",
    item2:"Dress",
    item3:"Jewellery",
}  
    for (let property in myObject) {
        if (myObject.hasOwnProperty(property)) {
            console.log(`Property: ${property}, Value: ${myObject[property]}`);
        }
    } 
    /////Question No 5

    let myArray : number[] = [];

// for loop for adding value to the array
for(let i = 1; i <= 10; i++){
    myArray.push(i);
}
console.log(myArray);

// for loop to iterate through array length and display array element with its index
for(let i = 0; i < myArray.length; i++){
    console.log(`Value ${myArray[i]} and its index is ${i}`);
}

// for of loop to print value of array
for(let element of myArray){
    console.log(element);
}