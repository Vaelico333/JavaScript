let score = [10, 20, 30];

console.log('Scores array before the loop:', score);

let i = 0;
while (i < score.length) {
  score[i]++;
  i++;
}
console.log('Scores array after the loop:', score);

for (let j = 0; j < score.length; j++) {
  score[j]++;
}
console.log('Scores array after the second loop:', score);

score.forEach(function(item, index, score) {
  score[index]++;
});
console.log('Scores array after the third loop:', score);
