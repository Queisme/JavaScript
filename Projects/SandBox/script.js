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

const sumAll = (min, max) => {
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(sumAll(1, 4)); //1 + 2 + 3 + 4 //10
