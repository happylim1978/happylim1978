$(document).ready(function(){

	var $menu = $('#menu');
	$menu.find('>ul>li').addClass('depth1-wrap');
	$menu.find('>ul>li>a').addClass('depth1');
	$menu.find('>ul>li>ul').addClass('depth2');
	$menu.on('click', '.depth1', function(){
		var $this = $(this);

		if( $this.next('ul').length > 0 ) {
			if( !$this.closest('li').hasClass('opened') ) {
				$menu.find('>ul>li').removeClass('end opened');
				$menu.find('>ul>li .depth2').stop(true,true).slideUp('fast');
			}
			$this.closest('li').toggleClass('opened').end().next('.depth2').stop(true,true).slideToggle('fast', function(){
				$this.closest('li').toggleClass('end');
			});
			return false;
		} else {

		}
	});

	$menu.on('mouseenter', '.end .depth2 > li > a', function(){
		if( $(this).find('.demo').length > 0 ) {
			//var left = $(this).find('>span').first().outerWidth() + 20;
			//$(this).find('.demo').css('left', left).stop(true, true).fadeIn('fast');
			$(this).find('.demo').stop(true, true).fadeIn('fast');
		}
	});
	$('.gnb .menu .depth2 > li > a').on('mouseleave', function(){
		if( $(this).find('.demo').length > 0 ) {
			$(this).find('.demo').stop(true, true).fadeOut('fast');
		}
	});

	$menu.find('.depth2 > li > a').on('click', function(){
		var $depthOneWrap = $menu.find('.depth1-wrap');
		var $thisWrapNum = $depthOneWrap.index($(this).closest('.depth1-wrap')) + 1;
		var $thisNum = $(this).closest('.depth2').find('>li').index($(this).closest('li')) + 1;
		document.location.href = $(this).attr('href') + '#' + $thisWrapNum + '_' + $thisNum;
		return false;
	});



	var _menuCode = document.location.href.split("#")[1];
	var _code_count = 0;
	if( _menuCode ) {
		var _code1 = _menuCode.split('_')[0] - 1;
		var _code2 = _menuCode.split('_')[1] - 1;

		$menu.find('> ul > li').eq(_code1).addClass('opened end').find('> ul').show().find('> li').eq(_code2).addClass('on');
		_code_count = _code2;
	}

	$("#gnb-in").mCustomScrollbar({
		setTop: _code_count * 38 + 'px',
		mouseWheel:{
			scrollAmount: 300 
		}
	});

	_widthCheck();

	function _widthCheck() {
		if( $(this).width() >= 1920) {
			$('html').removeClass('big');
			$('html').addClass('large');
		} else if( $(this).width() > 1367 && $(this).width() < 1920 ) {
			$('html').removeClass('large middle');
			$('html').addClass('big')
		} else if( $(this).width() > 900 && $(this).width() <1367 ) {
			$('html').removeClass('big small');
			$('html').addClass('middle')
		} else if( $(this).width() <= 900 ) {
			$('html').removeClass('middle');
			$('html').addClass('small')
		}

	}

	//nav
	if( $('.navbox').length > 0 ){
		var _navbox = $('.navbox');
		var _nav = $('.nav');
		var thisNav = 0
		var thisNavItem = _nav.eq(thisNav);
		var _navLink = _navbox.find('>a');
		var thisCurrent = _navLink.eq(thisNav).addClass('current');

		//_navbox.width(_navLink.first().outerWidth() + 40);

		_navLink.on('click', function(){
			var $this = $(this);
			$('html, body').stop(true,true).animate({
				scrollTop: _nav.eq(_navLink.index(this)).offset().top - 30
			}, 500, function(){
				_navLink.removeClass('current');
				thisCurrent = $this;
				$this.addClass('current');
			});
			return false;
		});

		var prevScrolltop = $(window).scrollTop();
		var dHeight = $(document).height();
		var wHeight = $(window).height();

		$(window).on('scroll', function(){
			var currentScrollTop = $(this).scrollTop();
			if( prevScrolltop > currentScrollTop + 30 ) {
				//console.log('up');
				if( currentScrollTop <= _nav.eq(thisNav).offset().top && thisNav != 0) {
					_navLink.eq(_navLink.length - 1).removeClass('current');
					thisNav--;
					thisCurrent.removeClass('current');
					thisCurrent = _navLink.eq(thisNav).addClass('current');
				}
			} else {
				//console.log('down');
				if( thisNav !=_navLink.length - 1 && currentScrollTop > _nav.eq(thisNav + 1).offset().top - 30 ) {
					thisNav++;
					thisCurrent.removeClass('current');
					thisCurrent = _navLink.eq(thisNav).addClass('current');
				}
				/*
				if( (dHeight - 5) <= ( currentScrollTop + wHeight ) ) {
					_navLink.removeClass('current');
					_navLink.eq(_navLink.length - 1).addClass('current');
					thisNav = _navLink.length - 1;
				}
				*/
			}

			prevScrolltop = currentScrollTop;
		});

	}

	$('.target').on('click', function(){
		var _target = $($(this).attr('href'));
		var _targetMt = _target.css('margin-top').replace(/[^-\d\.]/g, '');
		var _targetTop = 0;
		if( $(this).closest('html').hasClass('big') || $(this).closest('html').hasClass('large') ) {
			_targetTop = Math.round(_target.position().top) + Math.round(_targetMt) - 20;
		} else {
			_targetTop = _target.offset().top - 20;
		}

		$('html, body, .page2').animate({
			scrollTop: _targetTop + 'px'}, 
		'fast');
		return false;
	});

	//tab
	for(var i = 0; i < $('.Simulation-tab .tabs > ul').length; i++) {
		$('.Simulation-tab .tabs > ul').eq(i).find('li').first().addClass('on');
		$('.Simulation-tab .tabs').eq(i).find('.tab-con').first().show();
	}
	$('.tabs > ul > li > a').on('click', function(){
		var $this = $(this);
		var $tabs = $this.closest('.tabs');
		var num = $tabs.find('>ul>li a').index(this);
		if( $(this).parent().hasClass('on') ) return false;
		$tabs.find('>ul>li').removeClass('on').eq(num).addClass('on');
		$tabs.find('>.tab-con').hide().eq(num).fadeIn('fast');
		return false;
	});

	$('body').append('<span class="go-top" id="go-top">top</span>')
	$('#go-top').on('click', function(){
		$('html, body, .page1, .page2').animate({scrollTop: '0'}, 'fast');
	});

	$(window).on('resize', function(){
		_widthCheck();
	});

});