let player = {
  name: 'Amigo',
  score: 99,
  isActive: true,
  outfit:{
    color: 'blue',
    size: 'M',
    cost: 100,
    isNew: false
  }
};

console.log('player object:', player);
console.log('player name:', player.name);
console.log('player score:', player['score']);
console.log('player outfit color:', player['outfit']['color']);

//change the player's score and the outfit color
player.score = 120;
player.outfit.color = 'red';
console.log('player score:', player['score']);
console.log('player outfit color:', player['outfit']['color']);

//adding a new property to player
player.health = 100;
console.log('player object:', player);

//deleting a property
delete player.health;
console.log('player object:', player);

//challenge
player.outfit.size = 'L';
console.log('player outfit size:', player['outfit']['size']);
