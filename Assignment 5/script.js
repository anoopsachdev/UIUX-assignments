// question 2
let nums = [1, 2, 3, 4, 5, 200, 30]
let largest = Math.max(...nums)
let smallest = Math.min(...nums)
console.log("Largest:", largest)
console.log("Smallest:", smallest)
console.log("Ascending:", [...nums].sort((a, b) => a - b))
console.log("Descending:", [...nums].sort((a, b) => b - a))

// question 4
class Student{
    constructor(name, age, gpa, birthday){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        this.birthday = birthday;
    }
    updateGpa(gpa){
        this.gpa = gpa;
    }
}

let ankit = new Student("ankit", 21, 4, "18th Febuary 2006");

// Why do we use uppercase?

// Helps other developers instantly recognize it is meant to be used with new to create objects.

// question 5
let yourFunction = function(arr){
    let evenNos = arr.filter((num) => num%2 == 0); // if num is even it gets involved
    let doubles = evenNos.map((num) => num * 2);
    let sumOfAll = doubles.reduce((total, num) => total + num, 0); // total is initially 0
    return sumOfAll;
}

yourArray = [1, 2, 3, 4, 8, 4000, 80000, -80000];
console.log(yourFunction(yourArray));