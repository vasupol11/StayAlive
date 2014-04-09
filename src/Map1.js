var Map1 = cc.Node.extend({
    ctor: function() {
        this._super();
        this.WIDTH = 40;
        this.HEIGHT = 25;
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
            '....##................................#.',
            '....#.................................#.',
            '....##----#############################.',
            '.....#----#..............................',
            '.....######.............................',
            '........................................',
            '........................................',
            '........................................',
            '........................................',
            '........................................'
    
        ];
        for ( var r = 0; r < this.HEIGHT; r++ ) {
        for ( var c = 0; c < this.WIDTH; c++ ) {
        if ( this.MAP[ r ][ c ] == '#' ) {
            var s = cc.Sprite.create( 'Images/wall.png' );
            s.setAnchorPoint( cc.p( 0, 0 ) );
            s.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
            this.addChild( s );
        }
        if ( this.MAP[ r ][ c ] == '-' ) {
            var s = cc.Sprite.create( 'Images/start.png' );
            s.setAnchorPoint( cc.p( 0, 0 ) );
            s.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
            this.addChild( s );
        }
        }
    }
        // ...  code for drawing the maze has be left out
 
    }
});