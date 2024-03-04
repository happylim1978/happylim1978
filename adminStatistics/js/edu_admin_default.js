(function($){
	//ready
	$(document).ready(function(){

		function mask() {
			$('#mask').css('height', $(document).height());
		}

		function mask_view(){
			var $mask = $('.mask');
			if( $mask.length > 0 ){
				$('.mask').animate({opacity:0}, 'fast', function(){
					$(this).remove();
				});
			}
			else{
				$('body').prepend("<div id='mask' class='mask' style='opacity:0.5;'></div>");
				mask();
			}
		};

		$('#month_field button.cal').on('click', function(){
			$('html').addClass('popup_on');
			mask_view();

			var $popup_wrap = $('#popup_wrap');

			var p_top = $popup_wrap.height()/2 * (-1) + $(window).scrollTop();
			var p_left = $popup_wrap.width()/2 * (-1);

			$popup_wrap.css({marginTop : p_top, marginLeft : p_left}).fadeIn('fast');
		});

		$(document).on('touchstart', '#mask', function(e){
			mask_view();
			$('#popup_wrap').hide();
			$('html').removeClass('popup_on');
		});

		$('#cal_close').on('click', function(){
			mask_view();
			$('#popup_wrap').hide();
			$('html').removeClass('popup_on');
		});

		var $go_top = $('#go_top');

		$(window).scroll(function(){
			setTimeout(scroll_top, 1000);
		});

		$go_top.find('>a').on('click', function(){
			$('html, body').stop().animate({scrollTop : 0}, 400);
			return false;
		});

		function scroll_top(){
			if( $(window).scrollTop() <= 1 ) {
				$go_top.fadeOut('slow');
			}
			else {
				$go_top.fadeIn('slow');
			}
		}

	//end
	});
})(jQuery)

function mask() {
	$('#mask').css('height', $(document).height());
}

function graphLabel(_ele, _ele_name, _ele_p, _xycheck, _ele_left, _ele_top, _unit) {
	if(!_unit) _unit = '';
	$(_ele + ' .data-point-label'+ _ele_name).remove();
	$.each(_ele_p.getData()[0].data, function(i, el){
		var o = _ele_p.pointOffset({x: el[0], y: el[1]});
		var tts = el[_xycheck];
		$('<div class="data-point-label'+_ele_name+' count'+(i+1)+'">' + tts +' ' + _unit + '</div>').css( {
			position: 'absolute',
			left: o.left + _ele_left,
			top: o.top + _ele_top
		}).appendTo(_ele_p.getPlaceholder());
	});
}

