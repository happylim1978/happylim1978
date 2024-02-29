(function($){
	//ready
	$(document).ready(function(){

		$(window).scroll(function(){
			setTimeout(scroll_title, 500);
			setTimeout(scroll_top, 500);
		});

		var $sub_h1 = $('#sub_h1');

		function scroll_title(){
			if( $(window).scrollTop() > 100 ) {
				$sub_h1.fadeIn('fast');
			}
			else {
				$sub_h1.fadeOut('fast');
			}
		}

		var $go_top = $('#go_top');
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

		//팝업
		var $popup_layer = $('.popup_layer');
		$('.close, .cancel', $popup_layer).on('click', function(){
			$('#mask').remove();
			$(this).closest('.popup_layer').hide();
			$('body').removeAttr('style');
		});

	})
	//end
})(jQuery)

/* 팝업 */
function popup_open(target){

	var $target = $('[data-popup-name="'+target+'"]');
	var space_left = ($target.outerWidth()/2) * (-1);
	var v_space = $(window).outerWidth() > 640 ? 75 : 45;
	$target.css({
		'top' : ($(window).scrollTop() + v_space),
		'marginLeft' : space_left
	});
	$('html').addClass('popup_on');
	$('body').append('<div class="mask" id="mask"></div>')
	$target.show();
	$('#mask').css('height', $(document).outerHeight());
	$('body').css('height', $(document).outerHeight() - 54);
};

function getdate1() {
	$("#cal1").datepicker("dialog", "", function (date) {
		$("#cal1").val(date);
		}, {
			showButtonPanel :'true',
			dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
			monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			currentText : '오늘',
			closeText : '닫기',
			dateFormat : 'yy.mm.dd',
		}//, [event.pageX, event.pageY]
	);
}

function getdate2() {
	$("#cal2").datepicker("dialog", "", function (date) {
		$("#cal2").val(date);
		}, {
			showButtonPanel :'true',
			dayNamesMin : ['일', '월', '화', '수', '목', '금', '토'],
			monthNames : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			currentText : '오늘',
			closeText : '닫기',
			dateFormat : 'yy.mm.dd',
		}//, [event.pageX, event.pageY]
	);
}