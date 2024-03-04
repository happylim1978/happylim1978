$('document').ready(function(){
	var
		$nav = $('#nav'),
		$body = $('#body'),
		$contentbox = $('#contentbox')
	;
	$('#menu').on('click', function(){
		$('html').toggleClass('menuOpen');
		return false;
	});

	$contentbox.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
		if( !$('html').hasClass('menuOpen') ) {

		}
	});

	$(".flipIn").flip({
		axis: "y",
		reverse: true,
		trigger: "click"
	});

	$('#searchBtn').on('click', function(){
		$(this).closest('.header').addClass('searchboxOn');
		return false;
	});
	$('#searchClose').on('click', function(){
		$(this).closest('.header').removeClass('searchboxOn');
		return false;
	});

	var
		$lnb = $('#lnb'),
		$ul1 = $lnb.find('>ul'),
		$li1 = $lnb.find('>ul>li'),
		$ul2 = $lnb.find('>ul>li>ul'),
		$li2 = $lnb.find('>ul>li>ul>li')
	;
	$lnb.find('>ul>li.open>ul').slideDown(100);
	$lnb.on('click', 'li', function(){
		if( $(this).parent().hasClass('lnbList') )
		{
			if( $(this).hasClass('open') ){
				$(this).removeClass('open')
					.find('>ul').slideUp(100);
			}
			else {
				$(this).addClass('open')
					.find('>ul').slideDown(100);
			}
		}
		return false;
	});

	$('button.bookCheck').on('click', function(){
		$(this).toggleClass('bookCheckOn');
	});

});