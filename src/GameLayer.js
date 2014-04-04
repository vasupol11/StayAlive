var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background1 = new Background();
        this.background1.setPosition(100,200);
        // this.background1.setScale(1.5);
        this.addChild( this.background1);

        this.coin = new Coin();
        this.coin.setPosition(100,200);
        this.coin.setScale(1.5);
        this.addChild( this.coin);

        this.obstacle = new Obstacle();
        this.obstacle.setPosition(200,200);
        this.addChild( this.obstacle);

        this.player = new Player(screenWidth / 2,screenHeight / 2);
        this.addChild( this.player );

        this.player.scheduleUpdate();
        this.setKeyboardEnabled( true );
        return true;
    },
     onKeyDown: function( e ) {
        if (e === cc.KEY.left)
            this.player.setDirection( Player.DIR.LEFT );
        if (e === cc.KEY.right)
            this.player.setDirection( Player.DIR.RIGHT );
        if (e === cc.KEY.up)
            this.player.setDirection( Player.DIR.UP );
        if (e === cc.KEY.down)
            this.player.setDirection( Player.DIR.DOWN );
    },
     onKeyUp: function( e ) {
         this.player.setDirection( Player.DIR.STILL );
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

