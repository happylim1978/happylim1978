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

		//팝업
		var $popup_layer = $('.popup_layer');
		$('.close, .cancel', $popup_layer).on('click', function(){
			$('#mask2').remove();
			$(this).closest('.popup_layer').hide();
			$('body').removeAttr('style');
		});

		var uagent = navigator.userAgent.toLowerCase();
		var ret1 = uagent.search("iphone");
		var ret2 = uagent.search("ipad");
		var ret3 = uagent.search("android");

		if( ret1 > - 1 || ret2 > - 1) {
			$('body').addClass('iphone');
		}
		if( ret3 > - 1) {
			$('body').addClass('android');
		}

	//end
	});
})(jQuery)
