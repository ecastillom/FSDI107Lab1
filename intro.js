var MathLib = require("./myMath.js");

function homework() {
    
    GreaterNumber(10,5);
    console.log("-----------------------------");
    LessNumber(10,5);
    console.log("-----------------------------");
    EvenNumber();
    console.log("-----------------------------");
    OddNumber();
}

function GreaterNumber(num1, num2){
    console.log("The greater number between " + num1 + " and " + num2 + " is: " + MathLib.Greater(num1,num2))
}

function LessNumber(num1, num2){
    console.log("The less number between " + num1 + " and " + num2 + " is: " + MathLib.Less(num1,num2))
}

function EvenNumber() {
    //Print the first 20 even numbers

    console.log("This is the list of first 20 even numbers")

    var x = 1;
    var y = 1;

    while (x <= 20) {

        if (MathLib.isEven(y)) {
            console.log(y);
            x++;
        }

        y++;

    }
}

function OddNumber() {
    //Print the first 20 even numbers

    console.log("This is the list of first 20 odd numbers")

    var x = 1;
    var y = 1;

    while (x <= 20) {

        if (MathLib.isEven(y) == false) {
            console.log(y);
            x++;
        }

        y++;

    }
}

function init() {

    homework();
    // console.log("Hola Mundo");

    // let age = 29;
    // console.log(age);

    // let name = "Efren Castillo";
    // console.log(name);

    // MathLib.sayHello("test");
    // var result = MathLib.Suma(1,2);

    // console.log(result);

    // var greater = MathLib.Greater(1,2);
    // console.log(greater);

    // console.log("Is Even: " + MathLib.isEven(10));
    // console.log("Is Even: " + MathLib.isEven(13));
    // console.log("Is Even: " + MathLib.isEven(2));
}

init();