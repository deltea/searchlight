// Create sprites
function create() {
  // Testing Character class
  game.characters = this.physics.add.group();
  new Character(200, 200, {
    skin: 3,
    shirt: 6,
    hair: 20,
    hat: 29,
    shield: 39,
    weapon: 51
  }, "characters", "normal", game.characters, this);
}
