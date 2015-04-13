Ext.define('Seed.view.FunctionC', function(FunctionC){
    
    var _name = 'ouc'; 
    
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
});