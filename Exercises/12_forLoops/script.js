let population = 100;
let year = 0;
let study = 100;

for (let i = 0; i < study; i++) {
  population *= 1.05;
  year++;
  console.log('Population of year', year,':', population)
};
console.log('Population after', study, 'years:', population)
