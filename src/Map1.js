
var Map1 = cc.Node.extend({
    ctor: function( ) {
        this._super();
        this.WIDTH = 40;
        this.HEIGHT = 25;
        this.blocks = [];
        this.greenBlocks = [];
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
        

        // this.MAP = [
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '...................#....................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
        //     '........................................',
            
        // ];

        this.createBlackBlock();
        
        //LvL 1 90% 50 mins
    },

    createBlackBlock: function(){

        for ( var r = 0; r < this.HEIGHT; r++ ) {
            for ( var c = 0; c < this.WIDTH; c++ ) {
                if ( this.MAP[ r ][ c ] == '#' ) {
                    blackBlock = new Block();
                    blackBlock.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
                    this.arrayOfBlackBlockPosition = (blackBlock.getPosition());
                    this.addChild( blackBlock );
                    this.blocks.push( blackBlock );
                }
                if ( this.MAP[ r ][ c ] == '-' ) {
                    greenBlock = new GreenBlock();
                    greenBlock.setPosition( cc.p( c * 20, (this.HEIGHT - r -1) * 20 ) );
                    this.arrayOfGreenBlockPosition = (greenBlock.getPosition());
                    this.addChild( greenBlock );
                    this.greenBlocks.push( greenBlock );
                }
            }
        }
    
    },

});