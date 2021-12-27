// Type
type Name = string;	// Custom type creation

let id: Name;	// Apply custom type

id = "42";	// No error, because type of "42" is a string
id = 10;	// Type '10' is not assignable to type 'string'


type Human = {
    name: string;
    age: number;
};

function greet3(person: Human) {
    return "Hello " + person.name;
}