let item='engine';
if(item == 'engine') {
  console.log('Engine!');
}
else if(item!='engine') {
  console.log('Not engine');
}
console.log('The requested item is', item);

let fuel = 100;
if (fuel>=700) {
  console.log('Status green, high amount of fuel remaining');
}
else if (fuel>=500) {
  console.log('Status yellow, medium amount of fuel remaining')
}
else if (fuel>=300) {
  console.log('Status orange, low amount of fuel remaining')
}
else if (fuel>=150) {
  console.log('Status red, critical amount of fuel remaining')
}
else {
  console.log('Red alert, initiating energy save mode')
}
