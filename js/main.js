$('input').click(function(){
	$('.fa-envelope').addClass('active');
});

$(document).ready(function(){
	setTimeout(function(){
    	$('.masker').removeClass('masken');
	}, 100);
	setTimeout(function(){
    	$('.mkt h1').removeClass('slidden');
	}, 100);
	setTimeout(function(){
    	$('.mkt p').removeClass('slidden');
	}, 700);
	setTimeout(function(){
    	$('a').removeClass('slidden');
	}, 700);

});