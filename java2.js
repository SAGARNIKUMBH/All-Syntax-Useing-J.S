// let firstName = "sagar";

// let country = "india";
// let countries = "48";
// let population = "4,436,224.000";
// console.log(country, countries, population);

// let javascript1 = true;
// let javascript2 = 23;
// let javascript3 = "true";
// console.log(javascript1, javascript2, javascript3);
// console.log(typeof javascript1);
// console.log(typeof javascript2);
// console.log(typeof javascript3);

// let x = 10 + 5;
// x /= 10;
// console.log(x);

// opertor precedance

// const now = 2022;
// const ageSagar = now - 1991;
// const ageKanchan = now - 1997;
// console.log("sagar age is", ageSagar + " " + "kanchan age is", ageKanchan);
// console.log("sagar is big or not", now - 1991 > now - 1997);

// ----------------------------------------------------------------------------------------------

// puzzle calculate sagar&kanchan weights for BMI
// sagar weights=70 kg and 5.8 m tall
// kanchan weights=58 kg and 5.1 mtall
// How to calculate the BMI ..???

// const massSagar = 70;
// const heightSagar = 5.8;
// const massKanchan = 58;
// const heightsKanchan = 5.1;

// const BMISagar = massSagar / heightSagar ** 2;
// const BMIKanchan = massKanchan / (heightsKanchan * heightsKanchan);
// const HeigherBMI = BMISagar > BMIKanchan;

// console.log(BMISagar, BMIKanchan, HeigherBMI);

// ----------------------------------------------------------------------------------------------

// if-else statements e.g

// const age = 16;

// if (age >= 18) {
//   console.log("This Person eligible foe driving license");
// } else {
//   const Yearsleft = 18 - age;
//   console.log(
//     `Person is not eligible for driving license.Wait another ${Yearsleft} Year :)`
//   );
// }

// ----------------------------------------------------------------------------------------------------

// let n = "2" + 1;
// n = n - 1;
// console.log(n);

// var str = "Hello World";

// for (var i = 0; i < str.length; i++) console.log(str[i]);

// for (var ch of str) console.log(ch);

// ------------------------------------------------------------------------------------------------------------

// '==' operator
// console.log(21 == 21);
// console.log(21 == "21");
// console.log("food is love" == "food is love");
// console.log(true == 1);
// console.log(false == 0);
// console.log(null == undefined);

// "1" == 1; // true
// 1 == "1"; // true
// 0 == false; // true
// 0 == null; // false
// 0 == undefined; // false
// 0 == !!null; // true, look at Logical NOT operator
// 0 == !!undefined; // true, look at Logical NOT operator
// null == undefined; // true

// const number1 = 3;
// const number2 = "3";
// // number1 == 3; // true
// number1 == number2; // true

// console.log(number1 == number2);
// console.log(number1.valueOf(), number2.v);
// ----------------------------------------------------------------------------------------------------------------

// function printcurrentpage() {
//   window.print;
// }
// console.log(print);

// ------------------------------------------------------------------------------------------------------------------

// const day = "saterday";

// switch (day) {
//   case "monday":
//     console.log("Busy day for coder");
//     break;
//   case "tuesday":
//     console.log("middle day for coder");
//     break;
//   case "wednesday":
//     console.log("middle day for coder 2 or all");
//     break;
//   case "thursday":
//     console.log("code checking day");
//     break;
//   case "friday":
//     console.log("submit code day");
//     break;
//   case "saterday":
//   case "sunday":
//     console.log("holiday for IT companies");
//   default:
//     break;
// }

// ----------------------------------------------------------------------------------------------------

// conditional operator

// var age = 31;
// var beverage = age >= 21 ? "wine" : "water";
// console.log(beverage);

// let Drink;
// if (age >= 21) {
//   Drink = "wine";
// } else {
//   Drink = "water";
// }
// console.log(`I like to drink ${age >= 21 ? "wine" : "water"}`);

// -----------------------------------------------------------------------------------------------------------

// const bill = 600;
// const tip = bill <= 100 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `Your Bill value is ${bill},the tip value is ${tip},and total value is pay to hotel = ${
//     bill + tip
//   } `
// );

