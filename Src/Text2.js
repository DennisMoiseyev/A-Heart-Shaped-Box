class Text2 extends Phaser.Scene {
    constructor(){
        super("textTwoScene"); 
    }

    create(){
        //Add the second part of the story text, wrap it to width, and configure background music

        this.add.text(centerX, 230, "A malevolent spirit soon began haunting Jude in his home, an old man with deep black holes in his eyes donning that exact suit Jude had purchased. The ghost was that of Craddock McDermott, the priestly hypnotherapist father of Jude’s ex girlfriend, Anna McDermott, whom he always liked to call Florida. Jude began to believe the haunting was retribution for Anna’s suicide which he always blamed himself for and guessed that Craddock did too, since she killed herself the day he sent her packing back home.", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF", wordWrap: { width: 600 }}).setOrigin(0.5);

        this.add.text(centerX, 575, "However, it soon came to light that the online auction was orchestrated by Anna’s sister as a way of honoring the dying wish of her father (eliminating Jude along with those close to him). The circumstances around Anna’s death were also far more sinister than Jude was originally led to believe.", {fontFamily: "Times New Roman", fontSize: "32px", color: "#FFFFFF", wordWrap: { width: 600 }}).setOrigin(0.5);

        this.add.text(575, 680, "Press any key to continue", {fontFamily: "Times New Roman", fontSize: "28px", color: "#FF0000"}).setOrigin(0.5);

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
            
            this.scene.start("textThreeScene");  
        }, this);




    }
}
