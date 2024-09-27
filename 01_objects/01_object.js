//01) What is an object in JavaScript?
/* An object in JavaScript is a collection of key-value pairs. 
Each key is referred to as a "property" and the value can be any valid JavaScript data type, 
such as a number, string, array, function, or another object. 
Objects are useful for grouping related data and functionalities.*/

//02) How do you create an object in JavaScript?
// You can create an object using either the object literal syntax or the new Object() constructor.
let obj = {"name": "NRS", "age": 24, "email": "test33@yopmail.com"}
console.log(obj);
// Using Object constructor
const car = new Object();
car.brand = 'Toyota';
car.model = 'Corolla';
car.year = 2020;

let obj2 = new Object();
obj2.name = "NRS";
obj2.age = 24;
obj2.email = "test24@yopmail.com";
// note run this key
obj2['email'] = "test288@yopmail.com";
console.log(obj2);

// Q3) What is the difference between an object and an array?

// An 'object' stores data in the form of key-value pairs where keys can be any string or symbol.
// An 'array' is a special type of object that stores data in an ordered list, where the keys are numeric indexes starting from 0.

let obj3 = {"name": "NRS", "age": 24, "email": "test33@yopmail.com"}
let arr3 = [3,4,5,23,4,4,4];

//Q 04)  How do you access properties of an object?
// You can access properties using dot notation or bracket notation.
console.log(obj3.name, obj3['email']);

//Q 05) How do you add a new property to an object?
// You can add a new property by assigning a value to a key that doesn’t yet exist in the object.
const obj5 = {"name": "hemon"};
obj5.age = 33; // Adds a new property 'age'
obj5["city"] = "Puna"; // Adds a new property 'city'
console.log(obj5, "Add a new property ");

// 06) How do you remove a property from an object?
// You can remove a property using the delete keyword.
delete obj5['age']; // Remove property 'Age'
console.log(obj5); 

// 07) What are enumerable properties?
/* Enumerable properties are those properties of an object that can be iterated over using a 
for...in loop or retrieved via functions like Object.keys(). 
By default, properties created via object literal or assignment are enumerable. */ 
// Using object literal
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
// enumerable() 
    for (let key in person) {
        if (person.hasOwnProperty(key)) {
            console.log(key + ': ' + person[key]);
            // document.write(key + ":" + person[key]);
        }
    }
// Output:
// name: Alice
// age: 30
// country: USA

// 08) What is Object.keys() used for?
// Object.keys() returns an array containing the names (keys) of all enumerable properties of an object.
let obj8 = Object.keys(obj3);
console.log(obj8); //Key name [ 'name', 'age', 'email' ]
obj8.City= "ujjain", 
obj8.country= "India";
console.log(Object.keys(obj8), "returns an array");

//09) How can you check if a property exists in an object?
// You can check if a property exists using either the 'in' operator or the 'hasOwnProperty()' method.
let obj9 = obj3.hasOwnProperty('age'); // Own property true
console.log("age" in obj3, "In methods"); // In methods true
console.log(obj9, "hasOwnProperty");
// console.log(obj9, "property exists in an object");

//10) How do you loop through all the properties of an object?
// You can loop through the properties of an object using a for...in loop.
for(let keys in obj3) {
    console.log(keys, obj3[keys], "key and value");    
};

// ====================================
// Questions 1) What is an object in JavaScript?
const  symb = Symbol("Symbol type");
let objType = {
    "key": "value", 
    "symb": symb, 
     userFunc() {
        console.log("hellow, good functions data");
    },
    "anyObj": {
        "address" : "Inodre madhya pradesh"
    } 
}
console.log(objType.key, objType.userFunc(), objType.anyObj.address);

// Quesion 2) How do you create an object in JavaScript?
let crtObj1 = {"firstName": "Nayan", "lastName": "Om Singh"};
let crtObj2 =  new Object();
crtObj2.firstName = "Hari Om";
crtObj2["lastName"] = "Shree Ram";
console.log(crtObj1, "crtObj1");
console.log(crtObj2, "crtObj2");

//Questions 3) What is the difference between an object and an array?
let difObj = {"name": "Ramu Sindey", "city": "indore" }; // THis is object
let array = ["name", "city", "address"]; // Array type Ordered of indexed

// Questions 4) How do you access properties of an object?
console.log(difObj.name); // Access property value "Name"
console.log(difObj.city); //Access property value "City"

// Question 5) How do you add a new property to an object?
difObj.country = "india"; //Add new property 
difObj["group"] = "NRS group";
console.log(difObj);

// Questions 6) How do you remove a property from an object?
let removeObj = {lastName: "Reddi", company: "NRS Grooup"};
console.log(removeObj);
console.log(delete removeObj.lastName);
console.log(removeObj);

// Questions 7) What are enumerable properties?
// Questions 10) How do you loop through all the properties of an object?

// You can use a for...in loop:

for (let keys in removeObj) {
    console.log(keys, removeObj[keys], "Questions 7"); ///company NRS Grooup    
}
const cars = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

Object.keys(cars).forEach(key => {
    console.log(key, cars[key], "Car objects");
})
// Object.keys(cars).forEach(key => {
//     console.log(`${key}: ${cars[key]}`);
// });

//Question 8) What is Object.keys() used for? and
//Question 9) How can you check if a property exists in an object?
// Object.keys() returns an array of a given object’s own enumerable property names (keys).
const person2 = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};
let objs =  'occupation' in person2;
console.log(objs);
// person2.hasOwnProperty(occupation);
console.log(person2.hasOwnProperty('name'), "Question 8");

//Question 11) What is the difference between dot notation and bracket notation?
/* Dot notation requires a valid identifier as the property name and cannot access dynamic property names. 
 Bracket notation can use strings or variables to access properties, allowing for more flexibility. */

// Question 12) How do you create an empty object?

// You can create an empty object using:
let emptyObj1 = {};
let emptyObj2 = new Object();
console.log("Simple empty Object : ", emptyObj1);// Empty Objects
console.log("Contructor empty Object : " +  emptyObj2,); // Empty Objects

// Question 13) Can an object property be another object? Provide an example.

// Yes, an object property can be another object:
const anotherObj = {
    nested: {
        key: 'value'
    }
};
console.log(anotherObj.nested.key, "nested loop"); // object property can be another object

//Question 14) What is the difference between null and an empty object?
/* null is a primitive value representing the absence of a value, 
while an empty object ({}) is a defined object with no properties.*/

// Question 15) How do you copy an object?
// You can use spread syntax or Object.assign() for shallow copying:

const newObj = { ...anotherObj }; // using spread
const newObj2 = Object.assign({}, anotherObj); // using Object.assign()
console.log(newObj2);

//Question 16) What is Object.assign() used for?

/* Object.assign() copies the values of all enumerable properties from one or more source 
objects to a target object, returning the target object. */
let assignObj1 = {a: 33, b: 34, c : 43};
let assignObj2 = {s: 34, d: 32, c: 42};
console.log(Object.assign(assignObj2, assignObj1), "Assign method");
console.log(Object.assign({}, assignObj2), "Assign method"); // start me jo object write karenge value use to target karengi or usi me value ko store karegi
console.log(Object.assign({}, assignObj1), "Assign method");

const objAssingVal = {
    laptop: "Lanovo",
    mobile: {
        mobileCom: "One plus",
        mobileCom2: "MI",
        mobileCom3: "Oppo"        
    }
} 

const objB = Object.assign({}, objAssingVal);
console.log(objB);
objB.mobile.mobileCom = "Nokia";

console.log(objB.mobile.mobileCom); // Output: 3 (both objects reference the same nested object)
console.log(objB);