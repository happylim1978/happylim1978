$(document).ready(function(){
	$tabcons = $('.tab-con .cons')
	$('#header > a').on('click', function(){
		$(this).siblings().removeClass('current').end().addClass('current');
		$tabcons.removeClass('cons-on');
		$tabcons.eq($('#header > a').index(this)).addClass('cons-on');
		return false;
	})
});