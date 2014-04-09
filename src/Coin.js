var Coin = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'Images/coin_1.png' );  
        this.movingAction = this.createAnimationAction();
        this.runAction( this.movingAction );
<<<<<<< HEAD
        this.scheduleUpdate();
=======
>>>>>>> origin/master
    },

     createAnimationAction: function() {
	var animation = new cc.Animation.create();
	animation.addSpriteFrameWithFile( 'Images/coin_1.png' );
	animation.addSpriteFrameWithFile( 'Images/coin_2.png' );
	animation.addSpriteFrameWithFile( 'Images/coin_3.png' );
	console.log( animation.getDelayPerUnit() );
	animation.setDelayPerUnit( 0.2 );
	return cc.RepeatForever.create( cc.Animate.create( animation ) );
<<<<<<< HEAD
    },

     closeTo: function( obj ) {
    var myPos = this.getPosition();
    var oPos = obj.getPosition();
    return ( ( Math.abs( myPos.x - oPos.x ) <= 16 ) &&
         ( Math.abs( myPos.y - oPos.y ) <= 16 ) );
=======
>>>>>>> origin/master
    }
});