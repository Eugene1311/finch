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
 		$('body,html').animate({scrollTop:200},800);
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
				//console.log(result);
				html += '<div>' + result + '</div>';
			});
			$('.gallery').html(html).hide();
			$('.gallery').slideDown('200');
			$('.gallery>div').each(function(index){
				console.log($(this).width());
				width = $(this).width();
				if (width > 285) {
					$(this).addClass('col-2')
				} else {
					$(this).addClass('col-1')
				}
			});
			if (currentCategory = 'conceptual') {
				 $('.gallery>div').css({/*'display':'inline-block',*/
//									   'vertical-align':'top',
									   'margin':'0 0.8% 10px 0'});
				$('.gallery>div:nth-child(4)').css({'float':'right','margin':'0'});
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