// Object Type

// Anonymous
function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

// Named using interface
interface Person {
    name: string;
    age: number;
}

function greet2(person: Person) {
    return "Hello " + person.name;
}

// Named using type alias
type Human = {
    name: string;
    age: number;
};

function greet3(person: Human) {
    return "Hello " + person.name;
}


// Types union
const calc = (numbers: object | null): void => { };

calc(1);		// Argument of type '1' is not assignable to parameter of type 'object | null'
calc('42');	// Argument of type '"42"' is not assignable to parameter of type 'object | null'
calc({ obj: 1 });



// Multiple types for one value
let id: number | string;

id = 10;	// number is valid
id = '42';	// string is valid
id = true;	// Type 'true' is not assignable to type 'string | number'


