console.log('app worked');

// Пример использования современной возможности ES, которая будет скомпилирована Babel
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Webpack User'));

// Пример использования метода, который может требовать полифил
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(3)); // requires polyfill for older browsers