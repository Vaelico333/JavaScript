let pet = {
  health: 100,
  fun: 0,
  play: function () {
    this.fun += 10;
  },
  eat: function (food){
    if (food == 'apple'){
      this.health += 10;
    }
    else if (food == 'candy'){
      this.health -= 5;
      this.fun += 5;
    }
  }
};
//now let's show how "pet" is by default
console.log('Pet BEFORE any changes: ',pet);

//and after we play with her
pet.play();
pet.play();
console.log('Pet AFTER playing once: ', pet);

//let's give our pet an apple and a piece of candy
pet.eat('apple');
pet.eat('candy');
console.log('Pet AFTER eating an apple and 1 candy: ', pet);
