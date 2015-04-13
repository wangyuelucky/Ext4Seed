Ext.define('Seed.view.CalledParenthesizedFunctionC', function(CalledParenthesizedFunctionC){
    
    var _name = 'wy'; // 私有变量，封装
    var _add = function (x, y) {
        return x + y;
    };
    
    return {
    	config:{
	    	name : _name
	    },

	    add : _add,

	    subtract : function (x, y) {
	        return x - y;
	    }	
    };
}());