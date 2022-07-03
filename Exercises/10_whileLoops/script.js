let total = 1;
let i = 1;
let number = 13

while (i <= number) {
  if (i<2){
    console.log(i,'factorial is:', total);
    i++}
  else if (i<number) {
    total *= i;
    console.log(i,'factorial is:', total);
    i++
  }
  else if (i=number){
    total *= i;
    console.log(i,'factorial is:', total)
    alert(total)
    break
  };
};
console.log('the factorial of', i, 'is:', total)

//Loop challenge: create a function that runs 1000 times, sending a HELP signal every time
let count = 0;
let sendSignal = function(signal) {
  console.log(signal)
};
while (count < 1000) {
  sendSignal('Help!');
  count++
}
console.log('Number of iterations:',count)
