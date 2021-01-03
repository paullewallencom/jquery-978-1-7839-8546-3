$(document).ready(function(){
	$('#beach').cycle({ 
    	fx: 'custom', 
    	cssBefore: {  
    	    top:  0, 
        	left: 0, 
	        width: 0, 
	        height: 0,  
	        zIndex: 1  
	    }, 
	    animIn:  {  
	        width: 200, 
	        height: 200  
	    }, 
	    animOut: {  
	        top:  200, 
	        left: 200, 
	        width: 0, 
	        height: 0 
	    }, 
	    cssAfter: {  
	        zIndex: 0  
	    } 
	});
})