// ---------------------------------------------------------------------------------------------------------------

// Funcation :-

// function logger() {
//   console.log("Hello Everyone Good Morning");
// }
// logger();
// logger();

// e.g=2

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples}apples and ${oranges}oranges.`;

//   return juice;
// }
// const applejuice = fruitProcessor(2, 4);
// console.log(applejuice);

// e.g=3 // funcation Declaration

// birthdayDate = 1991;
// function calculateAge(birthdayDate) {
//   const Age = 2022 - birthdayDate;

//   return Age;
// }
// console.log(calculateAge(birthdayDate));

// e.g=4

// function calculateAge1(birthdayDate) {
//   return 2022 - birthdayDate;
// }
// const Age1 = calculateAge1(1991); // direct value pass the parameter
// console.log(Age1);

// e.g=5 ,Funcation Expression example :-

// const calculateAge2 = function (birthdayDate) {
//   return 2023 - birthdayDate;
// };
// const Age2 = calculateAge2(1991);

// console.log(Age2);

// Use a Arrow Funcation e.g

// const RetirementYear = (birthYear, FirstName) => {
//   //use a arrow funcation
//   const Age = 2022 - birthYear;
//   const retirement = 60 - Age;
//   return `${FirstName} retires in ${retirement} year.`;
// };
// console.log(RetirementYear(1991, "sagar"));
// console.log(RetirementYear(1990, "Sonu"));

// // arrow funcation e.g=2

// function CutFruit(Fruit) {
//   return Fruit * 4;
// }
// function fruitProcessor(Apples, oranges) {
//   const applepieces = CutFruit(Apples);
//   const orangepieces = CutFruit(oranges);
//   const juice = `juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange.`;
//   return juice;
// // }
// // console.log(fruitProcessor(2, 3));

//  puzzle code solve

// const CalAvg = (a, b, c) => (a + b + c) / 3;
// // console.log(CalAvg(4, 5, 6));

// // test1

// const Sagar = CalAvg(1, 2, 3);
// const Gaurav = CalAvg(4, 5, 6);
// // console.log(Sagar, Gaurav);

// const CheckWin = function (avgSagar, avgGaurav) {
//   if (avgSagar >= 2 * avgGaurav) {
//     console.log(`Sagar Win (${avgSagar} vs.${avgGaurav})`);
//   } else if (avgSagar >= 2 * avgGaurav) {
//     console.log(`Gaurav Win (${avgGaurav} vs.${avgSagar})`);
//   } else {
//     console.log("No win both team");
//   }
// };
// // CheckWin(Sagar, Gaurav);
// CheckWin(20, 10);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrays

// const friends = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// console.log(friends);
// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);
// // console.log(friends[friends.length - 2]);
// // friends[2] = "Roshan";
// // console.log(friends);

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Basic Array Operation

// // 1. push Method :-

// const friends1 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends1.push("Kanchan");
// console.log(friends1);
// console.log(friends1.length);

// // 2. pop Method :-

// const friends2 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends2.pop();
// console.log(friends2);
// console.log(friends2.length);

// // 3. Shift Method :-

// const friends3 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends3.shift();
// console.log(friends3);
// console.log(friends3.length);

// // 4. Slice Methods :-

// const friends4 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends4.slice();
// console.log(friends4);
// console.log(friends4.length);

// // 5. Includes Methods :-

// const friends5 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends5.push("shri");
// console.log(friends5.includes("Abhi"));
// console.log(friends5.includes("Shri"));
// console.log(friends5);

// // console.log(friends5.length);

// // 6. Sort Method :-

// const friends6 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends6.sort();
// console.log(friends6);
// console.log(friends6.length);

// // 7. Flat Method :-

// let arrays = [0, [1, 3, 5], [2, 4, 6]];
// arrays = arrays.flat();
// console.log(arrays);

// // 8. Splice Method :-

// const friends8 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends8.splice(1, 1);
// console.log(friends8);

// // 9. Map Methods :-

// const friends9 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends9.map(function () {});
// arrays.map(function (value, index) {
//   console.log("value ", value);
//   console.log("index ", index);
// });
// console.log(friends9);

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Puzzle :-

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 500 ? bill * 0.15 : bill * 0.2;
// };

// const billAmt = [191, 41, 441];
// const tips = [calTip(billAmt[0]), calTip(billAmt[1]), calTip(billAmt[2])];
// const totals = [
//   billAmt[0] + tips[0],
//   billAmt[1] + tips[1],
//   billAmt[2] + tips[2],
// ];
// console.log(billAmt, tips, totals);

// -----------------------------------------------------------------------------------------------------------

// Array Object methods :-

// const PersonalInfo1 = {
//   firstName: "Sagar",
//   lastName: "Nikumbh",
//   job: "Front End Devloper",
//   friend: ["Gaurav", "Abhi", "Prasad", "Yogesh"],
// };
// console.log(PersonalInfo);

// -----------------------------------------------------------------------------------------------

// Object Methods :-

// const PersonalInfo2 = {
//   firstName: "Sagar",
//   lastName: "Nikumbh",
//   birthYear: 1991,
//   job: "Front End Devloper",
//   friend: ["Gaurav", "Abhi", "Prasad", "Yogesh"],
//   hasDriversLicense: true,

//   calAge: function (birthYear) {
//     return 2022 - birthYear;
//   },
// };
// console.log(PersonalInfo2.calAge(1991));
// console.log(PersonalInfo2.firstName);
// console.log(PersonalInfo2.friend[PersonalInfo2.friend.length - 1]);

// -------------------------------------------------------------------------------------------------------

// For Loop :-

// const PersonalInfo1 = [
//   "Sagar",
//   "Nikumbh",
//   "Front End Devloper",
//   ["Gaurav", "Abhi", "Prasad", "Yogesh"],
// ];
// for (let i = 0; i < 4; i++) {
//   console.log(PersonalInfo1[i]);
// }

// e.g=2

// const Year = [1991, 1997, 2000, 2020, 2022];
// const Age = [];
// for (let i = 0; i < 5; i++) {
//   Age.push(2041 - Year[i]);
// }
// console.log(Age);
// console.log(Year.length);

// // Use a continue in for loop :-

// for (let i = 0; i < PersonalInfo1.length; i++) {
//   if (typeof PersonalInfo1[i] !== "string") continue;

//   console.log(PersonalInfo1[i], typeof PersonalInfo1[i]);
// }

// const Year = [1991, 1997, 2000, 2020, 2022];
// for (let i = Year.length - 1; i >= 0; i--) {
//   if (Year[i] !== 2000) {
//     console.log(Year[i]);
//   } else {
//     console.log("No");
//   }
//   //   console.log(i, Year[i]);
// }

// -----------------------------------------------------------------------------------------------------

// While Loop :-

// let n = 0;
// while (n < 10) {
//   n++;
//   n += 1;
//   console.log(n);
// }

// e.g=2

// let random = [];
// let count = 0;
// let size = 10;
// while (count < size) {
//   random.push(Math.round(Math.random() + 10));
//   count++;
//   console.log(count);
// }
// console.log(random);

// e.g=3

// program to display numbers from 1 to 5

// let i = 0,
//   n = 5;

// while (i <= n) {
//   console.log(i);
//   i += 1;
// }

//---------------------------------------------------------------------------------------------------

// const input = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let row = [];
// let col = [];
// let sdf3 = 0;
// let rdigo = 0;
// for (let i = 0; i < input.length; i++) {
//   let sdf1 = 0;
//   let sdf2 = 0;
//   rdigo += input[i][input.length - i - 1];
//   for (let j = 0; j < input[i].length; j++) {
//     sdf1 += input[i][j];
//     sdf2 += input[j][i];
//     if (i === j) {
//       sdf3 += input[i][j];
//     }
//   }
//   row.push(sdf1);
//   col.push(sdf2);
// }

// console.log(row);
// console.log(col);
// console.log("daigonal ", sdf3);
// console.log(rdigo);

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

let n = 5;
let i = 1;
let j = 1;
for (i = 1; i < n; i++) {
  for (j = 1; j <= n - i; j++) {
    console.log(j + " ");
  }
  console.log(" ");
}
