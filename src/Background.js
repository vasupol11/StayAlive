var Background = cc.Sprite.extend({
    ctor: function(level) {
        this._super();
        this.pickImages(level);
        this.setPosition(cc.p(400,280));
    },

    pickImages: function( level ){
    	switch (level){
    		case 1:
    			this.initWithFile( 'Images/pinkBlueBG.png' );
    			break;
    		case 2:
    			this.initWithFile( 'Images/orangeGrayBG.png')
    	}
    }
});