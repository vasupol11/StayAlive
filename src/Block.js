var Block = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'Images/wall.png');  
        this.setAnchorPoint(0.5,0.5);
        this.scheduleUpdate();

    },

    closeTo: function( playerPos ) {
        var myPos = this.getPosition();
        // console.log(myPos.x +" " + myPos.y + "/" + playerPos.x + " " + playerPos.y);
        return ( ( Math.abs( myPos.x - playerPos.x ) <= 20 ) &&
        ( Math.abs( myPos.y - playerPos.y ) <= 20 ) );
        
    }

    //8 mins, i didnt even time this but i am testing how my block should work. I copied code from coin.

    
});