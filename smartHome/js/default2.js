$(document).ready(function () {
	//start
	var
		$navBtn = $('#navBtn'),
		$menuview = $('#menuview'),
		$cube = $('#cube'),
		$navTarget = $('#navBtn').parent(),
		$search = $('#search')
	;


	$menuview.on('click', function(){
		if( !$('body').hasClass('subBody') )
		{
			$('html').toggleClass('navOpen');
			$navTarget.addClass('navOpenIng');
			return false;
		}
	});

	var startY = 0;
	var endY = 0;
	var direction = true;

	$navBtn.on('click touchstart touchmove', function(e){
		if( e.type == 'click' )
		{
			$('html').toggleClass('navOpen');
			$navTarget.addClass('navOpenIng');
			return false;
		}
		else if( e.type == 'touchstart') {
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			startY = touch.pageY;
		}
		else if( e.type == 'touchmove') {
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			if( (startY - touch.pageY) > 0 ){
				$('html').toggleClass('navOpen');
				$navTarget.addClass('navOpenIng');
			}
			else{
				$('html').toggleClass('navOpen');
			}
		}
	});

	$cube.on('click', function(e){
		if( !$('body').hasClass('subBody') )
		{
			e.preventDefault();
			$('html').removeClass('navOpen');
		}
	});

	$search.on('click', function(){
		$(this).parent().addClass('searchOn');
		return false;
	});

	$search.prev('.topClose').on('click', function(){
		$search.parent().removeClass('searchOn');
		return false;
	});

	$navTarget.on('transitionend webkitTransitionEnd oTransitionEnd', function(){
		if( !$('html').hasClass('navOpen') ) {
			$navTarget.removeClass('navOpenIng');
		}
	});

	var
		$subList = $('#subList'),
		$depthMenu = $('#depthMenu'),
		$arrow = $('#arrow')
	;

	var $depthList = $('#depthList>.set>a');
	$depthList.on('click', function(e){
		$(this).closest('.depthList').toggleClass('depthListOpen');
		$depthMenu.removeClass('depthView');
		$subList.find('>li').removeClass('on');
		e.preventDefault();
	});

	$('button.bookCheck').on('click', function(){
		$(this).toggleClass('bookCheckOn');
	});
	$(document).on('click', '.navOpen #swipePage > span', function(){
		if( $(this).index() == 0 ) window.location = 'smartHome2_suba.html';
		if( $(this).index() == 1 ) window.location = 'smartHome2_subb.html';
		if( $(this).index() == 2 ) window.location = 'smartHome2_subc.html';
		if( $(this).index() == 3 ) window.location = 'smartHome2_subd.html';
		if( $(this).index() == 4 ) window.location = 'smartHome2_sube.html';
		if( $(this).index() == 5 ) window.location = 'smartHome2_subf.html';

	});
	$(document).on('click', '.navOpen .codeBlue #swipePage > span', function(){
		window.location = 'smartHome2_sub_blue.html';
	});

	$subList.find('>li').on('click', function(e){
		$depthMenu.find('.depthbox').hide().eq( $(this).index() ).show();
		if( $(this).hasClass('on') ) {
			$(this).removeClass('on');
			$depthMenu.removeClass('depthView');
		}
		else {
			$subList.find('>li').removeClass('on');
			$(this).addClass('on');
			$depthMenu.addClass('depthView');
			$arrow.css('top', ( 25*($(this).index()+1) + 10 ) + '%' );
		}
		e.preventDefault();
	});

	$('#depthClose').on('click', function(e){
		$subList.find('>li').removeClass('on');
		$depthMenu.removeClass('depthView');
		e.preventDefault();
	});

	$('#bookmarkTab').find('>li').on('click', function(e){
		$('#bookmarkTab').find('>li').removeClass('on');
		$(this).addClass('on');
		e.preventDefault();
	});

	$('#bookmarkList').find('>li').on('click', function(e){
		$('#bookmarkList').find('>li').removeClass('on');
		$(this).addClass('on');
		e.preventDefault();
	});

	//scroll 함수
	var $depthMenu = $('#depthMenu');
	function _scroll(){
		if( !document.getElementById('depthMenu') ) return false;
		var scroll_height = $('#depthMenu').height() - 90 - 20;
		$depthMenu.find('ul').slimScroll({
			height : scroll_height + 'px',
			alwaysVisible: true,
			touchScrollStep :125
			//wheelStep: 50
			//railVisible: true
		});
	}

	_scroll();

	var $lnb = $('#lnb');
	$(window).on('scroll', function(){
		if( $(window).scrollTop() >= 60 ) {
			$lnb.addClass('fixed');
		}
		else {
			$lnb.removeClass('fixed');
		}
	});

	//end
});