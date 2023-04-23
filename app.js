//<============CHAP # 1): ALERT============>
alert("Hello World");
alert("Error! please enter a valid password")
alert("Welcome to JS Land... \n Happy Coding!")
alert("Welcome to JS Land..")
alert("Happy Coding! \n prevent this page from creating additional dialogs")
alert("Hello... I can run JS through my web brower's console")
//<============CHAP # 2): VARFSTG===========>
var a = "Huzaifa";
var b = " Farhan";
var c = a +  b;
alert(c)
var message = "Hello World"
alert(message);
var d ="Jhone Deo"
var e ="15 years old"
var f ="Certified Web Developer"

alert(d)
alert(e)
alert(f)

var g = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(g)

 var email = "huzaifafarhan7890@gmail.com";
 alert("My email adress is " + email);

 
 var book = "A smarter way to learn JavaScript";
 alert("I am trying to learn from the book " + book);
 document.write("Yah! I can write HTML content through JavaScript")

 var h = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
 alert(h);

var age = 15
alert("I am "+age+" years old "); 
var numVisits = 0;

if (localStorage.getItem('numVisits')) {
  numVisits = parseInt(localStorage.getItem('numVisits'));
}
numVisits++;
localStorage.setItem('numVisits', numVisits.toString());
document.write( ("<br>") +'Welcome, you have visited this page ' + numVisits + ' times.');

var year = 2008
document.write(("<br>") +"My birth year is "+ year)
document.write(("<br>") + "Type of my declared varible is number")

var visitorName = prompt('Welcome to XYZ Clothing! Please enter your name.');

var productTitle = prompt('What product would you like to order?');

var quantity = prompt('How many ' + productTitle + ' would you like to order?');

quantity = parseInt(quantity);

document.write('<h2>Thank you for your order, ' + visitorName + '!</h2>');
document.write('<p>You have ordered ' + quantity + ' ' + productTitle + '(s).</p>');









var k = firstName = 'John', lastName = 'Doe', age = 30;

alert(k)



var n = "1.firstName \n2._lastName \n3.$email \n4.numberOfItems \n5.customer_1234 "
alert(n)
var m = "1.123customer\n2.my-email\n3.first name\n4.customer-info.\n5.var  "
alert(m)





var o = 3 + 5;
document.write("Sum of 3 and 5 is "+o )
var p = 3 - 5;
document.write(("<br>") + "difference b/w of 3 and 5 is "+p)
var q = 3 * 5;
document.write(("<br>") +"3 x 5 is "+q)
var r = 3 / 5;
document.write(("<br>") +"if we divide 3 to 5 is "+r)

var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

var s = 600;
var t =5
var w = s*t;
document.write("Total cost to buy 5 ticket to movie is "+w)

var nume = parseInt(prompt("Enter a number to display its multiplication table:"));

document.write("Multiplication table of " + nume + "<br>");

for(var i=1; i<=10; i++) {
    document.write(nume + " x " + i + " = " + (nume*i) + "<br>");
}

// Store a Celsius temperature into a variable
var celsius = 30;

