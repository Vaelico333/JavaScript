function hoursToMinutes (hours){
  let conversion = hours*60;
  console.log(conversion);
  return conversion;
}
let a = hoursToMinutes(10);
let b = hoursToMinutes(20);

let dayToHours = function (days){
  return days*24;
};
let c = dayToHours(18);
console.log(c);

let d = hoursToMinutes(dayToHours(18));
console.log(d);

//shop exercise
let stock = 63;
let balance = 300;

function inventoryCheck(order,price) {
  let finalPrice = order*price;
  if (order<=stock){
    stock -= order;
    balance += finalPrice;
    console.log('Successful purchase. It will be', finalPrice, '$, please');
  }
  else {
    console.log('Not enough stock');
  }
}
let purchase1 = (inventoryCheck(3,16));
let purchase2 = (inventoryCheck(7,15));
let purchase3 = (inventoryCheck(18,1));
let purchase4 = (inventoryCheck(2,102));
let purchase5 = (inventoryCheck(21,7));
let purchase6 = (inventoryCheck(44,5));
console.log('The remaining stock is', stock);
console.log('The current balance is', balance);
