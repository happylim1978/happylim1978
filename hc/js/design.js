$(document).ready(function(){

	var wh = $(window).height();

	$(window).on('scroll', function(){
		var sTop = $(window).scrollTop();
		if($(window).width() > 1025) {
			if(sTop > 91) {
				$('body').addClass('gnb-fixed');
				$('.header').addClass('fixed');
			} else {
				$('body').removeClass('gnb-fixed');
				$('.header').removeClass('fixed');
			}
		} else {
			if(sTop > $('.header-wrap').height()) {
				$('html').addClass('gnb-fixed');
			} else {
				$('html').removeClass('gnb-fixed');
			}
		}

		var dh = $(document).height();
		var wst = $(window).scrollTop();
		var fh = $('.footer').height();
		if (dh <= wh + wst + fh) {
			$('#go-top').addClass('go-top-bottom');
		} else {
			$('#go-top').removeClass('go-top-bottom');
		}

	})

	var $scrollLink = $('#go-top');
	$scrollLink.on('click', function() {
		$( 'html, body' ).stop(true, true).animate( {
			scrollTop : 0
		}, 500, function () {
		})
		return false;
	});
})

function setMenu(num) {
	setTimeout(function(){
		let selectIndex = num - 1;
		const slideSubMenu = new Swiper('.sub-menu-in', {
			// loop: true
			slidesPerView: 'auto',
			spaceBetween: 30,
			initialSlide: selectIndex,
			breakpoints: {
				768: {
					spaceBetween: 30,
				},
				1024: {
					spaceBetween: 50,
				}
			},

		});
		var $links = $('.sub-menu .item > a');
		$links.eq(selectIndex).addClass('current')
		$links.on('click', function() {
			$(this).closest('.swiper-wrapper').find('.item > a').removeClass('current')
			.end().end().addClass('current')
			slideSubMenu.slideTo($links.index(this), 400)
			;
			return false;
		})
	}, 1) /* 400 -> 1 */
}
