// This file is for learning and experimenting with Typescript data types

// import { TreeNode, BinarySearchTree } from "./lib/BinarySearchTree";
// import { Graph } from "./lib/Graph";

// console.log("\n----------------------------------------------------------------------------------------------------------------------");

// // Binary Search Tree
// let rootNode = new TreeNode(50);
// let tree = new BinarySearchTree(rootNode);
// console.log(rootNode);
// console.log("\n----------------------------------------------------------------------------------------------------------------------");

// Graph
// let g = new Graph;
// g.addVertex("Los Angeles");
// g.addVertex("Seattle");
// g.addVertex("San Francisco");
// g.addEdge("Los Angeles", "San Francisco");
// g.addEdge("Seattle", "Los Angeles");
// g.removeEdge("Seattle", "Los Angeles");
// g.removeVertex("Los Angeles");
// console.log(g);
// console.log("\n----------------------------------------------------------------------------------------------------------------------";

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Neil",
//     age: 38,
//     hobbies: ['Surfing', 'Hiking'],
//     role: [2, 'Software Engineer']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role { ADMIN, READ_ONLY, AUTHOR };

// const person = {
//     name: "Neil",
//     age: 38,
//     hobbies: ['Surfing', 'Hiking'],
//     role: Role.ADMIN
// };

// let favoriteActivities: string[];

// favoriteActivities = ['Surfing', 'camping'];
// // person.role.push('admin');
// // person.role.push(99);
// // person.role.[1] = 800;

// console.log(person.name, person.age, person.hobbies, person.role);

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// type NumOrString = number | String;
// type ConversionType = 'as-number' | 'as-text';

// function combine(
//     input1: NumOrString,
//     input2: NumOrString,
//     resultConversion: ConversionType
// ) {
//     let result;
//     if (typeof input1 === 'number'&& typeof input2 === 'number' ) {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     if (typeof result === 'string' && resultConversion === 'as-number') {
//         return parseFloat(result);
//     } else {
//         return result.toString();
//     }
// }

// function add(n1:number, n2: number): number {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }

// console.log(printResult(add(100, 99)));

// let combineValues: (a: number, b: number) => number;

// combineValues = add;

// console.log("Combined", combineValues(8, 8));

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
//     return result;
// }

// addAndHandle(200, 99, (result) => {
//     console.log('Call back:', result);
// })

// const combinedAges = combine(99, 100, 'as-number');
// console.log(combinedAges);

// const combinedStringAges = combine('99', '100', 'as-number');
// console.log(combinedStringAges);

// const combinedText = combine('Neil ', 'Ranada', 'as-text');
// console.log(combinedText);

// const combinedNumAndText = combine(99, 'Ranada', 'as-text');
// console.log(combinedNumAndText);

// function sendRequest(data: string, cb: (response: any) => void) {
//     // ... sending request with 'data'
//     return cb({data: 'Hi there!'});
// }

// sendRequest('Send this!', (response) => {
//     console.log(response);
//     return true;
// })
