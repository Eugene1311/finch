$(function () {
	$('.dots').on('click', 'li', function () {
		$('.dot').removeClass('active-dot');
		$(this).addClass('active-dot');
		var attr = $(this).attr('data-tab');
		$('.slide').fadeOut(1200).removeClass('active-slide');
		$('.slider').find('[data-tab="'+attr+'"]').fadeIn(1200).addClass('active-slide');
	});
	$(window).scroll(function() {
 		if($(this).scrollTop() > 500) {
		$('#toTop').fadeIn(1000);
		} else {
 		$('#toTop').fadeOut(600);
 		}
 	});
 	$('#toTop').click(function() {
 		$('body,html').animate({scrollTop:0},800);
 	});
//	$('#banner-slide').bjqs({
//            animtype      : 'slide',
//            height        : 320,
//            width         : 3000 ,
//            responsive    : true,
//            randomstart   : true
//    });
});