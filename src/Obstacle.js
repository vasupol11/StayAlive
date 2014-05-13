var Obstacle = cc.Sprite.extend({
    ctor: function( ) {
        this._super();
        this.initWithFile( 'Images/obstacle_red.png' ); 
        this.scheduleUpdate(); 
        this.velocity = 10;
        this.direction = Obstacle.DIR.STOP;
        this.directionUpDown = false;
        this.directionLeftRight = false;
        this.leftBoundary = 150;
        this.rightBoundary = 700;
        this.topBoundary = 375;
        this.bottomBoundary = 350;
    },

    move: function( ){
    	var pos = this.getPosition();
        if (this.direction == Obstacle.DIR.STOP){
            this.setPosition( pos.x, pos.y );
        }
    	else if (this.direction == Obstacle.DIR.RIGHT){
    		this.setPosition( pos.x + this.velocity, pos.y );
    	}
    	else if (this.direction == Obstacle.DIR.LEFT){
    		this.setPosition( pos.x - this.velocity, pos.y );
    	}
        else if (this.direction == Obstacle.DIR.UP){
            this.setPosition( pos.x, pos.y +  this.velocity );
        }
        else if (this.direction == Obstacle.DIR.DOWN){
            this.setPosition( pos.x, pos.y - this.velocity);
        }

    },

    checkDirection: function( ){
    	var pos = this.getPosition();
        if (this.directionLeftRight == true){
           if( this.direction == Obstacle.DIR.STOP){
            this.direction = Obstacle.DIR.RIGHT;
           } 
    	   else if( pos.x >= this.rightBoundary){
    	       this.direction = Obstacle.DIR.LEFT;
    	   }
    	   else if (pos.x <= this.leftBoundary){
    	       this.direction = Obstacle.DIR.RIGHT;
    	   }
        }
        else if (this.directionUpDown == true){
            if( this.direction == Obstacle.DIR.STOP){
            this.direction = Obstacle.DIR.UP;
            } 
            if( pos.y >= this.topBoundary){
               this.direction = Obstacle.DIR.DOWN;
            }
            else if (pos.y <= this.bottomBoundary){
               this.direction = Obstacle.DIR.UP;
            } 
        }

    },


    update: function( dt ){
    	this.move();
    	this.checkDirection(); 	
    }
});

Obstacle.DIR = {
    UP: 1,
    RIGHT: 2,
    LEFT: 3,
    DOWN: 4,
    STOP: 0
};