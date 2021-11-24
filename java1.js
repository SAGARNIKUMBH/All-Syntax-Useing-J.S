// console.log('hello console');
// console.log(4+35);
// console.log('true');
// console.log([41,1,10,9]);
// console.table({sagar:'this',marks:61});
// console.error('this time is errors');
// console.assert(500<180,'age>180 is not possiable')
// var name = 'sagar';
// var marks = 34;
// console.log(name);
// console.log(name,marks);
// const fruit = 'orange';
// console.log( fruit);
// {
//     let city = 'satana';
//     city = "satana";
//     console.log( city );
// }
// const arr1 = [11,23,14,56,4];
// arr1.push(41);
// console.log(arr1);
// document.getElementById

// primetive data types
// String
//  {
//      let name = 'sagar';
// console.log( "my sting is " + name);
// console.log( "Data type is " + (typeof name));
// }

// {
//     let marks = 61;
//     console.log( "Data type is " + (typeof marks));

// }

// {
//     let isdriver  = true;
//     console.log( "Data type is " + (typeof isdriver));

// }

// {
//     let nullvar = null;
//     console.log( "Data type is " + (typeof nullvar));

// }

// {
//     var undefined = undefined;
//     console.log( "Data type is " + (typeof undefined));

// }

// {
//     let myarr = [1,2,3];
//     console.log( "Data type is " + (typeof myarr));
//     console.log(Array.isArray(myarr));

// }

// let smark ={
// sonu:80,
// kanchan:99,
// poja:91
// }
// console.log("data type is" + (typeof smark));

// let myvar;
// myvar = String(34);
// console.log(myvar,(typeof myvar));

// let date = String(new Date());
// console.log(date,(typeof date));

// let arr = String([1,2,3,4,5]);
// console.log(arr.length,(typeof arr));

// let number =parseFloat (34.328);
// console.log(number.toFixed(6),(typeof number));

// let mystr = ("689");
// let mynum = 34;
// console.log(mystr + mynum);

// const name = 'sagar';
// const greeting = 'Good Morning';
// console.log(greeting + ' ' + name );

// let html = "";
// html = html.concat('sagar ','kanchan');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toLocaleUpperCase());
// console.log(html[0]);
// console.log(html.indexOf('kanchan'));
// console.log(html.lastIndexOf('kanchan'));
// console.log(html.localeCompare('sagar'));
// console.log(html.charAt(6));
// console.log(html.endsWith('kanchan'));
// console.log(html.substring(0,5));
// console.log(html.split(''));
// console.log(html.replace('sagar', 'sonu'));

// let fruit1 = 'orange';
// let fruit2 = 'apple';
// let myhtml = `Hello ${name}
// <h1> welcome to homepage </h1>
// <p> You like ${fruit1} and ${fruit2}`;

// document.body.innerHTML = myhtml;

// // arrays & object

// const marks = [61,51,81,91,85,71,41];
// const fruit = ['orange', 'apple','pineapple'];
// const mixted = ['str', 11,[2,5]];
// const sag =new Array(21,124,81,'apple');
// console.log(sag);
// console.log(marks);
// console.log(fruit);
// console.log(sag.length);
// console.log(marks.length);
// console.log(marks.sort());
// console.log(Array.isArray('mixted'));
// sag[0] = 'sagar';
// console.log(sag);
// marks.push(4141);
// console.log(marks);
// marks.unshift(41);
// marks.pop();
// marks.shift();
// marks.reverse();
// marks.splice(1,2);
// console.log(marks)
// console.log(fruit.slice(1));
// let myobj = {
//     name :'sagar',
//     channel:'hello world',
//     isactive:true,
//     marks:[41,51,61,71,81,91]
// }
// console.log(myobj);

// // if else satatment

// const age = 29;
// if (age==18)
//     {
//         console.log('Age is 19');
//     }
//     else if(age==65){
//         console.log('Age is 65');
//     }
//     else
//     {
//         console.log('Age is not 19');
//     }

