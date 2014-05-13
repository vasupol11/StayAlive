var GameLayer = cc.LayerColor.extend({
    init: function() {

        this.isDead = false;  
        this.coins = [];
        this.obstacles = [];
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.sceneNumber = 1;

        var audioEngine = cc.AudioEngine.getInstance();
        audioEngine.playMusic( 'Sound/sound.ogg', true);

        this.addBackground(1);
        this.addMaze();       
        this.addPlayer();
        this.addCoin();
        this.addObstacle(1);
        this.addScore();    
        this.addMessage(); 
        this.scheduleUpdate();
        this.setKeyboardEnabled( true );
        
    },

    addBackground: function(level){

        this.background1 = new Background(level);
        this.addChild(this.background1);

    },

    addMaze: function(){

        this.maze = new Map1(1);
        this.maze.setPosition( cc.p( 0, 0 ) );
        this.addChild( this.maze );
    
    },

    addCoin: function(){

        this.coin = new Coin();
        this.coin.setPosition(450,420);
        this.coin.setScale(1.5);
        this.addChild(this.coin);

        this.coin2 = new Coin();
        this.coin2.setPosition(450,240);
        this.coin2.setScale(1.5);
        this.addChild(this.coin2);

        this.coin3 = new Coin();
        this.coin3.setPosition(705,420);
        this.coin3.setScale(1.5);
        this.addChild(this.coin3);

        this.coins.push(this.coin);
        this.coins.push(this.coin2);
        this.coins.push(this.coin3);
    },

    addObstacle: function(level){

        this.obstacle = new Obstacle(level);
        this.obstacle.setPosition(705,430);
        this.obstacle.directionLeftRight = true;
        this.addChild( this.obstacle);
        this.obstacle.velocity = 4.5;
        this.obstacle.leftBoundary = 450;
        this.obstacle.rightBoundary = 705;
        this.obstacles.push(this.obstacle);

        this.obstacle2 = new Obstacle(level);
        this.obstacle2.setPosition(450,390);
        this.obstacle2.directionLeftRight = true;
        this.addChild( this.obstacle2);
        this.obstacle2.velocity = 4.5;
        this.obstacle2.leftBoundary = 450;
        this.obstacle2.rightBoundary = 705;
        this.obstacles.push(this.obstacle2);

        this.obstacle3 = new Obstacle(level);
        this.obstacle3.setPosition(705,340);
        this.obstacle3.directionLeftRight = true;
        this.addChild( this.obstacle3 );
        this.obstacle3.velocity = 5;
        this.obstacle3.leftBoundary = 450;
        this.obstacle3.rightBoundary = 705;
        this.obstacles.push(this.obstacle3);

        this.obstacle4 = new Obstacle(level);
        this.obstacle4.setPosition(450,290);
        this.obstacle4.directionLeftRight = true;
        this.addChild( this.obstacle4 );
        this.obstacle4.velocity = 4.5;
        this.obstacle4.leftBoundary = 450;
        this.obstacle4.rightBoundary = 705;
        this.obstacles.push(this.obstacle4);

        this.obstacle5 = new Obstacle(level);
        this.obstacle5.setPosition(705,240);
        this.obstacle5.directionLeftRight = true;
        this.addChild( this.obstacle5 );
        this.obstacle5.velocity = 3.8;
        this.obstacle5.leftBoundary = 450;
        this.obstacle5.rightBoundary = 705;
        this.obstacles.push(this.obstacle5);

    },
    
    addPlayer: function(){

        this.player = new Player(this);
        this.addChild( this.player );

    },

    addScore: function(){

        this.scoreLabel = cc.LabelTTF.create( score, 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel );  
    
    },

    addMessage: function(){
        
        this.messageLabel = cc.LabelTTF.create( 
                        "Collect all the coins and \nget to the pink square. " +
                        "Your number \nof deaths will be recorded."  , 'Arial'
                        , 20 );
        this.messageLabel.setPosition( new cc.Point(220,350 ) );
        this.addChild( this.messageLabel ); 
    
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

var StartScene = cc.Scene.extend({
    
    onEnter: function() {
        
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    
    }

});

