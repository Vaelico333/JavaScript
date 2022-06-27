let itemPrice = 360.87;
let balance = 500;
let balancePositive = '';

if (balance>=itemPrice) {
  balance-=itemPrice
  alert('The product has been successfully sold. Your balance has been updated')
  console.log('Product sold. New balance = ', balance)
}
else {
  alert("Unfortunately, it seems that you don't have enough money in your current balance. Please add more money, or try another way.")
  console.log('Insufficient balance, operation stopped')
}
