Ext.define('Seed.view.CalledFunctionC', function(CalledFunctionC){
    
    var _name = 'wy'; // 私有变量，封装
    
    return {
    	config:{
	    	name : _name
	    },

	    add : function (x, y) {
	        return x + y;
	    },

	    subtract : function (x, y) {
	        return x - y;
	    }	
    };
}());