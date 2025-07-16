let age: number = 25
const old: number = 30

// age = '13'
age = 20 // this is valid

let a: string = 'John'
const surname: string = 'Doe'

a = surname

let isActive: boolean = true
isActive = false // this is valid

let v:any = 'Hello'
v = 42 // this is valid, as 'any' can hold any type
v = true // this is also valid
let arr: number[] = [1, 2, 3]
arr.push(4) // this is valid

let no: unknown = 'Unknown type'
no = 42 // this is valid, but you cannot directly use it without type checking  
if (typeof no === 'number') {
    console.log(no + 10); // This is valid after type chtsecking
}

function sum(a: number, b: number): number {
    return a + b;
}

console.log("--- Gọi hàm sum với đúng kiểu dữ liệu ---");
let result1: number = sum(5, 10);
console.log(`sum(5, 10) = ${result1}`); 

let result2: number = sum(-3, 7.5);
console.log(`sum(-3, 7.5) = ${result2}`);

console.log("--- Gọi hàm sum với kiểu dữ liệu không đúng ---");

// console.log(`sum('5', 10) = ${result3}`); 

// let result4: number = sum(5, false); 
// console.log('result4: ',result4); 


