$(document).ready(function(){
	var _hw = $('#header-wrap');

	if( pagecode ) {
		var
			_dep1 = pagecode[0] - 1,
			_dep2 = pagecode[1] - 1
		;
		_hw.find('.sub1').eq(_dep1).addClass('current').find('.depth2-wrap').show().find('.sub2').eq(_dep2).addClass('cur');

	}

	var _topMenu = $('#top');

	if(countryCode) {
		_topMenu.find('.btn').eq(countryCode).addClass('current');
	}
	/*
	_hw.find('.sub1').on('mouseenter', function(){
		if( !$(this).hasClass('hover') ) {
			_hw.find('.sub1').removeClass('hover');
			_hw.find('.depth2-wrap').hide();
			$(this).addClass('hover').find('.depth2-wrap').slideDown('fast');
		}
	});
	*/

	_hw.find('.sub1 > a').on('mouseenter', function(){
		_hw.find('.depth2-wrap').hide().end().find('.sub1').removeClass('hover');
		$(this).closest('li').addClass('hover').end().next('div').stop(true,true).slideDown('fast');
	});

	_hw.find('.depth1').on('mouseleave', function(){
		$(this).find('.depth2-wrap').slideUp('fast').end().find('.sub1').removeClass('hover');
		$(this).find('.current > .depth2-wrap').delay(1).stop(true,true).slideDown('fast');
	});
});