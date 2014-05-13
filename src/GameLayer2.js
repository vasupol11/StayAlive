var GameLayer2 = cc.LayerColor.extend({
    init: function() {

        this.isDead = false; 
        this.coins = [];
        this.obstacles = [];
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.sceneNumber = 2;
        
        this.addBackground(2);
        this.addMaze();       
        this.addCoin();
        //this.addObstacle(2);
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

        this.maze = new Map1(2);
        this.maze.setPosition( cc.p( 0, 0 ) );
        this.addChild( this.maze );
    
    },

    addCoin: function(){
    },

    inputObstacleDetail: function(name){
        
    },

    addObstacle: function(level){
//////left
        this.obstacle2 = new Obstacle( level );
        this.obstacle2.setPosition(320,370);
        this.obstacle2.directionLeftRight = true;
        this.obstacle2.velocity = 2;
        this.obstacle2.leftBoundary = 250;
        this.obstacle2.rightBoundary = 320;
        this.addChild( this.obstacle2 );
        this.obstacles.push(this.obstacle2);

        this.obstacle3 = new Obstacle( level );
        this.obstacle3.setPosition(250,330);
        this.obstacle3.directionLeftRight = true;
        this.obstacle3.velocity = 2;
        this.obstacle3.leftBoundary = 250;
        this.obstacle3.rightBoundary = 320;
        this.addChild( this.obstacle3 );
        this.obstacles.push(this.obstacle3);

        this.obstacle4 = new Obstacle( level );
        this.obstacle4.setPosition(320,290);
        this.obstacle4.directionLeftRight = true;
        this.obstacle4.velocity = 2;
        this.obstacle4.leftBoundary = 250;
        this.obstacle4.rightBoundary = 320;
        this.addChild( this.obstacle4 );
        this.obstacles.push(this.obstacle4);

        this.obstacle5 = new Obstacle( level );
        this.obstacle5.setPosition(250,250);
        this.obstacle5.directionLeftRight = true;
        this.obstacle5.velocity = 2;
        this.obstacle5.leftBoundary = 250;
        this.obstacle5.rightBoundary = 320;
        this.addChild( this.obstacle5 );
        this.obstacles.push(this.obstacle5);

        this.obstacle5 = new Obstacle( level );
        this.obstacle5.setPosition(140,250);
        this.obstacle5.directionLeftRight = true;
        this.obstacle5.velocity = 2;
        this.obstacle5.leftBoundary = 140;
        this.obstacle5.rightBoundary = 210;
        this.addChild( this.obstacle5 );
        this.obstacles.push(this.obstacle5);

        this.obstacle6 = new Obstacle( level );
        this.obstacle6.setPosition(210,210);
        this.obstacle6.directionLeftRight = true;
        this.obstacle6.velocity = 2;
        this.obstacle6.leftBoundary = 140;
        this.obstacle6.rightBoundary = 210;
        this.addChild( this.obstacle6 );
        this.obstacles.push(this.obstacle6);

        this.obstacle7 = new Obstacle( level );
        this.obstacle7.setPosition(140,170);
        this.obstacle7.directionLeftRight = true;
        this.obstacle7.velocity = 2;
        this.obstacle7.leftBoundary = 140;
        this.obstacle7.rightBoundary = 210;
        this.addChild( this.obstacle7 );
        this.obstacles.push(this.obstacle7);
///// right
        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(590,170);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 590;
        this.obstacle.rightBoundary = 660;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(660,210);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 590;
        this.obstacle.rightBoundary = 660;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(590,250);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 590;
        this.obstacle.rightBoundary = 660;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(500,250);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 500;
        this.obstacle.rightBoundary = 570;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(570,290);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 500;
        this.obstacle.rightBoundary = 570;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(500,330);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 500;
        this.obstacle.rightBoundary = 570;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(570,370);
        this.obstacle.directionLeftRight = true;
        this.obstacle.velocity = 2;
        this.obstacle.leftBoundary = 500;
        this.obstacle.rightBoundary = 570;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);
////buttom
        
        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(410,110);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 2;
        this.obstacle.topBoundary = 180;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(450,180);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 2;
        this.obstacle.topBoundary = 180;
        this.obstacle.bottomBoundary = 110;
        this.addChild( this.obstacle );
        this.obstacles.push(this.obstacle);

        this.obstacle = new Obstacle( level );
        this.obstacle.setPosition(370,180);
        this.obstacle.directionUpDown = true;
        this.obstacle.velocity = 2;
        this.obstacle.topBoundary = 180;
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

var StartScene2 = cc.Scene.extend({
    
    onEnter: function() {
        
        this._super();
        var layer = new GameLayer2();
        layer.init();
        this.addChild( layer );

    }
});

