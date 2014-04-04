var Player = cc.Sprite.extend({
    ctor: function( x,y ) {
    	this.direction = Player.DIR.STILL;
        this._super();
        this.initWithFile( 'Images/stayaliveboy.png' );
        this.x = x;
        this.y = y;
        this.updatePosition();
    },
    updatePosition: function() {
        this.setPosition( cc.p( this.x, this.y ) );
    },
    setDirection: function( dir ) {
        this.direction = dir;
    },
    update: function( dt ) {
        if (this.direction === Player.DIR.UP)
            this.y += Player.MOVE_STEP;
        if (this.direction === Player.DIR.DOWN)
            this.y -= Player.MOVE_STEP;
        if (this.direction === Player.DIR.RIGHT)
            this.x += Player.MOVE_STEP;
        if (this.direction === Player.DIR.LEFT)
            this.x -= Player.MOVE_STEP;
        // if (this.direction === Player.DIR.STILL)
        //     this.x += 0;
            
            this.updatePosition();

        
        // switch ( this.direction ) {
        // case Player.DIR.UP:
        //     this.y += Player.MOVE_STEP;
        //     // break;
        // case Player.DIR.DOWN:
        //     this.y -= Player.MOVE_STEP;
        //     // break;
        // case Player.DIR.LEFT:
        //     this.x -= Player.MOVE_STEP;
        //     this.setFlippedX( false);
        //     // this.setRotation( 180 );
        //     // break;
        // case Player.DIR.RIGHT:
        //     this.x += Player.MOVE_STEP;
        //     this.setFlippedX( true );
        //     // break;
        // }
        
    },
   
});
Player.MOVE_STEP = 3;
Player.DIR = {
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4,
    STILL: 0
};