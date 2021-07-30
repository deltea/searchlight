// Searchlight
// Game objects
let game = {};
let stats = {};
let sfx = {};

// Phaser configuration
const config = {
  type: Phaser.AUTO,

  // Size of game window
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.RESIZE,
  },

  // Arcade physics
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 1500
      },

      // Options
      enableBody: true,
      // NOTE: Uncomment the following line to enable debug mode
      debug: true
    }
  },

  // Scenes
  scene: {
    preload,
    create,
    update
  }
};

// Phaser game
const phaserGame = new Phaser.Game(config);