// Convert Celsius to Fahrenheit
var fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius} degrees Celsius is equal to ${fahrenheit} degrees Fahrenheit`);

// Store a Fahrenheit temperature into a variable
var fahrenheit2 = 86;

// Convert Fahrenheit to Celsius
var celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(`${fahrenheit2} degrees Fahrenheit is equal to ${celsius2} degrees Celsius`);

document.write("Shopping Cart")


var I1 = 650;
var I2 = 100;
var q1 = 3;
var q2 = 7;
var sc = 100;

document.write(("<br>")+"Price of item1 =" + I1);
document.write(("<br>")+"Quantity of item1 =" + q1)
document.write(("<br>")+"Price of item2 =" + I2);
document.write(("<br>")+"Quantity of item1 =" + q1);
document.write(("<br>")+"Shipping Charges =" + sc);
var y=  (3*650)+(7*100)+100
document.write(("<br>")+"Total cost of your order =" +y)

var obt = prompt("Total Marks obt.")
var frm = prompt("Mark obt. From")
var tot = obt/frm*100

.ko
if(100<tot){alert ("error")}
else{alert(tot + "%")
var b = 90;
var c = 80;
var d = 70;
var e = 60;
var f = 50;
var g = 50;
}

 if(tot>= b){
    alert("A*")
}
else if(tot>= c){
    alert("A")
}
else if(tot>= d){
    alert("B")
}
else if(tot>= e){
   alert("C")
}
else if(tot>= f){
    alert("D")
}
else if(g>tot){
    alert("u")
}


var cyear= +prompt("what is Current year?")
var ybyear= +prompt("what is your birth year?")
var age1 = document.write(("<br>")+"<h1>Age Calculator</h1>");
var age2 = document.write(("<br>")+"Current Year: "+ cyear)
var age3 = document.write(("<br>")+"Birth Year: "+ ybyear)
var ya = cyear-ybyear
var yage = document.write(("<br>")+"your Age: "+ ya)

document.write(("<br>")+"<h1>The Geometrizer</h1>");

// Store the radius of the circle
var radius = 5;

// Calculate the circumference and area of the circle
var circumference = 2 * Math.PI * radius;
var area = Math.PI * (radius ** 2);

// Output the circumference and area in the console
document.write(("<br>")+`radius=`+radius);
document.write(("<br>")+`The circumference is ${circumference}`);
document.write(("<br>")+`The area is ${area}`);


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(("<br>")+"result = "+result)


var name = prompt("Please enter your name:");

alert(`Hello, ${name}! Welcome to our website.`);

var subject1 = prompt("Enter name of first subject1:");
var subject2 = prompt("Enter name of second subject2:");
var subject3 = prompt("Enter name of third subject3:");

const totalMarks = 100;

var marks1 = parseInt(prompt(`Enter obtained marks for sub1 ${subject1}:`));
var marks2 = parseInt(prompt(`Enter obtained marks for sub2 ${subject2}:`));
var marks3 = parseInt(prompt(`Enter obtained marks for sub3 ${subject3}:`));

var total = marks1 + marks2 + marks3;
var percentage = (total / (totalMarks * 3)) * 100;

document.write(`
  <table>
    <tr>
      <th>Subject</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
    </tr>
    <tr>
      <td>${subject1}</td>
      <td>${totalMarks}</td>
      <td>${marks1}</td>
    </tr>
    <tr>
      <td>${subject2}</td>
      <td>${totalMarks}</td>
      <td>${marks2}</td>
    </tr>
    <tr>
      <td>${subject3}</td>
      <td>${totalMarks}</td>
      <td>${marks3}</td>
    </tr>
    <tr>
      <td>Total</td>
      <td>${totalMarks * 3}</td>
      <td>${total}</td>
    </tr>
    <tr>
      <td>Percentage</td>
      <td></td>
      <td>${percentage.toFixed(2)}%</td>
    </tr>
  </table>
