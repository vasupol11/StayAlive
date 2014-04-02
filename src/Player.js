var Player = cc.Sprite.extend({
    ctor: function(x,y) {
    	this.direction = Player.DIR.UP;
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
        switch ( this.direction ) {
        case Player.DIR.UP:
            this.y += Player.MOVE_STEP;
            break;
        case Player.DIR.DOWN:
            this.y -= Player.MOVE_STEP;
            break;
        case Player.DIR.LEFT:
            this.x -= Player.MOVE_STEP;
            break;
        case Player.DIR.RIGHT:
            this.x += Player.MOVE_STEP;
            break;
        }
        this.updatePosition();
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