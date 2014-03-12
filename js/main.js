$(document).ready(function(){

	$(window).resize(function(){

		if ($(window).width() <= 640) {  
			$('#sidebar').insertBefore('#content');
		}else{
			$('#content').insertBefore('#sidebar'); 
		}
	});

	$(".box").click(function(e){
	   $(this).find('.meeting-details').slideDown('1000');
	});
	
	$(".training-box").click(function(e){
	   $(this).find('.meeting-details').slideDown('1000');
	});


});