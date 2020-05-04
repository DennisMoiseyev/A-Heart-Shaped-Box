/*
CMPM120 UCSC 2020
Collaborators: Simon Lemay, Dennis Moiseyev, and Jake Nguyen. (Copyright SJD L.L.C.)
A Heart-Shaped Box (Based on the novel by Joe Hill)
Date Completed: 5/3/2020
Creative tilt justification: The randomization mechanic was one that we were particularly proud of as it uses a random number generator to test whether or not it can send the obstacle along the y-axis.
Another element that we're proud of is programming the mechanic of the enemy moving closer to the player upon collision with obstacles. 
Also, our own unique art style, music, and narrative all fit an ominous and creepy aesthetic that we were going for. 
Sounds and music downloaded Copyright Free from freesounds.org
Copyright free time-lapse video in loading screen downloaded from Youtube
Time increment function and Game Over Scene Implemented from Prof. Nathan Altice's github
https://github.com/nathanaltice/PaddleParkourP3/blob/master/src/scenes/GameOver.js
Additional thanks to Nathan Altice's 'Movement Studies' example for reference
 */
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

