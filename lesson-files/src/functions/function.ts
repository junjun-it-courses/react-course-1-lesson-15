// function sum(num1, num2) {
//     return num1 + num2
// }

// Argument types

// function sum(num1: number, num2: number) {
//     return num1 + num2
// }

// Arguments in different types

// function createEmailAddress(name: string, age: number | string, mailAgent: string) {
//     return `${name}_${age}@${mailAgent}.com`;
// }
//
// createEmailAddress('vladimir', 24, 'gmail') // vladimir_24@gmail.com

// Lets add some default arguments

// function createEmailAddress(
//     name: string,
//     age: number | string,
//     mailAgent: string = 'gmail.com'
// ) {
//     return `${name}_${age}@${mailAgent}`;
// }
//
// createEmailAddress('vladimir', 24) // vladimir_24@gmail.com
//
// createEmailAddress('vladimir', 24, null) // Error

// Optional arguments

// function createEmailAddress(
//     name: string,
//     age: number | string,
//     mailAgent?: string
// ) {
//     if(!mailAgent) mailAgent = 'gmail.com';
//     return `${name}_${age}@${mailAgent}`;
// }
//
// createEmailAddress('vladimir', 24) // vladimir_24@gmail.com


// ES6 Rest parameters

// const createSkillsTS = (name: string, ...skills: Array<string>) => {
//     return `${name}, my skills are ${skills.join()}`
// }
//
// createSkillsTS('HTML', 'CSS', 'JS');

// Return type

// const sum = (a: number, b: number): number => a + b;


// void

function foo(a: number): void {
    console.log(a + a);
}

// never

function bar(a: number): never {
    bar(a + a)
}

function baz(a: number): never {
    throw new Error('Error example')
}