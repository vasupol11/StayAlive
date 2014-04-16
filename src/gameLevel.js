var gameLevel = cc.Sprite.extend({
    player:null,
    coin:null,
    coin2:null,
    obstacle:null,
    ctor: function() {
        this._super();
        this.setPosition( new cc.Point( 0, 0 ) ); 

        this.addBackground();
        this.addMaze();       
        this.addCoin();
        this.addObstacle();
        this.addPlayer();
    },
    addBackground: function(){

        this.background1 = new Background();
        this.background1.setPosition(100,200);
        this.addChild(this.background1);

    },

    addMaze: function(){

        this.maze = new Map1();
        this.maze.setPosition( cc.p( 0, 40 ) );
        this.addChild(this.maze);
    
    },

    addCoin: function(){

        coin = new Coin();
        coin.setPosition(200,300);
        coin.setScale(1.5);
        this.addChild(coin);

        coin2 = new Coin();
        coin2.setPosition(300,300);
        coin2.setScale(1.5);
        this.addChild(coin2);
    
    },

    getCoin: function(){
    	return coin;
    },

    getCoin2: function(){
    	return coin2;
    },

    getPlayer: function(){
    	return player;
    },

    getObstacle: function(){
    	return obstacle;
    },

    addObstacle: function(){

        obstacle = new Obstacle();
        obstacle.setPosition(300,400);
        this.addChild(obstacle);

    },
    
    addPlayer: function(){

        player = new Player();
        player.setPosition(100,300);
        this.addChild(player);

    }
});