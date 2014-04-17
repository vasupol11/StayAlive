var Player = cc.Sprite.extend({
    ctor: function( game ) {
    	this.direction = Player.DIR.STILL;
        this._super();
        this.initWithFile( 'Images/stayaliveboy.png' );
        this.setAnchorPoint( cc.p(0.5, 0.5) );
        this.isUp = false;
        this.isRight = false;
        this.isLeft = false;
        this.isDown = false;
        this.playermove = 3;
        this.game = game;

        this.scheduleUpdate();
    },
    
    switchDirection: function(direction) {
    if ( direction == 1 ) {
        this.isUp = true;
        //this.setRotation( 0 );
    }
    else if( direction == 2 ){
        this.isRight = true;
        //this.setRotation( 90 );
    }
    else if( direction == 4 ){
        this.isDown = true;
        //this.setRotation( 180 );
    }
    else if( direction == 3 ){
        this.isLeft = true;
        //this.setRotation( 270 );
}

    },
    
    switchDirectionRelease: function(direction) {
        if ( direction == 1 )
            this.isUp = false;
        else if ( direction == 2)
            this.isRight = false;
        else if (direction == 4)
            this.isDown = false;
        else if (direction == 3)
            this.isLeft = false;
    },

    isBlocksCloseTo: function(nextPos){
        
        
        for( var i =0 ; i < this.game.maze.blocks.length ; i++ ) {
            if( this.game.maze.blocks[i].closeTo( nextPos ) == true) {
                return true;
            }
        }
        return false;

    
    },


    update: function( dt ) {   
        
        var pos = this.getPosition();
        var nextPos = pos;
        if (this.isUp ){
            nextPos = cc.p( pos.x, pos.y + 3);
            if ( pos.y < screenHeight-35 && !this.isBlocksCloseTo(nextPos)) {
                this.setPosition( nextPos );
            }
        }
        
        else if (this.isRight ){
            nextPos = cc.p( pos.x + 3, pos.y );
            if ( pos.x < screenWidth-35 && !this.isBlocksCloseTo(nextPos)  ) {
                this.setPosition( nextPos );
            }
        }
        
        else if ( this.isDown ){
            nextPos = cc.p ( pos.x, pos.y -3 );
            if ( pos.y > 35 && !this.isBlocksCloseTo(nextPos) ) {
                this.setPosition( nextPos );
            }
        }
        
        else if ( this.isLeft ){
            nextPos = cc.p (pos.x - 3, pos.y );
            if ( pos.x > 35 && !this.isBlocksCloseTo(nextPos) ) {
                this.setPosition( nextPos );
            }
        
        }

    },
    
    closeTo: function( obj ) {
    var myPos = this.getPosition();
    var oPos = obj.getPosition();
    return ( ( Math.abs( myPos.x - oPos.x ) <= 25 ) &&
         ( Math.abs( myPos.y - oPos.y ) <= 25 ) );
    }
   
});


//Player.STARTPOINT = cc.p()
Player.DIR = {
    UP: 1,
    RIGHT: 2,
    LEFT: 3,
    DOWN: 4
};