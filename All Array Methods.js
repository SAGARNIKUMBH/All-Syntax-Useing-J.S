// // Basic Array Operation

// Arrays

// const friends = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// console.log(friends);
// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);
// // console.log(friends[friends.length - 2]);
// // friends[2] = "Roshan";
// // console.log(friends);

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

// 4. Slice Methods :-

// const friends4 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends4.slice();
// console.log(friends4);
// console.log(friends4.length);
// console.log(friends4.slice(2));
// console.log(friends4.slice(2, 4));
// console.log(friends4.slice(-2));
// console.log(friends4.slice(-1));
// console.log(friends4.slice(1, -1));
// console.log([...friends4]);

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

// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

// const friends8 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends8.splice(1, 1);
// console.log(friends8);

// 9. Map Methods :-

// const friends9 = ["Gaurav", "Abhi", "Prasad", "Yogesh"];
// friends9.map(function () {});
// arrays.map(function (value, index) {
//   console.log("value ", value);
//   console.log("index ", index);
// });
// console.log(friends9);

// 10. concat Methods :-

// Definition and Usage =>

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.
// Syntax
// array1.concat(array2, array3, ..., arrayX)

// const arr1 = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "k", "l", "m", "n"];
// const letters = arr1.concat(arr2);
// console.log(letters);
// console.log([...arr1, ...arr2]);

// 11. Join Methods :-

// Definition and Usage =>

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

// const arr1 = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "k", "l", "m", "n"];
// const letters = arr1.concat(arr2);
// console.log(letters.join(","));
// console.log(letters.join("-"));
