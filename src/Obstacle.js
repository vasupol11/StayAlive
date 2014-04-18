var Obstacle = cc.Sprite.extend({
    ctor: function( ) {
        this._super();
        this.initWithFile( 'Images/obstacle_red.png' ); 
        this.scheduleUpdate(); 
        this.velocity = 10;
        this.direction = Obstacle.DIR.RIGHT;
    },

    move: function( ){
    	var pos = this.getPosition();
    	if (this.direction == Obstacle.DIR.RIGHT){
    		this.setPosition( pos.x + this.velocity, pos.y );
    	}
    	else if (this.direction == Obstacle.DIR.LEFT){
    		this.setPosition( pos.x - this.velocity, pos.y );
    	}

    },

    checkDirection: function( ){
    	var pos = this.getPosition();
    	if( pos.x >= Obstacle.BOUNDARY.RIGHT){
    		this.direction = Obstacle.DIR.LEFT;
    	}
    	
    	else if (pos.x <= Obstacle.BOUNDARY.LEFT){
    		this.direction = Obstacle.DIR.RIGHT;
    	}
    },


    update: function( dt ){
    	this.move();
    	this.checkDirection(); 	
    }
});
Obstacle.BOUNDARY = {
	LEFT: 150,
	RIGHT: 700
};
Obstacle.DIR = {
    UP: 1,
    RIGHT: 2,
    LEFT: 3,
    DOWN: 4
};