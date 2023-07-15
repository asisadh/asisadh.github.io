function max(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c)
        return b;
    else {
        return c
    }
}

function isVowel(a) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(a).toString();
}

function sum(arr) {
    var total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function multiply(arr) {
    var product = 1
    for (let x of arr) {
        product *= x;
    }
    return product;
}

function reverse(value) {
    reverse_value = '';
    for (let i = value.length - 1; i >= 0; i--) {
        reverse_value += value[i];
    }
    return reverse_value;
}

function findLongestWord(value) {
    var longest = 0;
    for (let i = 0; i < value.length; i++) {
        longest = value[i].length > longest ? value[i].length : longest
    }
    return longest;
}

function filterWords(value, filter) {
    var filtered = [];
    for (let i = 0; i < value.length; i++) {
        if (value[i].length > filter) {
            filtered.push(value[i]);
        }
    }
    return filtered;
}

// JSFIDDLE
const a = [1, 3, 5, 3, 3];

// multiple each element by 10
const b = a.map(function (element, index, array) {
    return element * 10
});

// return array with all elements equal to 3; 
const c = a.filter(function (element, index, array) {
    return element == 3;
});

//  return the product of all elements;
const d = a.reduce(function (previousValue, element, index, array) {
    return previousValue * element;
});

function myFunctionTest(expected, value) {
    const successMessage = "TEST SUCCEEDED";
    const failureMessage = "TEST FAILED.  Expected " + expected + " found " + value;
    console.assert(expected, value, failureMessage);
    if (expected === value || expected == value) {
        return successMessage;
    } else {
        return failureMessage;
    }
}

console.log("Expected output of max(2,3) is 3 " + myFunctionTest(3, max(2, 3)));
console.log("Expected output of max(2,3,4) is 4 " + myFunctionTest(4, maxOfThree(2, 3, 4)));
console.log("Expected output of isVowel('e') is true " + myFunctionTest('true', isVowel('e')));
console.log("Expected output of sum([1,2,3]) is 6 " + myFunctionTest(6, sum([1, 2, 3])));
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj' " + myFunctionTest('ratset gaj', reverse('jag testar')));
console.log("Expected output of findLongestWord(['This' ,'is' ,'a' ,'simple' ,'sentence']) is 8 " + myFunctionTest(8, findLongestWord(['This', 'is', 'a', 'simple', 'sentence'])));
console.log("Expected output of filterWords(['This' ,'is' ,'a' ,'simple' ,'sentence'], 3) is ['This' ,'simple' ,'sentence'] " + myFunctionTest(JSON.stringify(['This', 'simple', 'sentence']), JSON.stringify(filterWords(['This', 'is', 'a', 'simple', 'sentence'], 3))));
console.log("[" + a + "]'s each element multilpied by 10 = [" + b + "]");
console.log("[" + a + "]'s return array with all elements equal to 3 = [" + c + "]");
console.log("[" + a + "]'s return the product of all elements = " + d);
