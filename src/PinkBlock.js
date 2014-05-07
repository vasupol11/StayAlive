var PinkBlock = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'Images/finish.png');  
        this.setAnchorPoint(0.5,0.5);
        this.scheduleUpdate();

    },

    closeTo: function( playerPos ) {
        var myPos = this.getPosition();
        return ( ( Math.abs( myPos.x - playerPos.x ) <= 20 ) &&
        ( Math.abs( myPos.y - playerPos.y ) <= 20 ) );
    }
    
});