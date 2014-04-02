var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.back = new Background();
        this.back.setPosition(100,200);
        this.back.setScale(1.5);
        this.addChild( this.back);

        this.player = new Player(10*40 + 20, 6*40 + 20);
        this.player.setPosition( new cc.Point( screenWidth / 2, screenHeight / 2 ) );
        this.addChild( this.player );

        this.player.scheduleUpdate();
        this.setKeyboardEnabled( true );
        return true;
    },
     onKeyDown: function( e ) {
        switch( e ) {
        case cc.KEY.left:
            this.player.setDirection( Player.DIR.LEFT );
            break;
        case cc.KEY.right:
            this.player.setDirection( Player.DIR.RIGHT );
            break;
        case cc.KEY.up:
            this.player.setDirection( Player.DIR.UP );
            break;
        case cc.KEY.down:
            this.player.setDirection( Player.DIR.DOWN );
            break;
        }
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

