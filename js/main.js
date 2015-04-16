$('input').click(function(){
	$('.fa-envelope').addClass('active');
});

$(document).ready(function(){
	setTimeout(function(){
    	$('.masker').removeClass('masken');
	}, 200);
	setTimeout(function(){
    	$('.mkt h1').removeClass('slidden');
	}, 1500);
	setTimeout(function(){
    	$('.mkt p').removeClass('slidden');
	}, 3500);
	setTimeout(function(){
    	$('a').removeClass('slidden');
	}, 5000);

});