// Puzzle No.0
// MAtrix value addition to all direction 3 * 3 solve it....??

// const input = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let add = 0;
// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < input[0].length; j++) {
//     if (i === j) {
//       add = add + input[i][j];
//     }
//   }
// }
// console.log(add);

// ------------------------------------------------------------------------------------------------

// Puzzle 1 :-
// *
// **
// ***
// ****
// *****
// let i = 0;
// let j = 0;
// let n = 5;
// let row = 0;
// for (i = 0; i < n; i++) {
//   for (j = n; j >= n - i; j--) {
//     console.log("*");
//   }
//   console.log("\n");
// }

// ----------------------------------------------------------------------------------------------------------

// puzzle2:-
//  *****
//  *****
//  *****
//  *****
//  *****

// let n = 5;
// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     console.log("*");
//   }
//   console.log("");
// }

// ------------------------------------------------------------------------------------------------------------

// Puzzle3 :-
// *****
// ****
// ***
// **
// *

// let n = 5;
// let i = 1;
// let j = 1;
// let row = 0;
// for (i = 1; i < n; i++) {
//   for (j = 1; j <= n - i + 1; j++) {
//     console.log("*");
//   }
//   console.log(" ");
// }

// ----------------------------------------------------------------------------------------------------

// puzzle 4
// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// let i = 1;
// let j = 1;
// for (i = 1; i < n; i++) {
//   for (j = 1; j <= i; j++) {
//     console.log(j + " ");
//   }
//   console.log(" ");
// }

// ---------------------------------------------------------------------------------------------------

// puzzle 5

12345;
1234;
123;
12;
1;

// let n = 5;
// let i = 1;
// let j = 1;
// for (i = 1; i < n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     console.log(j + " ");
//   }
//   console.log(" ");
// }

// --------------------------------------------------------------------------------------------------------------------

// puzzle 06

// *********
// *
// *
// *
// *********
//         *
//         *
//         *
// *********

// let i = 0;
// let j = 1;
// let n = 09;

// for (i = 0; i <= n; i++) {
//   for (j = 1; j <= n - i; j++) {
//     if (j <= n - i) {
//       console.log("*");
//     } else {
//       console.log(" ");
//     }
//   }
//   console.log(" ");
// }

// ------------------------------------------------------------------------------------------------

// Puzzle No.07

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let i = 0;
// let j = 0;
// let n = 5;
// for (i = 1; i < n; i++) {
//   for (j = 0; j < i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }
// for (i = 1; i < n - 1; i++) {
//   for (j = 0; j < n - i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

// ----------------------------------------------------------------------------------------------------

// Puzzle No.08

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// let i = 1;
// let j = 0;
// let n = 5;
// for (i = 0; i <= n; i++) {
//   for (j = 0; j < n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let z = 0; z < i; z++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
// for (i = 1; i <= n - 1; i++) {
//   for (j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let z = 1; z <= n - i; z++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// -----------------------------------------------------------------------------------------------------

// Puzzle No.09

//     *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n - i; j++) {
//     process.stdout.write(" "); // console operation work use this statements.
//   }
//   for (let t = 0; t < 2 * i - 1; t++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// -------------------------------------------------------------------------------------------

// Puzzle No.10

// *********
//  *******
//   *****
//    ***
//     *

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let g = 0; g < 2 * (n - i) - 1; g++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// -------------------------------------------------------------------------------------------------------------

// Puzzle No. 11
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   for (j = n; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let g = 0; g < i * 2 - 1; g++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let t = (n - i) * 2 - 1; t > 0; t--) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// --------------------------------------------------------------------------------------------------------

// Puzzle No.12

// *********
// *******
// *****
// ***
// *
// ***
// *****
// *******
// *********

// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (j = n; j < i; j) {
//     process.stdout.write(" ");
//   }
//   for (g = 0; g < (n - i) * 2 - 1; g++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
// for (i = 2; i <= n; i++) {
//   for (j = 0; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (t = 0; t < i * 2 - 1; t++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// ----------------------------------------------------------------------------------------------------

// Puzzle No.13

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (g = 0; g < (n - i) * 2 - 1; g++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }
// for (i = 2; i <= n; i++) {
//   for (j = n; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (t = 0; t < i * 2 - 1; t++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// -----------------------------------------------------------------------------------------------------------

// Puzzle No.14

// Q.find the highest two digit sum from array [5,8,1,2,4,6]
// ans = 8+6=14

// let sum = 0;
// const array = [5, 8, 1, 2, 4, 6]; // length=6
// for (let i = 0; i <= array.length - 2; i++) {
//   for (let j = i + 1; j <= array.length - 1; j++) {
//     if (array[i] + array[j] > sum) {
//       sum = array[i] + array[j];
//       console.log(array[i] + array[j]);
//     }
//   }
// }
// console.log(sum);

// --------------------------------------------------------------------------------------------------

