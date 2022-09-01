// Create functions for the Calculator class that can do the following:

// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.

// Example:
// var calculator = new Calculator()
// calculator.add(10, 5) ➞ 15
// calculator.subtract(10, 5) ➞ 5
// calculator.multiply(10, 5) ➞ 50
// calculator.divide(10, 5) ➞ 2


class Calculator{
    
    add(a, b){
       return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    multiply(a, b){
        return a * b;
    }

    divide(a, b){
        return a / b;
    }
}

let calc = new Calculator

console.log(calc.add(5,5)).

// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight

// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

// notes:
// name will be passed in as a string and age, height and weight will be integers.

// example:
// p1 = new Player("David Jones", 25, 175, 75)

// p1.getAge() ➞ "David Jones is age 25"
// p1.getHeight() ➞ "David Jones is 175cm"
// p1.getWeight() ➞ "David Jones weighs 75kg"


// create at least two methods, on the child class, if you want add properties that only the child will have


class Player{
    constructor(name, age, height, weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    
describe(){
    return `${this.name} is age`
}
}

let player = new Player
console.log(player.getAge(David, 31, 61, 220))





