$(function () {
	$('.dots').on('click', 'li', function () {
		$('.dot').removeClass('active-dot');
		$(this).addClass('active-dot');
		var attr = $(this).attr('data-tab');
		$('.slide').fadeOut(1200).removeClass('active-slide');
		$('.slider').find('[data-tab="'+attr+'"]').fadeIn(1200).addClass('active-slide');
		
	});
});