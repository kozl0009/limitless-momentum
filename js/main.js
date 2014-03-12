$(document).ready(function(){

	$(window).resize(function(){

		if ($(window).width() <= 640) {  
			$('#sidebar').insertBefore('#content');
		}else{
			$('#content').insertBefore('#sidebar'); 
		}
	});

	var clicked = false;

	$(".box").click(function(e){
	   $(this).find('.meeting-details').slideDown('1000');
	});


});