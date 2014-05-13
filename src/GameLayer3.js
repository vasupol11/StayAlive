var GameLayer3 = cc.LayerColor.extend({
    init: function() {

        this.isDead = false; 
        this.coins = [];
        this.obstacles = [];
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.sceneNumber = 3;
        
        this.addBackground(3);
        this.addMaze();       
        this.addCoin();
        this.addObstacle(1);
        this.addPlayer();
        this.addScore();     
        this.scheduleUpdate();
        this.setKeyboardEnabled( true );
        
    },

    addBackground: function(level){

        this.background1 = new Background(level);
        this.addChild(this.background1);

    },

    addMaze: function(){

        this.maze = new Map1(3);
        this.maze.setPosition( cc.p( 0, 0 ) );
        this.addChild( this.maze );
    
    },

    addCoin: function(){

        this.coin = new Coin();
        this.coin.setPosition(105,450);
        this.coin.setScale(1.5);
        this.addChild(this.coin);

        this.coin2 = new Coin();
        this.coin2.setPosition(105,110);
        this.coin2.setScale(1.5);
        this.addChild(this.coin2);

        this.coin3 = new Coin();
        this.coin3.setPosition(635,450);
        this.coin3.setScale(1.5);
        this.addChild(this.coin3);

        this.coin4 = new Coin();
        this.coin4.setPosition(635,110);
        this.coin4.setScale(1.5);
        this.addChild(this.coin4);

        this.coins.push(this.coin);
        this.coins.push(this.coin2);
        this.coins.push(this.coin3);
        this.coins.push(this.coin4);

    },

    inputObstacleDetail: function(name){
        
    },

    addObstacle: function(level){
//////left
        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(635,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);
        
        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(600,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(550,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(500,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(450,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(400,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(350,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(300,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(250,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(200,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);
        
        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(150,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(105,450);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 7;
        this.obstacle.topBoundary = 450;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        
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
        this.scoreLabel.setString( score += 1 );
    },

    collectCoin: function( coin, coinPos ){
        if (coin.closeTo(this.player)){
            this.removeChild(coin);
            this.coins.splice(coinPos, 1);
        }
    },

    removeCoin: function( ){
        for(var i = 0; i < this.coins.length; i++){
            this.removeChild(this.coins[i]);
        }
        this.coins = [];
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
            this.removeCoin();
            this.addCoin();
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
        
        for(var i = 0; i < this.coins.length; i++){
            this.collectCoin(this.coins[i],i);
        }

         for(var i = 0; i < this.obstacles.length; i++){
            this.hitObstacle(this.obstacles[i]);
        }
    }

});

var StartScene3 = cc.Scene.extend({
    
    onEnter: function() {
        
        this._super();
        var layer = new GameLayer3();
        layer.init();
        this.addChild( layer );

    }
});

