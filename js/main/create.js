// Create sprites
function create() {
  // Testing Character class
  game.characters = this.physics.add.group();
  for (var i = 0; i < 10; i++) {
    const skinID = 54 * Math.floor(Math.random() * 4) + 1;
    const pantsID = 54 * Math.floor(Math.random() * 10) + 4;
    const shirtID = 54 * Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 12) + 6);
    const hairID = 54 * Math.floor(Math.random() * 12) + (Math.floor(Math.random() * 8) + 19);
    const hatID = 54 * Math.floor(Math.random() * 9) + (Math.floor(Math.random() * 4) + 21);
    const shieldID = 54 * Math.floor(Math.random() * 9) + (Math.floor(Math.random() * 8) + 26);
    const weaponID = 54 * Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 12) + 35);

    new Character(Math.random() * 500, Math.random() * 500, {
      skin: skinID,
      pants: 2,
      shirt: shirtID,
      hair: 2,
      hat: 2,
      shield: 2,
      weapon: 2
    }, "characters", "normal", game.characters, 5, this);
  }
}
