// const repeatString = (str, num) => {
//   return num < 0 ? 'ERROR' : str.repeat(num);
// };

// console.log(repeatString('hey', 4));

// const reverseString = (str) => {
//   return [...str].reverse().join('');
// };

// console.log(reverseString('Pooh'));

// const removeFromArray = (arrs, ...reMove) => {
//   const trying = new Set(reMove);
//   return arrs.filter((value) => !trying.has(value));
// };

// console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ));

//sumAll

// const sumAll = (min, max) => {
//   return ((max - min + 1) * (min + max)) / 2;
// };

// console.log(sumAll(1, 4)); //1 + 2 + 3 + 4 //10

//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string is should return 'Error'

// function problem(x) {
//   return !isNaN(x) ? x * 50 + 6 : 'Error';
// }

// console.log(problem(''));

// const leapYears = (year) => {
//   return new Date(year, 1, 29).getMonth() === 1;
// };

// const leapYears2 = (year) =>
//   (0 === year % 4 && 0 !== year % 100) || 0 === year % 400 ? true : false;

// console.log(leapYears(1897));
// console.log(leapYears2(2004));

//Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa rounded to one decimal place:

//Celsius to Fahrenheit = (0°C × 9/5) + 32 = 32°F

//Fahrenheit to Celsius = (32°F − 32) × 5/9 = 0°C

//npm test tempConversion.spec.js

// const convertToCelsius = (fahToCel) => {
//   return (((fahToCel - 32) * 5) / 9).toFixed(1);
// };

// const convertToFahrenheit = (celToFah) => {
//   return ((celToFah * 9) / 5 + 32).toFixed(1);
// };
// console.log(convertToCelsius(103));
// console.log(convertToFahrenheit(13));

//Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

//sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10

// const sumAll = (a, b) => {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
//   let mathy = ((max - min + 1) * (min + max)) / 2;
//   let nope = 'ERROR';
//   let answer = '';
//   Number.isInteger(a) && Number.isInteger(b)
//     ? answer === mathy
//     : answer === nope;
//   !Number.isNaN(a) && !Number.isNaN(b) ? answer === mathy : answer === nope;
//   if (a < 0 || b < 0) answer === nope;
//   return answer;
// };

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// const sumAll = (a, b) => {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);
//   if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
//   if (min < 0 || max < 0) {
//     return 'ERROR';
//   } else ((max - min + 1) * (min + max)) / 2;
// };

console.log(sumAll(4, 1));

//npm test sumAll.spec.js