// Puzzle No.15

// Q.find the Smallest two digit sum from array [5,8,1,2,4,6]
// ans = 8+6=14

// let min = 0;
// let max = 0;
// const array = [5, 8, 1, 2, 4, 6]; // length=6
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] >= max) {
//     min = max;
//     max = array[i];
//   } else if (array[i] >= min && array[i] <= max) {
//     min = array[i];
//   }
// }
// console.log(min - max);

// --------------------------------------------------------------------------------------------

// Puzzle No.16

// Q.find the smallest single number from array[5,8,1,2,4,6]

// const array = [5, 8, 1, 2, 4, 6]; // length=6
// let min = array[0];
// for (let i = 0; i < array.length - 1; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }

// console.log(min);

// --------------------------------------------------------------------------------------------------------

// Puzzle No.17

//  Q.find the Smallest two digit sum from array [5,8,1,2,4,6]
//   ans = 8+6=14

// const array = [5, 8, 1, 2, 4, 6];
// let max = 0;
// let min = 0;
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] >= max) {
//     min = max;
//     max = array[i];
//   } else if (array[i] >= min && array[i] <= max) {
//     min = array[i];
//   }
// }
// sum = min + max;
// console.log(sum);

// ----------------------------------------------------------------------------------------------------

// Puzzle No.18

// Q.Print the Fibonacci number for e.g :- 1 1 2 3 5 8 13 21

// let a = 0;
// let b = 1;
// for (i = 0; i < 10; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// -----------------------------------------------------------------------------------------------------

// Puzzle No.19

// Q.Print all numbers between 1 to N without using any loop

// let n = 10;
// let i = 0;

// function count() {
//   console.log(i);
//   i++;
//   if (i <= n) {
//     count();
//   }
//   return;
// }
// count();

// ---------------------------------------------------------------------------------------------------------

// // Puzzle No.20

// // Q. Print Factorial numbers

// let n = 6;
// let factorialNo = [];
// function factorial(n) {
//   if (n == 0 || n == 1) return 1;
//   if (factorialNo[n] > 0) return factorialNo[n];
//   return (factorialNo[n] = factorial(n - 1) * n);
// }
// console.log(factorial(n));

// ------------------------------------------------------------------------------------------------------

// Puzzle No.21

// Q.Print the Fibonacci number using recursion ??
// for e.g :- 1 1 2 3 5 8 13 21

// let fib = function (n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     let s = fib(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// console.log(fib(10));

// ----------------------------------------------------------------------------------------------------

// Puzzle No.22

// Q. Using a For Loop show the 1 to n number..??

// let count;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   count = i;
//   console.log(count);
// }

// ---------------------------------------------------------------------------------------------------------

// Puzzle No.23

// Q. Using a For Loop show the 2^1=2 upto 20 number..??

// let count;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   count = i * 2;
//   console.log(count);
// }

// ---------------------------------------------------------------------------------------------------------

// Puzzle No.24

// Q. smallest number find in array=[2,4,1,5,8,12] how to solve ...???

// let array = [2, 4, 1, 5, 8, 12];
// let minNo = array[0];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < minNo) {
//     minNo = array[i];
//   }
// }
// console.log(minNo);
// -------------------------------------------------------------------------------------------------------------------------

// Puzzle No.25

// Q. Armstrong number is a number that is equal to the sum of cubes of its digits.
// For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.
// eg 153 is armstrong because (1)^3 + 5^3 + 3^3 = 1+125+27 = 153
// Find all Armstrong number in 0-500..???

// function armNo(n) {
//   let sum = 0;
//   let number = n;
//   while (number > 0) {
//     const digits = number % 10;
//     sum = sum + digits * digits * digits;
//     number = parseInt(number / 10);
//   }
//   return n === sum;
// }
// for (let i = 0; i <= 500; i++) {
//   if (armNo(i)) {
//     console.log(i);
//   }
// }

// ------------------------------------------------------------------------------------------------

// Puzzle No. 26

// Q.This solve following puzzle
// Calculate sum of given number digits
// 153 = 1+5+3 = 9

// function cal(n) {
//   let sum = 0;
//   while (n != 0) {
//     sum = sum + (n % 10);
//     n = parseInt(n / 10);
//   }
//   return sum;
// }
// console.log(cal(153));

// --------------------------------------------------------------------------------------------------

// Puzzle No.27

// Q. Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i++) {
//   if (i === 0) {
//     console.log(i + " " + "is even ");
//   } else if (i % 2 === 0) {
//     console.log(i + " " + "is even");
//   } else {
//     console.log(i + " " + "is old");
//   }
// }

// ---------------------------------------------------------------------------------------------------------

// Puzzle No.28

// Q. Write a JavaScript function that reverse a number.
//  Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

// function reverse1(n) {
//   let numToString = "" + n;
//   let r = "";
//   for (let i = numToString.length - 1; i >= 0; i--) {
//     r += numToString.charAt(i);
//   }
//   return r;
// }
// console.log(reverse1(32243));

// -----------------------------------------------------------------------------------------------------

// Puzzle No.29

// Q. Write a JavaScript function that reverse a Name.
//  Sample Data and output:
// Example name = nitin;
// Expected Output: nitin

// function reverseName(n) {
//   let str = "";
//   for (let i = n.length - 1; i >= 0; i--) {
//     str += n.charAt(i);
//   }
//   return str;
// }
// console.log(reverseName("nitin"));

// --------------------------------------------------------------------------------------------------

// Puzzle No.30

// Q. Write a JavaScript function that returns a passed string with letters
//    in alphabetical order.
//    Example string: 'webmaster'
//    Expected Output: 'abeemrstw'

// function ascending_Order() {
//   let str = "webmaster";

//   return str.split("").sort().join("");
// }
// console.log(ascending_Order("str"));

// --------------------------------------------------------------------------------------------------

// Puzzle No.31

// Q. Write a JavaScript function that accepts a string as a parameter,
//    and converts the first letter of each word of the string in upper-case.??
//    Example string: 'the quick brown fox'
//    Expected Output: 'The Quick Brown Fox '

// Ans:

// function uppercase(str) {
//   let array1 = str.split(" ");
//   let newarray1 = [];

//   for (var x = 0; x < array1.length; x++) {
//     newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//   }
//   return newarray1.join(" ");
// }
// console.log(uppercase("the quick brown fox"));

// ---------------------------------------------------------------------------------------------------------

// Puzzle No.32

// Q. A left rotation operation on an array of size shifts each of the array's elements
//    unit to the left.Given an integer,rotate the array that many steps left
//    and return the result.???

//  solution:-  Input  d =2    // rotate array 2 times on left
//              arr = [1,2,3,4,5]
//           output = [3,4,5,1,2]

// Ans.

// const array = [1, 2, 3, 4, 5];
// const d = 2;
// function leftRotation(array, d) {
//   const range = array.length;
//   const key = d % range;
//   const output = new Array(range);
//   for (let i = 0; i < array.length; i++) {
//     const shiftDiff = i + range - key;
//     const shiftIndex = shiftDiff % range;
//     output[shiftIndex] = array[i];
//   }
//   return output;
// }
// console.log(leftRotation(array, d));

// --------------------------------------------------------------------------------------------------------------------

// Puzzle No.33

// Q. print 1 to 1000 numbers and
//    find the old number & Even number & 1 to 1000 sum
//    and count old no with last 1 & even number with last 2.???

// let oddCount = 0;
// let evenCount = 0;
// let totalSum = 0;
// let oddSum = 0;
// let evenSum = 0;
// let oddNOwith1 = 0;
// let evenNumWith2 = 0;
// for (let i = 0; i <= 1000; i++) {
//   totalSum += i;
//   if (i === 0) {
//   } else if (i % 2 === 0) {
//     evenCount++;
//     evenSum += i;
//     if (i % 10 === 2) {
//       evenNumWith2 += i;
//     }
//   } else if (i % 2 === 1) {
//     oddCount++;
//     oddSum += i;
//     if (i % 10 === 1) {
//       oddNOwith1 += i;
//     }
//   }
// }

// console.log("Count Even Number is " + evenCount);
// console.log("Count Old Number is " + oddCount);
// console.log("1 to 1000 total Sum is " + " = " + totalSum);
// console.log("1 to 1000 Old Number Sum is " + " = " + oddSum);
// console.log("1 to 1000 Even Number Sum is " + " = " + evenSum);
// console.log("1 to 1000 odd  Number with 1 count is " + " = " + oddNOwith1);
// console.log("1 to 1000 Even  Number with 2 count is " + " = " + evenNumWith2);

// ----------------------------------------------------------------------------------------------------------------

// Puzzle No.34

// Q. There are two arrays with individual values,
//    write a JavaScript program to compute the sum of each individual index value
//    from the given arrays.??

// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]

// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];
// let add = Math.max(array1.length, array2.length);
// let result = Array(add);
// for (let i = 0; i < add; i++) {
//   result[i] = (array1[i] || 0) + (array2[i] || 0);
// }
// console.log(result);

// --------------------------------------------------------------------------------------------------------

// Puzzle No.35

// Q. Given an array of forecasted maximum temperature,
//    the thrmometer displays a string with these temperatures..??
//    e.g => [17,21,23] will print .. 17°C in 1 day.21°C in 2 days..23°C in days.
//    Create a function 'printforecast' which takes in an array 'arr'and logs a string
//    like the above to the console.

//  Test data 1 : [17,21,23]
//  Test data 2 : [12,5,-5,0,4]

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printforecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${i + 1}days... `;
//   }
//   console.log("..." + str);
// };
// printforecast(data1);
