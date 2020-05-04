//Configure game to browser and include menu and play core scenes

// Collaborators: Jake Nguyen, Dennis Moiseyev. Simon Lemay
// A Heart Shaped Box
// Date Completed: 5/3/2020
// Creative tilt justification: The randomization mechanic was one that we were particularly proud of as it uses a random number generator to test whether or not it can send the obstacle
// Also, the art style, music, and story all fit an ominous and creepy theme that we were going for

let config = {

    type: Phaser.AUTO,
    width: 740,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    scene: [Load, Menu, Text, Text2, Text3, Play, GameOver],
};

//apply configurations to new Phaser Game
let game = new Phaser.Game(config);

let centerX= game.config.width/2;
let centerY= game.config.height/2;

let degree;

let highScore;
let newHighScore= false;

let cursors;
