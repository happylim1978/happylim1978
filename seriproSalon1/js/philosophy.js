$(document).ready(function(){
	function sc(){
		var _fm = $('.float-menu');
		var _height = $('.philosophy-box .header').height() + $('.ui-header > .header').height();
		if( $(window).width() >= 767 ){
			if( $(window).scrollTop() > _height && !_fm.hasClass('stick') ){
				_fm.addClass('stick').show();
			}
			if( $(window).scrollTop() <= _height ){
				_fm.removeClass('stick').hide();
			}
		}
		else{
			if( $(window).scrollTop() > _height && !_fm.hasClass('stick') ){
				_fm.addClass('stick').show().parent().find('.phy-con').addClass('phy-con-stick');
				
			}
			if( $(window).scrollTop() <= _height ){
				_fm.removeClass('stick').hide().parent().find('.phy-con').removeClass('phy-con-stick');
			}

		}
	}
	sc();
	$(window).on({
		scroll: function() {
			sc();
		},
		resize: function() {
			sc();
		}
	});

	 $('.aniview').AniView();
	 $('body').append('<div class="go-top"><div class="in"><a href="#">위로</a></div>');

	$(document).on('click', '.go-top a', function(){
		$('html, body').animate({
			scrollTop : 0
		});
		return false;
	});
});
