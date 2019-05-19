// declaration for screens

var bigScreen = document.getElementById("solving");
var smallScreen = document.getElementById("solution");

// declaration for button

var first, second, third, fourth, fifth, sixth, seventh, eight, nine, zero, plus, minus, divide, multiply, equal, cancel, back, decimal;
first = document.getElementById("no1");  // button 1
second = document.getElementById("no2");  // button 2
third = document.getElementById("no3");  // button 3
fourth = document.getElementById("no4");  // button 4
fifth = document.getElementById("no5");  // button 5
sixth = document.getElementById("no6");  // button 6
seventh = document.getElementById("no7");  // button 7
eight = document.getElementById("no8");  // button 8
nine = document.getElementById("no9");  // button 9
zero = document.getElementById("no0");  // button 0
plus = document.getElementById("plus-sign");  // button plus sign
minus = document.getElementById("minus-sign");  // button minus sign
divide = document.getElementById("divide-sign");  // button divide
multiply = document.getElementById("multiply-sign");  // button multiply
equal = document.getElementById("equal");  // button equal
cancel = document.getElementById("cancel");  // button clear
back = document.getElementById("back");  // button Backspace
decimal = document.getElementById("decimal");  // button decimal


// Functions For Buttons

first.onclick = function(){
    var firstValue = first.innerHTML.trim();  // to avoid white space
    firstValue = parseInt(firstValue);    // to Make the Integer a whole number
    bigScreen.innerHTML = bigScreen.innerHTML + firstValue;

}

second.onclick = function(){
    var secondValue = second.innerHTML.trim();  // to avoid white space
    secondValue = parseInt(secondValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + secondValue;
}

third.onclick = function(){
    var thirdValue = third.innerHTML.trim();  // to avoid white space
    thirdValue = parseInt(thirdValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + thirdValue;
}

fourth.onclick = function(){
    var fourthValue = fourth.innerHTML.trim();  // to avoid white space
    fourthValue = parseInt(fourthValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + fourthValue;
}

fifth.onclick = function(){
    var fifthValue = fifth.innerHTML.trim();  // to avoid white space
    fifthValue = parseInt(fifthValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + fifthValue;
}

sixth.onclick = function(){
    var sixthValue = sixth.innerHTML.trim();  // to avoid white space
    sixthValue = parseInt(sixthValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + sixthValue;
}

seventh.onclick = function(){
    var seventhValue = seventh.innerHTML.trim();  // to avoid white space
    seventhValue = parseInt(seventhValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + seventhValue;
}

eight.onclick = function(){
    var eightValue = eight.innerHTML.trim();  // to avoid white space
    eightValue = parseInt(eightValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + eightValue;
}

nine.onclick = function(){
    var nineValue = nine.innerHTML.trim();  // to avoid white space
    nineValue = parseInt(nineValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + nineValue;
}

zero.onclick = function(){
    var zeroValue = zero.innerHTML.trim();  // to avoid white space
    zeroValue = parseInt(zeroValue);    // to Make the Integer a whole number

    bigScreen.innerHTML = bigScreen.innerHTML + zeroValue;
}

plus.onclick = function(){
    var plusValue = plus.innerHTML.trim();  // to avoid white space
    bigScreen.innerHTML = bigScreen.innerHTML + plusValue;
}

minus.onclick = function(){
    var minusValue = minus.innerHTML.trim();  // to avoid white space
    bigScreen.innerHTML = bigScreen.innerHTML + minusValue;
}

divide.onclick = function(){
    var divideValue = divide.innerHTML.trim();  // to avoid white space
    bigScreen.innerHTML = bigScreen.innerHTML + divideValue;
}

multiply.onclick = function(){
    var multiplyValue = multiply.innerHTML.trim();  // to avoid white space
    bigScreen.innerHTML = bigScreen.innerHTML + multiplyValue;
}

equal.onclick = function(){
    bigScreen.innerHTML = eval(bigScreen.innerHTML);
    smallScreen.innerHTML = bigScreen.innerHTML;
}

// Back Space Function
back.onclick = function(){
    var num = bigScreen.innerHTML;  // Sets the Num variable to the bigscreen
    var len = num.length - 1;           // takes away one from the lenght of the values on the bigScreen
    var newNum = num.substring(0, len);   // Not So sure of this Method
    bigScreen.innerHTML = newNum;   // sets the new Value to the length - 1
}

cancel.onclick = function(){
    bigScreen.innerHTML = "";
}


decimal.onclick = function(){
    var decimalValue = decimal.innerHTML.trim();  // to avoid white space
    bigScreen.innerHTML = bigScreen.innerHTML + decimalValue;
}