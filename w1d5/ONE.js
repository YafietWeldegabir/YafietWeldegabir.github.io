 /* runs test to see if expected argument is === to value returned by function2test argument */
 function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }

  /* 1. max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

  /*2. max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);

  }
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

  /* 3. isvowel takes a character and returns boolean if its vowel*/
  function isVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    if (str.length = 1) {
      return vowels.includes(str.toLowerCase())
    }
  }
  console.log("Expected output of isVowel('A') it true " + myFunctionTest(true, isVowel("A")));
  console.log("Expected output of isVowel('B') it true " + myFunctionTest(true, isVowel("B")));

  /*4. sum() and multiply both take array arguments and return the total sum and product of the elements.*/
  function sum(a) {
    return eval(a.join('+'));
  }
  function multiply(a) {
    return eval(a.join('*'));
  }
  console.log("Expected output of sum([1,2,3,4,5]) it 15 " + myFunctionTest(15, sum([1, 2, 3, 4, 5])));
  console.log("Expected output of multiply([1,2,3,4,5]) it 120 " + myFunctionTest(120, multiply([1, 2, 3, 4, 5])));

  /*5. reverse() takes string arguement and returns the reverse of the string*/
  function reverse(str) {
    var reversed = "";
    var i = str.length;
    while (i > 0) {
      reversed += str.substring(i - 1, i);
      i--;
    }
    return reversed;
  }
  console.log("Expected output of reverse('hello') is olleh " + myFunctionTest("olleh", reverse("hello")));

  /*6. findLongestWord() takes array of sting elements and returns the longest word.*/
  function findLongestWord(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > max.length) {
        max = arr[i]
      }
    }
    return max;
  }
  var stu = ["hi", "natnael", "fara", "iyu"];
  console.log("Expected output of findLongestWord(['hi', 'natnael', 'fara', 'iyu']) is 'natnael' " + myFunctionTest("natnael", findLongestWord(stu)));
/*7. filterLongWords() takes agruement of array of strings and an inter then returns the strings in the array which are longer than the integer*/
function filterLongWords(arr, num){
var result=[];
let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > num) {
        result.push(arr[i])
      }
    }
    return result;
}
var expexted= ["natnael", "fara", "iyu"];
console.log("Expected output of filterLongWords(['hi', 'natnael', 'fara', 'iyu']) is 'natnael' " + myFunctionTest(expexted, filterLongWords(stu, 2)));

/*8. Modified js */
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
return elem*10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

