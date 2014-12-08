$(function () {
	$('.dots').on('click', 'li', function () {
		$('.dot').removeClass('active-dot');
		$(this).addClass('active-dot');
		var attr = $(this).attr('data-tab');
		$('.slide').fadeOut('slow').removeClass('active-slide');
		$('.slider').find('[data-tab="'+attr+'"]').fadeIn(600).addClass('active-slide');
		
	});
});