//     const doesdrive = true;
//     if (doesdrive && age>18)
//     {
//         console.log("you can derive");
//     }
//     else
//     {
//         console.log("you can not drive");
//     }

//     console.log(age==45?'Age is 45': 'Age is not 45');

//     switch (age)
//     {
//         case 18:
//             console.log("you are 18");
//             break;
//         case 30:
//             console.log("you are 30");
//             break;
//         case 41:
//             console.log("you are 41");
//             break;
//         default:
//             console.log("you are unknown age");
//             break;
//     }
// // useing loop

// // for (let i=0; i<100; i++)
// // {
//     // console.log(i);
// // }

// let j = 0;
// while(j<10)
// {
//     console.log(j);
//     j+=1;
// }

// let k = 0;
// do{
//     if(k===5){
// break;
//     }
// console.log(k + 1);
// k+=1;
// }
// while( k < 10);
// console.log('Done');

// let obj = {
//     name:"sagar nikumbh",
//     age:30,
//     type: "fornt end coder",
//     os:"computer engg."
// }
// for (let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }
// console.log('done');

// function n object :-

// let name = 'sagar';
// let name2 = 'sonu';
// function greet (name){
//     console.log(`Happy Brithday ${name} Happy birthday! You are my happiness. Your memories bring a smile to my face.  Have a wonderful day. ${name2}`);
//     return;
// }
// greet(name);

// const myobj ={
//     name:"gaurav",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// const car = {type:"fiat",model:"sx",color:"white"};
// console.log( car.model );
// console.log( car.type );
// console.log( car.color );

// const person = {firstName:"SAGAR ", lastName:"NIKUMBH ", age:30, eyeColor:" BRAOUN"};
// console.log("this person name is " + person.firstName + person.lastName + person.age + person.eyeColor);

// arr = ['fruit','vegetable','furniture'];

// arr.forEach(function(element,index,Array) {
//     console.log(element,index);
// });

// let i = 234;
// console.log(i);
// function ui (name)
// {
//     console.log(i);
//     return `this is a ${name} ui`;
// }
// console.log(ui("sagar"), i);

// // manipulating websites using js.

// let a = window;
// alert('Hello Sagar')

// a = prompt('this will destoery your computer');

// a= confirm('Are you sure you want to delete this page?');

// a = window.innerHeight;
// a = window.innerWidth;
// a = location;
// a= window.history;
// console.log(a);

// let element = document.getElementById('myfirst');
// // element = element.className
// // element = element.childNodes;
// element.style.color = 'red';
// element.innerHTML = '<b>sagar is lucy boy';
// // console.log(element.innerHTML);

// let sel = document.querySelector('myfirst');
// sel = document.querySelector('.child');
// console.log(sel);

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// console.log(cont.childNodes);

// let element = document.createElement('li')
// element.className = 'no';
// element.setAttribute('title','mytitle');
// console.log(element)

// document.getElementById('heading').addEventListener('scroll',function(e){
//     console.log('you have clicked the heading');
//     // variable = e.target;
//     // variable = e.target.classname;
//     // variable = e.offsetX;
//     // variable = e.offsetY;
//     variable = e.scroll;
//     // variable = e.target.id;
//     console.log(variable);
// });

// document.querySelector('.container').addEventListener('mousemove',function(e){
//     document.body.style.backgroundColor=`rgb(${e.offsetX} , ${e.offsetY}, ${e.offsetX},200)`;
//     console.log('you triggered mouse move event')
// })

// localStorage.setItem('name','sagar')

// let name = localStorage.getItem('name');
// // console.log(name);

// let impArray = ['adark','pyaz','bhindi'];
// localStorage.setItem('sabzi',JSON.stringify(impArray));
// let name1 =JSON.parse(localStorage.getItem('sabzi'));
// console.log(name1);

// sessionStorage.setItem('sessionName', 'sagar');
// sessionStorage.setItem('sessionName2', 'Rohan');
// sessionStorage.setItem('sessionName3',JSON.stringify(impArray));

