let distance = 200; //0-200, over 200 is out of reach
let engineOK = false; //true or false
let fuel = 100; //0-100

//trying on my own with nested conditionals
if (engineOK==false){
  console.log("The ship won't fly, the engine is broken");
}
else if (distance>200) {
  console.log('Too far, abort');
}
else if (distance<=100) {
  if (fuel<25){
    console.log('Not enough fuel for the selected route');
  }
  else {
    console.log('Route confirmed. Warming up engines... Launch in 3... 2... 1...');
  }
}
else if (distance<=200) {
  if (fuel<100) {
    console.log('Not enough fuel for the selected route');
  }
  else{
    console.log('Route confirmed. Warming up engines... Launch in 3... 2... 1...');
  }
}
else {
  console.log('Route confirmed. Warming up engines... Launch in 3... 2... 1...');
}


//now using boolean logic operators
let distanceRange = distance<=200 && distance>=100;

if (!engineOK || distance>200 || fuel<25){
  console.log('Requirements not met, route denied');
}
else if (distanceRange && fuel>=100) {
  console.log('Route confirmed. Warming up engines... Launch in 3... 2... 1...');
}
else if (distance<100 && fuel>=25) {
  console.log('Route confirmed. Warming up engines... Launch in 3... 2... 1...');
}
else {
  console.log('Not enough fuel')
}
