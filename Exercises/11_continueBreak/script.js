let fuel = 1000;
let shipPosition = 0;
let planetDistance = 1100;
let storm = {
  start: 100,
  end: 400
};

while (fuel >= 0) {
  if (fuel == 0) {
    console.log('WARNING WARNING WARNING: fuel depleted, starting emergency broadcast');
    let i = 0;
    while (i<1000) {
      console.log('EMERGENCY BROADCAST: our ship is stranded out of fuel at', shipPosition, 'coordinates. Please send a rescue team.');
      i++
    };
    break
  };
  if (shipPosition >= storm.start && shipPosition <= storm.end) {
    shipPosition++;
    console.log('WARNING: we are crossing a void storm, please remain seated')
    continue
  };
  fuel--;
  if (shipPosition < planetDistance) {
    shipPosition++
  }
  else {
    console.log("We have arrived to the planet at coords", shipPosition)
    break
  };
};

console.log('storm span', storm.end-storm.start)
console.log('fuel',fuel)
console.log('ship coords', shipPosition)
