var GameLayer = cc.LayerColor.extend({
    init: function() {

        this.isDead = false;
        this.score = 0;  
        this.coins = [];
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.addBackground();
        this.addMaze();       
        this.addCoin();
        this.addObstacle();
        this.addPlayer();
        this.addScore();     
        
        this.scheduleUpdate();
        this.setKeyboardEnabled( true );
        
    },

    addBackground: function(){

        this.background1 = new Background();
        this.background1.setPosition(100,200);
        this.addChild(this.background1);

    },

    addMaze: function(){

        this.maze = new Map1();
        this.maze.setPosition( cc.p( 0, 0 ) );
        this.addChild( this.maze );
    
    },

    addCoin: function(){


        this.coin = new Coin();
        this.coin.setPosition(200,300);
        this.coin.setScale(1.5);
        this.addChild(this.coin);

        this.coin2 = new Coin();
        this.coin2.setPosition(300,300);
        this.coin2.setScale(1.5);
        this.addChild(this.coin2);

        this.coins.push(this.coin);
        this.coins.push(this.coin2);

    
    },

    addObstacle: function(){

        this.obstacle = new Obstacle( this.maze );
        this.obstacle.setPosition(300,380);
        this.addChild( this.obstacle);

    },
    
    addPlayer: function(){

        this.player = new Player(this);
        this.player.setPosition(this.player.playerPosition);
        this.addChild( this.player );

    },

    addScore: function(){

        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel );  
    
    },

    onKeyDown: function(e){
        
        if (e == cc.KEY.up)
            this.player.switchDirection(1);
        else if (e == cc.KEY.right)
            this.player.switchDirection(2);
        else if (e == cc.KEY.down)
            this.player.switchDirection(4);
        else if (e == cc.KEY.left)
            this.player.switchDirection(3);
   
    },
    
    onKeyUp: function(e){
      
        
        if (e == cc.KEY.up)
            this.player.switchDirectionRelease(1);
        else if (e == cc.KEY.right)
            this.player.switchDirectionRelease(2);
        else if (e == cc.KEY.down)
            this.player.switchDirectionRelease(4);
        else if (e == cc.KEY.left)
            this.player.switchDirectionRelease(3);
        
   
    },

    fadeOutPlayer: function(){
        this.player.runAction(cc.FadeTo.create(0.2,50));         
    },

    increaseScore: function(){
        this.scoreLabel.setString( this.score += 1 );
    },

    collectCoin: function( obj ){
        if (obj.closeTo(this.player)){
             console.log(this.player.getOpacity());
            this.removeChild(obj);
        }
    },

    hitObstacle: function(obj){
        if (this.isDead == false){
            if (this.player.closeTo(obj)){
                this.isDead = true;
                this.fadeOutPlayer();
                this.player.Velocity = 0;
            }
        }  
        else if (this.isDead == true && this.player.getOpacity() == 50){
            this.increaseScore();
            this.repositionPlayer();
            this.player.setOpacity(255);
            this.player.Velocity = 3;
            this.isDead = false;
        }

        
    },

    repositionPlayer: function(){
        this.player.setPosition(this.player.playerPosition);
    },

    update: function(){
       
        
        for(var i = 0; i < 2; i++){
            this.collectCoin(this.coins[i]);
        }

        this.hitObstacle(this.obstacle);
   
    }

});

var StartScene = cc.Scene.extend({
    
    onEnter: function() {
        
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    
    }

});

