class Play extends Phaser.Scene {
    constructor(){
        super("playScene"); 
    }

    preload(){
        this.load.image("nightroad", "./Assets/NightRoad.png");
        this.load.image("heart", "./Assets/Hbox.png");
        this.load.image("craddock", "./Assets/Craddock.png");
    }

    create(){
        //add the main tilesprite
        this.road= this.add.tileSprite(0, 0, 1500, 1700, "nightroad");

        degree= 0;

        //add sound effects
        this.sound.add("whoosh");
        
        this.bgm= this.sound.add("ominous");

        //setup music configuration
        let musicConfig= {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        //Play Background Music and Add all Sprites to scene
        this.bgm.play(musicConfig);

        this.jude = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'jude_atlas', 'Jude1');

        this.obstacle = this.physics.add.sprite(game.config.width+3700, game.config.height/2 + 100, 'heart');

        this.instructions= this.add.text(centerX, 160, "Dodge Hearts with Up Down Arrows", {fontFamily: "Times New Roman", fontSize: "45px", color: "#FF0000"}).setOrigin(0.5);

        this.moon = this.add.image(660, 30, "moon").setScale(0.5, 0.5);

        this.enemy = this.physics.add.sprite(game.config.width/5 -100, game.config.height/2, 'craddock').setScale(0.5, 0.5);

        //create Run Animation for Jude
        this.anims.create({ 
            key: 'run', 
            frames: this.anims.generateFrameNames('jude_atlas', {      
                prefix: 'Jude',
                start: 1,
                end: 3,
                suffix: '',
                zeroPad: 1
            }), 
            frameRate: 14,
            repeat: -1 
        });
        //setup Jump Animation
        this.anims.create({
            key: 'jump',
            defaultTextureKey: 'jude_atlas',
            frames: [{frame: 'Jude2'}],
        });
        
        //a timer configuration for tracking length of in-game survival; every second and calls back on increase time
        this.delayText= this.add.text(0, 100);  
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: this.degreeBump,
            callbackScope: this,
            loop: true
        });

        //set Jude's collision hit box
        this.jude.body.setSize(this.jude.width/4, this.jude.height/1.5).setOffset(95,90);

        //set heart obstacle's collision hit box
        this.obstacle.setSize(this.obstacle.width/3,this.obstacle.height/3).setOffset(42,45);

        //set Craddock's collision hit box
        this.enemy.setSize(220,400).setOffset(170,90);

        //set Collision parameters
        this.jude.body.onCollide = true; 
        this.jude.setCollideWorldBounds(true);
        this.obstacle.setImmovable();
        this.enemy.setImmovable();
      
        //setup keyboard keys
        cursors= this.input.keyboard.createCursorKeys();

    }

    update(){
        //direction of tilesprite movement
        this.road.tilePositionX +=6;

        //update run animation so that it plays every frame
        this.jude.anims.play('run', true);

        //Jude motion/velocity controls with up-down arrows
        if(cursors.up.isDown) {
            this.jude.body.velocity.y -= 20;
        } else if(cursors.down.isDown){
            this.jude.body.velocity.y += 10;
        }
        
           
        //Display the time on-screen in seconds
        this.delayText.setText('Time: ' + Math.floor(degree) + "s");

          // moon offset rotation
          this.moon.x -= 1;
          if (this.moon.x <= -150) {
              
            this.moon.x = game.config.width + 20;
              
          }
  
          this.instructions.x -= 1;

        // heart movement / resetting
        this.num = Math.floor(Math.random() * Math.floor(150));

        this.obstacle.x -= 6;

        if (this.obstacle.x <= 0) {
            if(this.num == 10){
                this.obstacle.x = game.config.width;
                this.obstacle.y = Math.random() * (650 - 75) + 75;
           }
        }
        //Have Craddock follow Jude for a creepy gameplay effect along y
        this.enemy.y= this.jude.y;

        //move Craddock by 4 along his x-axis when Jude collides with a heart
        if(this.physics.collide(this.jude, this.obstacle)){
            this.enemy.x +=4;
            this.sound.play("whoosh");
            
        }
        //When Craddock gets Jude, transition to game over scene and stop background music
        if(this.physics.collide(this.jude, this.enemy)){
            this.bgm.stop();
            this.jude.anims.stop("run");
            this.sound.play("death");
            this.time.delayedCall(1000, () => { this.scene.start('endScene'); });
        }
       
    }
    //function that increments time passing by
    degreeBump(){
        degree++;
    }

    
}
