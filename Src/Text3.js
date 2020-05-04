class Text3 extends Phaser.Scene {
    constructor(){
        super("textThreeScene"); 
    }

    create(){
         //Add the third part of the story text, wrap it to width, and configure background music
        this.add.text(centerX, 330, "Craddock McDermott had been sexually abusing both of his daughters throughout their childhoods. And that very day Jude ended their relationship and sent Anna back home, she confronted her father and threatened to expose him to the police. Craddock would immediately put an end to it. Garnering the aid of his older daughter, Craddock managed to hypnotize Anna with his golden pendulum and influence her into taking her own life by having her cut her wrists in their bathtub. Now, Craddock ensared Jude into his ghastly dimension and will stop at nothing to make sure that he succumbs to the same fate. Will you survive the harrowing night road that lies ahead?", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF", wordWrap: { width: 600 }}).setOrigin(0.5);

        this.add.text(centerX, 670, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "28px", color: "#FF0000"}).setOrigin(0.5);

        this.bgm= this.sound.add("moan");

        let musicConfig= {
            mute: false,
            volume: 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        
        this.bgm.play(musicConfig);

        this.input.keyboard.on('keydown', () => {
            this.bgm.stop();
            this.scene.start("playScene");  
        }, this);
    }







}