// let x = 10;
// let y = 31;
// let z;
// z = x+y;
// z = x-y;
// z = x*y;
// z = x/y;
// z = Math;
// z= Math.round(5.2);
// z = Math.ceil(5.6);
// z = Math.floor(5.6);
// z = Math.abs(40.2);
// z = Math.sqrt(49);
// z = Math.pow(2,3);
// z = Math.min(1,2,3,-1);
// z = Math.max(2,5,9,41);
// console.log(z);

// let today = new Date();
// console.log(today);

// let otherdate = new Date('july 2 1991');
// console.log(otherdate);

// let a;
// a = today.getDate();
// a = today.getFullYear();
// a = today.getHours();
// a = today.getMinutes();
// a = today.getUTCDate();
// console.log(a);
// otherdate.setDate(23);
// otherdate.setMonth(6);
// otherdate.setFullYear(2020);
// otherdate.setMinutes(41);
// otherdate.setHours(10);
// otherdate.setSeconds(26);
// console.log(otherdate);

// let car = {
//     name:'Verna',
//     topspeed :220,
//     run:function(){
//         console.log("car is runing");
//     }

// }

// function generalcar(name,topspeed){
//         this.name = name;
//         this.topspeed = topspeed;
//         this.run = function(){
//             console.log(`${this.name} is runing`);

//         }
//         this.analyze = function(){
//             console.log(`This car is slower by ${    - this.topspeed} Km/H than Mercedes`);
//         }
// }
// car1 =new generalcar('Verna',240);
// car2 = new generalcar('XUV700',280);
// console.log(car1,car2,car);

// const proto = {
//     slogan:function(){
//         return`This company is the best`;
//  },
//  changeName:function(newName){
//      this.name = sagar.name
//  }
// }

// const sagar = Object.create(proto);
// sagar.name = "sagar";
// sagar.role = "front-end devloper";
// sagar.changeName("sonu")
// console.log(sagar);

// console.log("hello world");
//alert("Hello World");

//below 10

// var sum = 0;
// for(let i=0;i<1000;i++){
//     if(i%3 === 0 || i %5=== 0){
//         sum += i;
//     }

// }

// console.log("SUm: ",sum)

// var first = 1;
// var second = 2;
// var cntr = 2;
// var totalEvenFib = 2;

// console.log(first, second);
// while(cntr < 10){
//     sum = first + second;
//     //console.log(sum)
//     first = second;
//     second = sum;
//     cntr += 1;
//     if(sum % 2 === 0){
//         totalEvenFib += sum
//     }
// }

// console.log(totalEvenFib);

// {

//      n=600851475143;

//     for( i=2;i<n; ++i)
//     {
//         while(n % i==0)
//         {
//             n = n/i;

//         }

//     }
//     console.log(n);
// }

// function set (number) {
//     for (let d = 1; d < 20; d++) {
//         if (number % d !== 0)
//         return false;
//     }
//     return true;
// }
// let number = 20
// do {
//     number+=20;
// } while (!set (number));

// console.log(number);

// class Employee {
//     constructor(name,experience,division){
//         this.name = "Roshan";
//         this.experience = 4;
//         this.division = "Div";
//     }
//     joiningYear(){
//         return 2020-this.experience;
//     }
// }
// Emp2 =new Employee("sonu",4.5,'no');
// console.log(Emp2,Emp2.joiningYear());

//Constructor function

// function Car(model, year, reg_no) {
//   //attributes
//   this.model = model;
//   this.year = year;
//   this.reg_no = reg_no;

//methods
//   this.how_old = function () {
//     console.log(
//       "This " + this.model + " is " + (2020 - this.year) + " years old."
//     );
//   };
// }

// let my_prius = new Car("Toyota", 2014, "TOY-2014");
// let my_chevy = new Car("Varna", 2012, "CHE-2012");

// console.log(my_prius);
// console.log(my_chevy);

