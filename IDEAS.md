# Plan for Searchlight

## Overview
Searchlight is a top-down game. The main purpose of the game is to find all of the targets in the dark. The player has a flashlight that shines light at a 360-degree angle around the player. The player can collect a powerup that can expand the circle of light (see *Powerups*).

## Game Mechanics
 - Moving by using the WASD keys
 - Clicking mouse

## Powerups
 - Make the flashlight range bigger

## Sounds
### Background music
Maybe Kirby cave music?

### SFX
 - When the player clicks the target, play victory SFX
 - When the player clicks anywhere that shouldn't be clicked (such as grass), plays an incorrect SFX (but not too loud)
 - When the player clicks a clickable sprite that isn't the target, play a loud incorrect SFX
 - When the player hovers over a clickable sprite, play a target sound

## Graphics
### People sprites
Each person has an array of randomly selected IDs. The first ID is for the pants the second ID is for the clothes, the third ID is for the hair, etc. There is an ID for each skin, hat, or weapon. The clothes will be overlapping the sprite.

### Trees and Bushes
Each tree will be selected randomly.

## Code
There will be a `foreach` loop that loops through all clickable sprites      (in the `update` function) that checks if the sprite is in the flashlight range. If it is in range, check for mouse clicks.
When the clickable sprites are being created, the code will check whether that sprite looks exactly like the player sprite using the array of clothing IDs.
