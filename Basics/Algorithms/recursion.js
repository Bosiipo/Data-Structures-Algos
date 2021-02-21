// let counter = 0;
// function inception() {
//     debugger;
//     console.log(counter);
//     if (counter > 3) {
//         console.log('done');
//         return 'done';
//     }
//     counter++;
//     return inception();
// }

// inception();

function findFactorialRecursive(number) {
    debugger;
    // Base case
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

// findFactorialRecursive(5);

// function findFactorialIterative(number){
//     let answer = 1;
//     if (number === 2) {
//         answer = 2;
//     }
//     for (let i = 2; i <= number; i++) {
//         answer = answer * i;        
//     }
//     console.log(answer);
//     return answer;
// }

// findFactorialIterative(7);

// 0,1,1,2,3,5,8,13,21,34,55,89,144....

function fibonacciIterative(n) {
    // n = index position;
    // returns a value which is the sum of the previous two elements in the array
    // eg: fibonacci(4) = 3;

    // Add the previous 2 numbers to get the next one
    if (n < 2) {
        return n;
    }
    let array = [0, 1];
    for (let index = 2; index <= n; index++) {
        array.push(array[index-2] + array[index-1]);
        if (array[n]) {
            return array[n];
        }
    }
};

// fibonacciIterative(2);

function fibonacciRecursive(n) {
    debugger;
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// fibonacciRecursive(5);

// Convert the counts to numbers
// Join everything to form a single string

// To convert the saying into a digit string, 
// replace the counts with a number and concatenate every saying.

// n ==> 1 returns "1"
// n ==> 4 returns "1211"

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1" ==> memory
// countAndSay(2) = one 1 = "11" ==> memory
// countAndSay(3) = two 1's = "21" ==> memory

// STARBOY
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// one 1 = "11" 
// counter.length + counter


// COUNT AND SAY!!


// 2+"7"=27

// counter.length + counter

// any two adjacent digit in the sequence are not identical, 
// then its next sequence would double the length.
//  As a result, we could assume that in the worst case, 
// the length of the sequence would grow exponentially.


// BAD BOYYYY
var countAndSay = function(n) {
    // debugger;

    if (n === 1) return '1';

    let response = '1';
    while (n-1>0) {
        let count = 0;
        let index = 0;
        let current = response[0];
        let tempRes = '';
        while (index != response.length) {
            if (current === response[index]) count++; 
            else{
                tempRes += count + current;
                count = 1;
                current = response[index];
            }
            index++;
        }
        tempRes += count+current;
        response = tempRes;
        n--;
    }
    return response;

    
};
