//fibonacci sequence

// function fibonacci(n: number) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

//factorial of a number

// function factorial(n: number) {
//   let result = 1;
//   for (let i = 2; i < n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(5)); //24

// function recursiveFibonacci(n: number) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0));

// function linearSearch(arr: number[], traget: number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === traget) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([-5, 2, 10, 4, 6], 10));

function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
