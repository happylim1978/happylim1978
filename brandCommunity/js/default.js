(function($){
	//ready
	$(document).ready(function(){
		function mask_view(){
			var $mask = $('.mask');
			if( $mask.length > 0 ){
				$('.mask').animate({opacity:0}, 'fast', function(){
					$(this).remove();
				});
			}
			else{
				$('body').append("<div id='mask' class='mask' style='opacity:0.5;'></div>");
				$('#mask').css('height', $(document).height());

			}
		};

		var
			$btn = $('#menu'),
			$btn_close = $('#menu_close'),
			$btn_mask = $('#mask'),
			$menu = $btn.parent().next();
		;

		$btn.on('click', function(){
			$('html').addClass('menu_on');
			$menu.show()
			$menu.stop().animate({
				right : 0
			}, 'slow');
			mask_view();
			if( $(window).width() > 1000 ) $('#nav_sub').css('height', $(document).height());
			return false;
		});

		$btn_close.on('click', function(){
			$menu.stop().animate({
				right : -340
			}, 'fast', function(){
				$(this).hide();
				mask_view();
				$('html').removeClass('menu_on');
			});

			return false;
		});

		$(document).on('touchstart touchmove', '#mask', function(e){
			if( e.type == 'touchmove' ) e.preventDefault();
			$menu.stop().animate({
				right : -340
			}, 'fast', function(){
				$(this).hide();
				mask_view();
				$('html').removeClass('menu_on');
			});
		});

		//top이동
		$('#top').on('click', function(){
			$('html, body').stop().animate({
				'scrollTop' : 0
			}, 'fast');
		});

		//팝업
		var $popup_layer = $('.popup_layer');
		$('.close, .cancel', $popup_layer).on('click', function(){
			$('#mask2').remove();
			$(this).closest('.popup_layer').hide();
			$('body').removeAttr('style');
		});

		//별점
		var $starbox = $('.starbox');
		$starbox.each(function(){
			var
				$this = $(this),
				$this_btn = $this.find('>button')
			;
			$this_btn.on('click', function(){
				$this_btn.removeClass('check');
				$(this).prevAll().addClass('check').end().addClass('check');
			});
		});

		var uagent = navigator.userAgent.toLowerCase();
		var ret1 = uagent.search("iphone");
		var ret2 = uagent.search("ipad");
		var ret3 = uagent.search("android");
		var ret4 = uagent.search("sm-n900s");

		if( ret1 > - 1 || ret2 > - 1) {
			$('body').addClass('iphone');
		}
		if( ret3 > - 1) {
			$('body').addClass('android');
		}
		if( ret4 > - 1) {
			$('body').addClass('note');
		}

		/*$('header h1.h1').append('<span id="color_change" style="font-size:12px;"><button>?뚮옉</button><button>?뱀깋</button><button>鍮④컯</button><button>蹂대씪</button><button>?몃옉</button></span>')

			$('#color_change button').on('click', function(){
				var $wrap = $('body').removeClass('colorCode1 colorCode2 colorCode3 colorCode4 colorCode5');
				if( $(this).index() == 0 ) $('body').addClass('colorCode1');
				if( $(this).index() == 1 ) $('body').addClass('colorCode2');
				if( $(this).index() == 2 ) $('body').addClass('colorCode3');
				if( $(this).index() == 3 ) $('body').addClass('colorCode4');
				if( $(this).index() == 4 ) $('body').addClass('colorCode5');
			});*/


	//end
	});
})(jQuery)




/* 탭메뉴 */
$.fn.tabs = function(){
	return this.each(function(){
		var
			$this = $(this),
			$this_li = $(this).find('>li'),
			$con = $(this).parent().find('.subTab')
		;

		$this_li.first().addClass('on');
		$con.first().show();

		$this_li.on('click', function(e){
			$(this).siblings().removeClass('on').end().addClass('on');
			$con.hide().eq($this_li.index(this)).show();
			e.preventDefault();
		});

	});
};


/* 팝업 */
function popup_open(target){

	var $target = $('[data-popup-name="'+target+'"]');
	var space_left = ($target.outerWidth()/2) * (-1);
	var v_space = $(window).outerWidth() > 640 ? 75 : 45;
	$target.css({
		'top' : ($(window).scrollTop() + v_space) * 1.25,
		'marginLeft' : space_left
	});
	$target.show();
	$('body').append('<div class="mask2" id="mask2"></div>')
	$('#mask2').css('height', $(document).outerHeight() + 30 );
	$('body').css('height', $(document).outerHeight());
};

/* 나의 강의실 */
function myrooms(p_goCnt){
	var $roomlist = $('#roomlist');
	var $roomlist_list = $('#roomlist > .item');
	$roomlist_list.on('click', function(e){
		$(this).siblings().removeClass('on').end().addClass('on');
		e.preventDefault();
	});

	var $notice_box = $('#myroom_box');
	function size(){
		var margin = $notice_box.prev().outerHeight() + $notice_box.next().outerHeight();
		var window_size = $(window).outerHeight() - margin;
		var body_size = $(document).outerHeight() - margin;

		if( window_size < body_size ) {
			$notice_box.css('height', window_size);
		}
		else{
			$notice_box.css('height', body_size);
		}
	}

	function unsize() {
		$notice_box.css('height', 'auto');
	}

	var $roomlist = $('#roomlist');
	$('#button').on('click', function(){
		$roomlist.unslick();
	});

	var go_count = (p_goCnt == "") ? 0 : p_goCnt;

	function slideOn(){
		if( $roomlist.find('.item.on').index() >= 4 ) {
			go_count = 4;
		}

		$roomlist.slick({
			infinite : false,
			slidesToShow : 4,
			slidesToScroll : 4,
		})
		.slickGoTo(go_count);
	}

	function slideOff(){
		$roomlist.unslick();
	}

	var window_width = $(window).outerWidth()
	if( window_width >= 980 ){
		size();
	}
	if(window_width < 980){
		slideOn();
	}

	$(window).on('resize', function(){
		slideOff();
		if( $(window).outerWidth() >= 980 ){
			size();
		}
		else if($(window).outerWidth() < 980){
			slideOn();
			unsize();
		}
	});
};