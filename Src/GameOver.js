class GameOver extends Phaser.Scene{

    constructor(){
        super("endScene"); 
    }

create(){
    //create variable storedScore if there is local storage available
    if(localStorage.getItem("hiscore") !=null){
        let storedScore= parseInt(localStorage.getItem("hiscore"));
        //if current game time is greater than the stored high score, set it to current game time (degree) and that'll be the new HS
        if(degree > storedScore){
            localStorage.setItem("hiscore", degree.toString());
            highScore= degree;
            newHighScore= true;

        }
        //otherwise, the high score will be the storedScore and there is no new High Score
        else{
            highScore= parseInt(localStorage.getItem("hiscore"));
            newHighScore= false;
        }

    }
    //set high score equal to current game time and make it a string
    else{
        highScore= degree;
        localStorage.setItem("hiscore", highScore.toString());
        newHighScore= true;
    }
    
    if(newHighScore){
        this.add.text(centerX, 70, 'New Best!', { fontFamily: 'Times New Roman', fontSize: '32px', color: '#FF0000' }).setOrigin(0.5);
    }
    //Add Scene text
    this.add.text(centerX, 380, 'You avoided Craddock for ' + degree + 's', { fontFamily: 'Times New Roman', fontSize: '48px', color: '#FF0000' }).setOrigin(0.5);
    this.add.text(centerX, 500 , 'Your Best: ' + highScore, { fontFamily: 'Times New Roman', fontSize: '32px', color: '#FF0000' }).setOrigin(0.5);
    this.add.text(centerX, 650, 'Press Space to Restart', { fontFamily: 'Times New Roman', fontSize: '24px', color: '#FF0000' }).setOrigin(0.5);
    //Add assets used in this scene
    this.add.image(centerX, 132, "cradface");
    this.add.image(140, 500, "heart");
    this.add.image(640, 500, "heart");
    //Play Background Music
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

    //Setup Space Bar to restart player in Play Sceene
    let space= this.input.keyboard.addKey("SPACE");
        space.on('down', () => {
            this.bgm.stop();
            this.scene.start("playScene");
        });
    

}

}