
/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers*/
function sum(array) {
    return array.reduce((a, b) => a + b, 0);
}

function multiply(array) {
    return array.reduce((a, b) => a * b, 1);
}

/* 5 Define a function reverse() that computes the reversal of a string.*/

function reverse(str) {
    return str.split("").reduce((a, b) => b + a);

}

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(array, num) {
    return array.filter(a => a.length > num)
}

