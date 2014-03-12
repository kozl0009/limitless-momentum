$(document).ready(function(){

	//$(window).resize(function(){

		if ($(window).width() <= 640) {  
			$('#sidebar').insertBefore('#content');
		}else{
			$('#content').insertBefore('#sidebar'); 
		}
	//});
	
	$(window).resize(function(){

		if ($(window).width() <= 640) {  
			$('#sidebar').insertBefore('#content');
		}else{
			$('#content').insertBefore('#sidebar'); 
		}
	});

	$(".box").click(function(e){
	   $(this).find('.meeting-details').toggle();
	});
	
	$(".training-box").click(function(e){
	   $(this).find('.meeting-details').toggle();
	});
	
	$(".button").click(function(e){
	   //do nothing
	});


});