// my_chevy.how_old();
// my_prius.how_old();

// Car.prototype.owner = "rahul";
// Car.prototype.who_owns = function () {
//   console.log(
//     this.owner +
//       " owns this " +
//       this.model +
//       " " +
//       this.year +
//       ", " +
//       this.reg_no +
//       "."
//   );
// };

// my_prius.who_owns();
// my_chevy.who_owns();

// promises Basics :-

// function func1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         console.log("function: Your promise has been resolved");
//         resolve();
//       } else {
//         console.log("function:Your promise has not been resolved");
//         reject("sorry not fulfilled");
//       }
//     }, 2000);
//   });
// }

// func1()
//   .then(function () {
//     console.log("sagar:Thank for resolving ");
//   })
//   .catch(function (error) {
//     console.log("sagar:very bad bro " + error);
//   });

// const sonu = () => {
//   return "Good Morning";
// };
// // console.log(sonu());

// let myFunction = (a, b) => a * b;
// console.log(myFunction(4, 5));

// async function kanchan() {
//   console.log("inside kanchan function");
//   const response = await fatch("https://api.github.com/users");
//   console.log("before.reponse");
//   const users = await response.json();
//   return "kanchan";
// }
// console.log("before calling kanchan");
// let variable = kanchan();
// console.log("after calling kanchan");
// console.log(variable);
// console.log("last line of the file");

// function getPrimes(max) {
//   let arr = new Array(max).fill();
//   for (let i = 2; i < max; i++) {
//     if (arr[i] === undefined) {
//       arr[i] = true;
//       for (let j = i + i; j < max; j += i) {
//         arr[j] = false;
//       }
//     }
//   }
//   return arr.map((item, i) => (item ? i : false)).filter(Boolean);
// }

// let primes = getPrimes(150000);
// console.log(primes[10000]);

// let name = prompt("What is your name?");
// "Hello, " + name + " ";
// alert("Hello, " + name + " ");
// console.log("Hello, " + name + " ");
//////////////////////////////////////////////////////////////////////////////////////
/*
function calculate(n) {
  let result = 0;
  for (let x = 1; x <= n; x++) result += largestsum(x);
  console.log(result, "result");
  return result;
}

function largestsum(x) {
  let sum = 0;

  while (x != 0) {
    sum += x % 10;
    x = parseInt(x / 10, 10);
  }

  return sum;
}

let n = 328;

document.write(calculate(n));
console.log("calculateTotal: ", calculate(n));*/

// var sum = 0;
// for (var x = 0; x < 17; x++) {
//   if (x % 3 === 0 || x % 5 === 0) {
//     sum += x;
//   }
// }
// console.log(sum);

// let today = new Date();
// let day = today.getDay();
// let daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday ",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log("Today is : " + daylist[day] + ".");
// let hour = today.getHours();
// let minute = today.getMinutes();
// let second = today.getSeconds();
// let Time = hour >= 12 ? " PM " : " AM ";
// hour = hour >= 12 ? hour - 12 : hour;
// if (hour === 0 && Time === " PM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     Time = " Noon";
//   } else {
//     hour = 12;
//     Time = " PM";
//   }
// }
// if (hour === 0 && Time === " AM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     Time = " Midnight";
//   } else {
//     hour = 12;
//     Time = " AM";
//   }
// }
// console.log("Current Time : " + hour + " : " + minute + " : " + second + Time);

// let side1 = 5;
// let side2 = 6;
// let side3 = 7;
// let s = (side1 + side2 + side3) / 2;
// let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
// console.log(area);

// for (let year = 2014; year <= 2055; year++) {
//   let d = new Date(year, 0, 1);
//   if (d.getDay() === 0) ;
//   console.log("1st January is being a Sunday  " + year);
// }

today = new Date();
let Christmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  Christmas.setFullYear(Christmas.getFullYear());
}
let OneDay = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((Christmas.getTime() - today.getTime()) / OneDay) +
    " days left until Christmas!"
);
