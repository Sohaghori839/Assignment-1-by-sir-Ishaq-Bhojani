// let inputNumber = +prompt ("Enter Your Age");
// if (inputNumber <= 10) {
//     // document.write("Welcome in bacha party");
//     document.getElementById("welcome").innerHTML = "Welcome In Bacha Party.";
// }else{
//     // document.write("Sorry you can't join this party ")
//     document.getElementById("welcome1").innerHTML = " Sorry You Can't Join This Party.";
// }

//Print table of 5
// let n = 5;
// for (let i = 1; i <= 10; ++i){
//     console.log(n + " * " + i + " = " + n * i);
// }

// Task 1 check the greater number
let a,b;
a = prompt("Enter the first number.");
b = prompt("Enter the second number.");
if (a>=b) {
    console.log("first number is greater then second number");
} else {
    console.log("second number is greater then first number");
}

// Task 2 
// let number;
// number = +prompt("Enter the number here.");
// if (number >0 ) {
//     console.log( number + " is +");
// } else {
//     console.log( number + " is -");
// }

// Task 3
// let a,b,c,d,e;
// a = prompt("Enter the value 1");
// b = prompt("Enter the value 2");
// c = prompt("Enter the value 3");
// d = prompt("Enter the value 4");
// e = prompt("Enter the value 5");

// let x = Math.max(a,b,c,d,e);
// console.log(`${a},${b},${c},${d},${e}: Largest number is  = ${x}`);

// Task 4
// for (let i = 0;  i<= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even")
//     } else {
//         console.log (i + " is odd")
//     }
// }

// Task  5
// let studentMarks = prompt("Enter the student marks here...");

// if (studentMarks > 91 && studentMarks <= 100) {
//     document.write("Your grade is A");
// } else if  (studentMarks >= 81 && studentMarks <= 90) {
//     document.write("Your grade is B");
// }
// else if  (studentMarks >= 71 && studentMarks <= 80){
//     document.write("Your grade is c");
// }
// else if  (studentMarks >= 61 && studentMarks <= 70) {
//     document.write("Your grade is D");
// }
// else if  ( studentMarks >= 60 ) {
//     document.write("Your grade is f");
// }
// else  {
//     document.write("Focus on study ");
// }

// task 6
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 ===0) {
//         console.log("Fizz");
//     }
//      else if (i % 5 ===0) {
//         console.log("Buzz");
//     }
//     else if (i % 15 ===0) {
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// task 7

// var x,y,chr;
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }