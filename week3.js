// <!-- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). -->
// <!-- Enter base: 20
// Enter height: 10
// The area of the triangle is 100 -->

var base =  prompt();
var height = prompt();

var area =(0.5 * base * height);
console.log(area)

// Write a script that prompt
// the user to enter side a,
// side b, and side c of the
// triangle and and calculate
// the perimeter of triangle (perimeter = a + b + c)

// you have to comment the above one for this to work
var sideA= prompt();
var sideB = prompt();
var sideC = prompt();

var perimeter =(int(sideA) + int(sideB) + int(sideC) );
// // i dont know  y it is not adding the figure together
console.log(perimeter)


// Get length and width using prompt and calculate
// an area of rectangle (area = length x width and
// the perimeter of rectangle (perimeter = 2 x (length + width))

var length = prompt();
var width = prompt();

var perRectangle = (2 * length + width)
console.log(perRectangle)

// Get radius using prompt and calculate
// the area of a circle (area = pi x r x r) 
// and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
var pi= 3.14
var radius =prompt();

var circumference = (2*pi*radius)
console.log(circumference)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
var x = prompt();
var y = 2*x - 2;
console.log(y);


// // 
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
var y2 = 2;
var y1 = 2;
var x2 = 6;
var x1 = 10;
var m = (y2-y1)/(x2 -x1);
console.log(m);


// Compare the slope of above two questions.
var j = y == m;
console.log(j)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

var xone =  prompt();
var yone = int(xone2) + int(6(xone)) + 9;
console.log(yone)

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

var hour = prompt()
var ratePer = prompt()
var weeklyEarning = (hour * ratePer)
console.log(weeklyEarning)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
var name = "Emmanuel"=="7";
// var rename = 
console.log( name == "7")
// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

var firstName = 'Asabeneh';
var lastName = 'Yetayeh';

console.log(`your name ${firstName} is longber than your family name ${lastName}`);


// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

var myAge = 250;
var yourAge = 25;
var newAge = myAge - yourAge;
console.log(`I am ${newAge} older than you` );


// Using prompt get the year the user was born and 
// if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

var user = prompt();
user < 18
 ? console.log("you will be allowed to drive when you are 18")
 : console.log("you are old enough to drive")


//  Write a script that prompt the user to enter number of years. 
// Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
var sec = prompt(); 
var naw = new Date();
console.log(naw.getSeconds() * sec);


// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)  



// Create a human readable time format using the Date time object.
// The hour and the minute should be all the time two digits(7 hours
// should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

console.log(`${year}-0 ${month}- 0 ${date} 0 ${hours}: 0 ${minutes}`)

