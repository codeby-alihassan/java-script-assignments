//  console.log("java script connected");

// chapter 1 
//  alert("Error! plese enter a valid password");
// alert("Welcome to js land\nHappy coding!")

// chapter 2 

// var username =("Alihassan");
// console.log(username);


// var massage = ("hi Alihassan welcome to our website" );
// alert(massage);

// var pizzaPattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizzaPattern);


// var email = ("developerperson53@gmail.com");
// alert("My email is"+" "+ email);


// chapter no 3 

// var age=(17);
// alert("My age is "+""+age);

// var totalvisit = (14);
// alert ("you have visit" + " " + totalvisit + " "+  "times");



// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;


// chapter 4 


// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");

// document.write("<h1>Rules for naming JS variables</h1>");

// document.write("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>underscores</b>, and <b>dollar signs</b>. For example <b>$my_1stVariable</b></p>");

// document.write("<p>Variables must begin with a <b>letter</b>, <b>underscore</b>, or <b>dollar sign</b>. For example <b>$name</b>, <b>_name</b>, or <b>name</b></p>");

// document.write("<p>Variable names are case <b>sensitive</b>.</p>");

// document.write("<p>Variable names should not be JS <b>keywords</b>.</p>");


// chapter 5 

// let num1 = 5;
// let num2 = 10;
// let sum = num1 + num2;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);

// let myVar;
// document.write("Value after variable declaration is: " + myVar + "<br>");
// myVar = 5;
// document.write("Initial value: " + myVar + "<br>");
// myVar++;
// document.write("Value after increment is: " + myVar + "<br>");
// myVar += 7;


// let number = parseInt(prompt("Enter a number:", "4"));

// if (isNaN(number)) {
//     document.write("Please enter a valid number.");
// } else {
//     document.write("<h3>Table of " + number + "</h3>");
//     for (let i = 1; i <= 10; i++) {
//         document.write(number + "x" + i + "=" + (number * i) + "<br>");
//     }
// }

// let celsius = 25;
// let fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
// console.log(`${celsius}°C is ${fahrenheitFromCelsius}°F`);

// let fahrenheit = 70;
// let celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
// console.log(`${fahrenheit}°F is ${celsiusFromFahrenheit}°C`);


// chapter 6-9

// let a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("------------------------------------<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");


// let userName = prompt("Please enter your name:");
// alert("Hello, " + userName + "! Welcome.");


// let input = prompt("Enter a number:", 5);
// let num = (input === "" || input === null) ? 5 : Number(input);

// document.write("<h2>Multiplication Table of " + num + "</h2>");
// for (let i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }


// chapter 9-11

// let city = prompt("Enter city name:");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }


// let gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// }


// let fuel = parseFloat(prompt("Enter remaining fuel in liters:"));
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }


// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){ alert("condition 1 is true"); }
// if (c === 13){ alert("condition 2 is true"); }
// if (++c < 14){ alert("condition 3 is true"); }
// if (c === 14){ alert("condition 4 is true"); }



// let secretNumber = 7;
// let userGuess = parseInt(prompt("Guess the secret number (ranging from 1 to 10):"));

// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// }

// let number = 9; 

// if (number % 3 === 0) {
//     console.log("The number is divisible by 3.");
// }


// let inputNumber = 7;

// if (inputNumber % 2 === 0) {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }


// let T = 35;

// if (T > 40) {
//     console.log("It is too hot outside.");
// } else if (T > 30) {
//     console.log("The Weather today is Normal.");
// } else if (T > 20) {
//     console.log("Today's Weather is cool.");
// } else if (T > 10) {
//     console.log("OMG! Today's weather is so Cool.");
// }


// let firstNumber = 12;
// let secondNumber = 4;
// let operation = "*";
// let result;

// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     result = firstNumber / secondNumber;
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// }

// console.log("Result: " + result);



