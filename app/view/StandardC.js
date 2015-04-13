Ext.define('Seed.view.StandardC', {
	alias: 'StandardC',
    config:{
    	name : 'wy'
    },
    
    add : function (x, y) {
        return x + y;
    },

    subtract : function (x, y) {
        return x - y;
    }
});