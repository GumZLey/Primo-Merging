import { merge } from './merge';

const collection1 = [0, 2, 4];
const collection2 = [1, 3, 5];
const collection3 = [6, 4, 2, 0];
const result = merge(collection1, collection2, collection3);
console.log(result);