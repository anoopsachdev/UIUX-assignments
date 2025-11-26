// objects
let person = {
    age: 20,
    name: 'anoop',
    last_name: "sachdev",
    isStudent: true,
    greet: function(){
        console.log("yooo wassup")
    }
};
delete person.age
console.log(person.name, person["last_name"], "age is", person.age) // age is undefined
person.age = 20 // adding properties
console.log(person.name, person["last_name"], "age is", person.age)

person.greet()

// methods of objects

// person.greet // displays nothing

// console.log(person.greet) // [Function: greet]

// console.log(typeof (person.greet()))
// prints
// yooo wassup
// undefined

// console.log(typeof (person.greet)) // function