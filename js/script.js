var categories = [];
$(function () {
	$('.dots').on('click', 'li', function () {
		$('.dot').removeClass('active-dot');
		$(this).addClass('active-dot');
		var attr = $(this).attr('data-tab');
		$('.slide').fadeOut(1200).removeClass('active-slide');
		$('.slider').find('[data-tab="' + attr + '"]').fadeIn(1200).addClass('active-slide');
	});
	//To-top arrow
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
	//Gallery
	$('.main-menu li').each(function(i){
		categories.push($(this).attr('class').split('-').slice(-1)[0].split(' ').slice(0)[0]);	
	});
	startHtml = $('.gallery').html();
	for(i=0; i<categories.length; i++) {
		$(".cat-item-" + categories[i]).click(function(e){
			$('.gallery').html(startHtml);
			e.preventDefault();
			$('.portfolio-item').hide();
			var currentCategory = $(this).attr('class').split('-').slice(-1)[0].split(' ').slice(0)[0] ,
				html = "";
			console.log(currentCategory);
			$('[data-type="'+currentCategory+'"]').each(function(index) {
				var result = $(this).html();
				html += '<div>' + result + '</div>';
			});
			$('.gallery').html(html);
			$('.gallery>div').each(function(index){
				console.log($(this).width());
				width = $(this).width();
				if (width > 285) {
					$(this).addClass('col-2')
				} else {
					$(this).addClass('col-1')
				}
			});
//			$('.gallery>div img').hide().slideDown('slow');
			$('.gallery').hide().slideDown('slow','linear');
			if (currentCategory = 'conceptual') {
				$('.gallery>div').css({'margin-bottom':'10px'});
				$('.gallery>div:nth-child(4)').css({'position':'absolute',
													'right':'0',
													'margin':'0'});
				$('.gallery>div:nth-child(2)').css({'padding-bottom':'0.95%',
													'margin-bottom':'0'});
				$('.gallery>div:nth-child(3)').css('padding-bottom', '0.1%');
			}		
			$('.main-menu li').removeClass('active');
			$(this).addClass("active");
		});
	}
	$('.all').click(function(e){
		e.preventDefault();
		$('.gallery').html(startHtml).hide().show('200');
		$('.main-menu li').removeClass('active');
		$(this).addClass("active");
	});
});