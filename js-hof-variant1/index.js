import { map, filter, pipe, partial, memoize } from './hof.js';

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Mouse', price: 50 }
];

const getPrice = (p) => p.price;
const isExpensive = (price) => price > 100;

const process = pipe(
  (arr) => map(getPrice, arr),
  (prices) => filter(isExpensive, prices)
);

console.log('Дорогі товари (ціни):', process(products));