// array -> reduce method

// reduce internally loops through the array and calls your callback again and again.
let arr = [10, 20, 10]
initial_value = 100;
let sum = arr.reduce(function(accumulator, current_value, current_index, arr){
    return accumulator + current_value;
}, initial_value)

console.log(sum) 

// array -> map method
let arr1 = [1, 2, 3, 4]

let mult = arr1.map(multiplication);
function multiplication(num){
    return num * 10;
}

console.log(mult);