`);

var s = prompt("What is City name?")
if(s=="Karachi"){
  alert("Welcome to the city of light")
}
else{
  alert("Welcome")
}
const gender = prompt("Please enter your gender (male/female):");

if (gender === "male") {
  alert("Good Morning Sir.");
} else if (gender === "female") {
  alert("Good Morning Ma'am.");
} else {
  alert("Invalid input. Please enter 'male' or 'female'.");
}


const color = prompt("Please enter the color of the traffic signal (red/yellow/green):");

switch (color) {
  case "red":
    alert("Must stop");
    break;
  case "yellow":
    alert("Ready to move");
    break;
  case "green":
    alert("Move now");
    break;
  default:
    alert("Invalid input. Please enter 'red', 'yellow' or 'green'.");
}

const fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in litres):"));

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel");
}

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

var subject_1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
var subject_2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
var subject_3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
var totalMarks_ = parseFloat(prompt("Enter total marks:"));

var obtainedMarks = subject_1 + subject_2 + subject_3;
var percentage_ = (obtainedMarks / totalMarks) * 100;

var grade;

if (percentage_ >= 80) {
  grade = "A-one";
} else if (percentage_ >= 70) {
  grade = "A";
} else if (percentage_ >= 60) {
  grade = "B";
} else if (percentage_ >= 50) {
  grade = "C";
} else if (percentage_ >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);


var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation!");
}

document.write(num1 + " " + operation + " " + num2 + " = " + result);



var input = prompt("Enter a character:");
var ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  alert("The input is a number");
} else if (ascii >= 65 && ascii <= 90) {
  alert("The input is an uppercase varter");
} else if (ascii >= 97 && ascii <= 122) {
  alert("The input is a lowercase varter");
} else {
  alert("The input is not a number or varter");
}

var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
  alert(num1 + " is the larger number.");
} else if (num2 > num1) {
  alert(num2 + " is the larger number.");
} else {
  alert("Both numbers are equal.");
}

var num0 = parseInt(prompt("Enter a number:"));

if (num0 > 0) {
  alert(num0 + " is a positive number.");
} else if (num0 < 0) {
  alert(num0 + " is a negative number.");
} else {
  alert("The number is zero.");
}

var char = prompt("Enter a character:").toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  alert("The character is a vowel.");
} else {
  alert("The character is not a vowel.");
}

var pass = "!@#$%^&*()"
var pword= prompt("Enter your Password")
var password = prompt("Enter your password:");

if (pword === "" || pword === null) {
  alert("Please enter your password.");
} 
else if (pword==pass){
 alert("Enter correct passwword")
}
else{
  alert("Enter incorrect passwword")
 }


 var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}

var studentNames1 = [];
var studentNames1 = new Array();
var fruits1 = ["apple", "banana", "cherry"];
var numbers1 = [1, 2, 3, 4, 5];
// var flags1 = [true, false, true];
// var mixed1= ["apple", 2, true, "orange", 3, false];
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
document.write("<ol>");
for(var i = 0; i < educationQualifications.length; i++){
  document.write("<li>)  " + educationQualifications[i] + "</li>")
}
document.write("</ol>");

let colors = ["red", "green", "blue"];
document.write("<h3>Original Colors Array:</h3>");
document.write("<p>" + colors + "</p>");
let colorToAddToBeginning = prompt("Enter color to add to the beginning:");
colors.unshift(colorToAddToBeginning);
document.write("<h3>Array After Adding Color to Beginning:</h3>");
document.write("<p>" + colors + "</p>");
let colorToAddToEnd = prompt("Enter color to add to the end:");
colors.push(colorToAddToEnd);
document.write("<h3>Array After Adding Color to End:</h3>");
document.write("<p>" + colors + "</p>");
colors.unshift("yellow", "orange");
document.write("<h3>Array After Adding Two Colors to Beginning:</h3>");
document.write("<p>" + colors + "</p>");
colors.shift();
document.write("<h3>Array After Deleting First Color:</h3>");
document.write("<p>" + colors + "</p>");
colors.pop();
document.write("<h3>Array After Deleting Last Color:</h3>");
document.write("<p>" + colors + "</p>");
let indexToAddColor = prompt("Enter index to add color:");
let colorToAddAtIndex = prompt("Enter color to add at index " + indexToAddColor + ":");
colors.splice(indexToAddColor, 0, colorToAddAtIndex);
document.write("<h3>Array After Adding Color at Index " + indexToAddColor + ":</h3>");
document.write("<p>" + colors + "</p>");
let indexToDeleteColor = prompt("Enter index to delete color(s) from:");
let numberOfColorsToDelete = prompt("Enter number of colors to delete from index " + indexToDeleteColor + ":");
colors.splice(indexToDeleteColor, numberOfColorsToDelete);
document.write("<h3>Array After Deleting " + numberOfColorsToDelete + " Color(s) From Index " + indexToDeleteColor + ":</h3>");
document.write("<p>" + colors + "</p>");


let studentScores = [80, 70, 90, 85, 60];
studentScores.sort(function(a, b) {
  return a - b;
});
console.log(studentScores);


let cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Multan"];
let selectedCities = [];
selectedCities = cities.slice(1, 4);
console.log(selectedCities);

let arr = ["This", "is", "my", "cat"];
let string = arr.join(" ");
console.log(string); 

let myArray = [];
myArray.push("apple");
myArray.push("banana");
myArray.push("orange");
let firstElement = myArray.shift();
console.log("First Element:", firstElement); 
console.log("Updated Array:", myArray); 

let stack = []; 
stack.push("apple");
stack.push("banana");
stack.push("cherry");
console.log(stack.pop()); 
console.log(stack.pop());
console.log(stack.pop());

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let tableNumber = parseInt(prompt("Enter the number whose multiplication table you want to print:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table you want to print:"));

for (let i = 1; i <= tableLength; i++) {
  let product = tableNumber * i;
  console.log(tableNumber + " x " + i + " = " + product);
}
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Counting: 1 to 15
let countingOutput = "Counting: ";
for (let i = 1; i <= 15; i++) {
  countingOutput += i + ", ";
}
console.log(countingOutput.slice(0, -2));

// Reverse counting: 10 to 1
let reverseOutput = "Reverse counting: ";
for (let i = 10; i >= 1; i--) {
  reverseOutput += i + ", ";
}
console.log(reverseOutput.slice(0, -2));

// Even: 0 to 20 (even numbers only)
let evenOutput = "Even: ";
for (let i = 0; i <= 20; i += 2) {
  evenOutput += i + ", ";
}
console.log(evenOutput.slice(0, -2));

// Odd: 1 to 19 (odd numbers only)
let oddOutput = "Odd: ";
for (let i = 1; i <= 19; i += 2) {
  oddOutput += i + ", ";
}
console.log(oddOutput.slice(0, -2));

// Series: 2k to 20k (even numbers only)
let seriesOutput = "Series: ";
for (let i = 2; i <= 20; i += 2) {
  seriesOutput += i + "k, ";
}
console.log(seriesOutput.slice(0, -2));

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter the item you want to search for:");

let isFound = false;
for (let i = 0; i < A.length; i++) {
  if (userInput === A[i]) {
    isFound = true;
    break;
  }
}

if (isFound) {
  console.log(userInput + " is found in the list.");
} else {
  console.log(userInput + " is not found in the list.");
}

let H = [24, 53, 78, 91, 12];
let largest = H[0];

for (let i = 1; i < H.length; i++) {
  if (H[i] > largest) {
    largest = H[i];
  }
}

console.log("The largest number in the array is: " + largest);



let p = [24, 53, 78, 91, 12];
let smallest = p[0];

for (let i = 1; i < p.length; i++) {
  if (p[i] < smallest) {
    smallest = p[i];
  }
}

console.log("The smallest number in the array is: " + smallest);


for (let i = 1; i <= 20; i++) {
  let multiple = 5 * i;
  console.log(multiple);
}



