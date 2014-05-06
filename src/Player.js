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
        this.safeZone = false;
        this.safenum = 0;

        this.game = game;
        this.playerPosition = new cc.Point( 100, 280 );

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

    isAtGreenBlock: function(nextPos){

        for( var i =0 ; i < this.game.maze.greenBlocks.length ; i++ ) {
            if( this.game.maze.greenBlocks[i].closeTo( nextPos ) == true) {
                if( i >= Math.floor(i/9) * 9 && i <= ((Math.floor(i/9) + 1) * 9)-1)
                this.safenum = Math.floor(i/9) * 9 + 4;
                return true;

            }
        }
        return false;
    
    },

    update: function( dt ) {   
        
        var pos = this.getPosition();
        var nextPos = pos;
        if (this.isUp ){
            nextPos = cc.p( pos.x, pos.y + Velocity);
            if (  !this.isBlocksCloseTo(nextPos)) {
                this.setPosition( nextPos );
            }
            if ( this.isAtGreenBlock( nextPos)) {
                this.playerPosition = this.game.maze.greenBlocks[this.safenum].getPosition();
            }
        }
        
        else if (this.isRight ){
            nextPos = cc.p( pos.x + Velocity, pos.y );
            if ( !this.isBlocksCloseTo(nextPos)  ) {
                this.setPosition( nextPos );
            }
            if ( this.isAtGreenBlock(nextPos)) {
                this.playerPosition = this.game.maze.greenBlocks[this.safenum].getPosition();

            }
        }
        
        else if ( this.isDown ){
            nextPos = cc.p ( pos.x, pos.y - Velocity );
            if ( !this.isBlocksCloseTo(nextPos) ) {
                this.setPosition( nextPos );
            }
            if ( this.isAtGreenBlock(nextPos)) {
                this.playerPosition = this.game.maze.greenBlocks[this.safenum].getPosition();
            }
        }
        
        else if ( this.isLeft ){
            nextPos = cc.p (pos.x - Velocity, pos.y );
            if (  !this.isBlocksCloseTo(nextPos) ) {
                this.setPosition( nextPos );
            }
            if ( this.isAtGreenBlock(nextPos)) {
                this.playerPosition = this.game.maze.greenBlocks[this.safenum].getPosition();
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


Velocity = 3;
Player.DIR = {
    UP: 1,
    RIGHT: 2,
    LEFT: 3,
    DOWN: 4
};