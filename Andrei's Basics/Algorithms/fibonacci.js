function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

fibonacciIterative(2);

function fibonacciIterativeRecursion(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciIterativeRecursion(n - 1) + fibonacciIterativeRecursion(n - 2);
}

fibonacciIterativeRecursion(3);