$(document).ready(function(){
	$('label.label').on('click', function(){
		$(this).closest('.radio-wrap').find('label.label').removeClass('label-on').end().end().addClass('label-on');
	});

	$('.check-wrap2').on('click', 'label', function(){
		$(this).closest('.check-wrap2').find('label').removeClass('label-on').end().end().addClass('label-on');
	});

	$('.inputs .text').on('focusin', function(){
		$(this).closest('.inputs').addClass('current');
	});
	$('.inputs .text').on('focusout', function(){
		$(this).closest('.inputs').removeClass('current');
	});
});

function layer_view(ele_id){
	var $target = null;
	if(!ele_id){
		$target = $('.layer');
	}
	else {
		$target = $('#'+ele_id);
	}
	var $target_box = $target.find('.layer-box');
	$target.fadeIn('fast').find('.layer-box').css({
		marginLeft : -$target_box.outerWidth()/2,
		marginTop : -$target_box.outerHeight()/2
	});
}

function layer_close(){
	$('.layer').fadeOut('fast');
}

/* 20181228 추가 */
function layer_view2(ele_id){
	var $target = null;
	if(!ele_id){
		$target = $('.layer');
	}
	else {
		$target = $('#'+ele_id);
		if( $('.header').hasClass('header-float') ){
			$('.qna-layer-wrap .layer').fadeOut('fast', function(){
				$('.header').removeClass('header-float');
			});
		}
		else{
			$('.header').addClass('header-float');
			var $target_box = $target.find('.layer-box');
			$target.fadeIn('fast').find('.layer-box').css({
				marginLeft : -$target_box.outerWidth()/2,
				marginTop : -$target_box.outerHeight()/2
			});
		}
	}
}

