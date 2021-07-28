// Create characters using this class
class Character {
  // Initialize character
  constructor(x, y, clothesId, type) {
    // Position of character
    this.x = x;
    this.y = y;

    // Types: Player, Target, Normal
    this.type = type

    // An array of where the clothes are in the spritesheet
    this.clothesId = clothesId;

    // Check which type of character the character is
    switch (this.type) {
      case "player":
        this.target = false;
        break;
      case "target":
        this.target = true;
        break;
      case "normal":
        this.target = false;
        break;
    }
  }

  // Update characters, runs in the main update function
  update() {

  }
}
