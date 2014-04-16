
var Map1 = cc.Node.extend({
    ctor: function( ) {
        this._super();
        this.WIDTH = 40;
        this.HEIGHT = 25;
        this.arrayOfBlackBlockPosition = new Array();
        this.arrayOfGreenBlockPosition = new Array();
        this.scheduleUpdate();
        this.MAP = [
            '...............................#####....',
            '...............................#---#....',
            '...............................#---#....',
            '.....###########################---####.',
            '.....#................................#.',
            '.....#................................#.',
            '.....#................................#.',
            '.....#................................#.',
            '.#####................................#.',
            '.#----................................#.',
            '.#----................................#.',
            '.#----................................#.',
            '.#----................................#.',
            '.#####................................#.',
            '.....#................................#.',
            '.....#................................#.',
            '.....#................................#.',
            '.....#----#############################.',
            '.....#----#..............................',
            '.....######.............................',
            '........................................',
            '........................................',
            '........................................',
            '........................................',
            '........................................'
    
        ];

        this.createBlackBlock();
        
        
    },

    createBlackBlock: function(){

        for ( var r = 0; r < this.HEIGHT; r++ ) {
            for ( var c = 0; c < this.WIDTH; c++ ) {
                if ( this.MAP[ r ][ c ] == '#' ) {
                    blackBlock = cc.Sprite.create( 'Images/wall.png' );
                    blackBlock.setAnchorPoint( cc.p( 0, 0 ) );
                    blackBlock.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
                    this.arrayOfBlackBlockPosition = (blackBlock.getPosition());
                    this.addChild( blackBlock );
                }
                if ( this.MAP[ r ][ c ] == '-' ) {
                    var greenBlock = cc.Sprite.create( 'Images/start.png' );
                    greenBlock.setAnchorPoint( cc.p( 0, 0 ) );
                    greenBlock.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
                    this.arrayOfGreenBlockPosition = (greenBlock.getPosition());
                    this.addChild( greenBlock );
                }
            }
        }
    
    },

});