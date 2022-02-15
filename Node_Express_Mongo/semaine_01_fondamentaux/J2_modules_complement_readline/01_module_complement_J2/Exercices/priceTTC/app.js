
import { priceTTC , init } from './utils.js';

const TVA = 0.2 ;

init.PRECISION = 100;

const prices = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

prices.map(product =>{
    product.priceTTC = priceTTC(product.priceHT, TVA);

    return product;
});

console.log(prices);