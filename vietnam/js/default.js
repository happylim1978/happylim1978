$(document).ready(function(){
	var $ham = $('#ham');
	var $side = $('#side');
	$ham.on('click', function(e){
		$('html').addClass('lnbOn');
		$('.wrap').append('<span class="dim" id="dim"></span>')
		$side.show().animate({
			left : 0,
		}, 'fast');
		e.preventDefault();
	});

	$(document).on('click', '#lnbClose, #dim', function(e){
		$side.animate({
			left : -100+'%'
		}, 'fast', function(){
			$('#dim').fadeOut('fast').remove();
			$('html').removeClass('lnbOn');
		});
		e.preventDefault();
	});
	$side.find('.depth1 > li').has( "ul" ).addClass('hasSub');
	$side.find('.hasSub > .tit').on('click', function(e){
		$(this).toggleClass('tit-off').closest('.hasSub').find('.depth2').stop(true,true).slideToggle('fast');
		e.preventDefault();
	});
});