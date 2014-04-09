var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        
        this.background1 = new Background();
        this.background1.setPosition(100,200);
        this.addChild( this.background1);

        this.maze = new Map1();
        this.maze.setPosition( cc.p( 0, 40 ) );
        this.addChild( this.maze );
        
        this.coin = new Coin();
        this.coin.setPosition(200,300);
        this.coin.setScale(1.5);
        this.addChild(this.coin);

         this.obstacle = new Obstacle();
        this.obstacle.setPosition(200,200);
        this.addChild( this.obstacle);

        this.player = new Player();
        this.addChild( this.player );
        this.player.setPosition(100,300);

       

        this.scheduleUpdate();
        this.setKeyboardEnabled( true );
        return true;
    },
     onKeyDown: function( e ) {
        if (e == cc.KEY.up)
            this.player.switchDirection(1);
        else if (e == cc.KEY.right)
            this.player.switchDirection(2);
        else if (e == cc.KEY.down)
            this.player.switchDirection(4);
        else if (e == cc.KEY.left)
            this.player.switchDirection(3);
    },
     onKeyUp: function( e ) {
        if (e == cc.KEY.up)
            this.player.switchDirectionRelease(1);
        else if (e == cc.KEY.right)
            this.player.switchDirectionRelease(2);
        else if (e == cc.KEY.down)
            this.player.switchDirectionRelease(4);
        else if (e == cc.KEY.left)
            this.player.switchDirectionRelease(3);
    },
     update: function() {
        if ( this.coin.closeTo( this.player ) ) {
            this.removeChild(this.coin);
        }
        if ( this.player.closeTo( this.obstacle ) ) {
            this.player.setPosition(100,300);
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

