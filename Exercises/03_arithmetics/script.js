//addition
let a = 1+1;
console.log(a);

let b = 10;
let c = a+b;
console.log(c)

b += 1;
console.log(b);

//substraction
let x = 10-5;
console.log(x);

let y = b+x;
console.log(y);

x -= 2;
console.log(x);

//multiplication
let unitPrice = 2;
let units = 10;
let total = units*unitPrice;
console.log(total);

//division
let n = 10;
let result = n/2;

//modulus
let r = 5%2;
console.log(r);

//Challenge
let baseWeight = 10000;
let foodWeight = 100;
let passengerWeight = 10;

let fuelUnitWeight = 2; //weight of 1 unit of fuel
let fuelUnits = 100; //total units of fuel we need

let totalShipWeight = baseWeight + foodWeight + passengerWeight + (fuelUnits * fuelUnitWeight);
console.log(totalShipWeight); 
