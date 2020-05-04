class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene"); 
    }




    preload(){

        this.load.image("nightroad", "./Assets/NightRoadTS.png");
        this.load.image("moon", "./Assets/Moon.png");

    }

    create(){
        //add tilesprite backdrop for menu
        this.backdrop= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");
        //add moon image in top right of screen
        this.add.image(660, 30, "moon").setScale(0.5, 0.5);
        //Add title text
        this.add.text(450, 480, "A Heart-Shaped Box", {fontFamily: "Times New Roman", fontSize: "52px", color: "#FF0000"}).setOrigin(0.5);
        //Add instructions of how to proceed
        this.add.text(centerX, 350, "Press Space to Continue", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FF0000"}).setOrigin(0.5);
        //Configure and play background music
        this.bgm= this.sound.add("moan");

        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        this.bgm.play(musicConfig);

        //setup keyboard keys and add Spacebar key to proceed to next scene
        let cursors= this.input.keyboard.createCursorKeys();
        let space= this.input.keyboard.addKey("SPACE");
        space.on('down', () => {
            this.bgm.stop();
            this.scene.start("textScene");
        });
        
        

      
    }

    update(){
        //move the road
        this.backdrop.tilePositionX += 6;

    }
}