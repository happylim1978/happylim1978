$(document).ready(function() {
	// fullpage
	/*
	function initialization(){
		var $fullpage = $('#fullpage').fullpage({
			//'verticalCentered': false,
			// sectionsColor: ['#f4f4f4', '#4dcfb0', '#f4f4f4', '#e8e8e8', '#f4f4f4','#e8e8e8'],
			anchors: ['page0', 'page1', 'page2', 'page3'],
			//lockAnchors: true,
			menu: '#menu',
			scrollingSpeed: 1000,
			scrollOverflow:true,
			'afterLoad': function(anchorLink, index){
				if(index == 1){
					$('.intro .ready-wrap').addClass('fadeIn');
					$('.intro .fades').addClass('fadesIn');
					$('.go-top').hide();
				}
				if(index == 2){
					$('.service-list').addClass('fadesIn');
				}
				if(index != 1){
					$('.go-top').removeClass('last').show();
				}
				if(index == 7){
					$('.go-top').addClass('last');
				}
			},
			'onLeave': function(index, nextIndex, direction){
				if (index == 2 && direction == 'down'){
					$('.section2 .content').addClass('fadeIn');
				}
				if (index == 3 && direction == 'down'){
					$('.section3 .content').addClass('fadeIn');
				}
				if (index == 4 && direction == 'down'){
					$('.section4 .content').addClass('fadeIn');
				}
				if (index == 5 && direction == 'down'){
					$('.section5 .content').addClass('fadeIn');
				}
			}
		});
	}
	*/
	// fullpage2
	/*
	function initialization2(){
		var $fullpage = $('#fullpage2').fullpage({
			//'verticalCentered': false,
			// sectionsColor: ['#f4f4f4', '#4dcfb0', '#f4f4f4', '#e8e8e8', '#f4f4f4','#e8e8e8'],
			anchors: ['page-b0', 'page-b1', 'page-b2', 'page-b3'],
			//lockAnchors: true,
			menu: '#menu-b',
			scrollingSpeed: 1000,
			scrollOverflow:true,
			'afterLoad': function(anchorLink, index){
				if(index == 1){
					$('.intro .ready-wrap').addClass('fadeIn');
					$('.intro .fades').addClass('fadesIn');
					$('.go-top').hide();
				}
				if(index == 2){
					$('.service-list').addClass('fadesIn');
				}
				if(index != 1){
					$('.go-top').removeClass('last').show();
				}
				if(index == 7){
					$('.go-top').addClass('last');
				}
			},
			'onLeave': function(index, nextIndex, direction){
				if (index == 2 && direction == 'down'){
					$('.section2 .content').addClass('fadeIn');
				}
				if (index == 3 && direction == 'down'){
					$('.section3 .content').addClass('fadeIn');
				}
				if (index == 4 && direction == 'down'){
					$('.section4 .content').addClass('fadeIn');
				}
				if (index == 5 && direction == 'down'){
					$('.section5 .content').addClass('fadeIn');
				}
			}
		});
	}
	*/
	// initialization();

	// fullpage
	function initialization(){
		var $fullpage = $('#fullpage').fullpage({
			//'verticalCentered': false,
			anchors: ['page0', 'page1'],
			//lockAnchors: true,
			menu: '#menu',
			scrollingSpeed: 1000,
			scrollOverflow:true,
			autoScrolling: false, // 롤링시 삭제
			fitToSection: false, // 롤링시 삭제
			'afterLoad': function(anchorLink, index){
			},
			'onLeave': function(index, nextIndex, direction){
			}
		});
		$('body').addClass('main');
	}
	if($('#fullpage').length > 0) {
		initialization();
	}

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 60) {
			$('header').addClass('float');
		} else {
			$('header').removeClass('float');
		}
	});

	function initialization2(){
		var $fullpage = $('#fullpage2').fullpage({
			//'verticalCentered': false,
			//sectionsColor: ['#1B1C24', '#090A0E', '#1B1C24', '#090A0E'],
			anchors: ['page-b0', 'page-b1', 'page-b2', 'page-b3'],
			//lockAnchors: true,
			menu: '#menu-b',
			scrollingSpeed: 1000,
			scrollOverflow:true,
			scrollOverflowOptions:{
				preventDefault: false
			},
			// fixedElements: '.header',
			'afterLoad': function(anchorLink, index){
			},
			'onLeave': function(index, nextIndex, direction){
			}
		});
		$('body').addClass('cv');
	}
	if($('#fullpage2').length > 0) {
		initialization2();
	}

	var $nav = $('#nav');
	var $otherContent = $('.other-content');
	/*
	function destroyFull(ele) {
		$.fn.fullpage.destroy('all');
		$(ele).hide();
		var noHashURL = window.location.href.replace(/#.*$/, '');
		window.history.replaceState('', document.title, noHashURL) 
	}
	*/
	/*
	$nav.find('> ul >li:first').on('click', function () {
		if( $('.fullpage-wrap2').is(':visible') ) {
			destroyFull('.fullpage-wrap2')
		}
		if( $('.fullpage-wrap').is(':hidden') ) {
			$('.fullpage-wrap').show();
			window.setTimeout(initialization, 50);
			$otherContent.removeClass('page-view');
			$(this).siblings().removeClass('active').end().addClass('active');
			$(this).closest('.header').removeClass('opened-menu');
		};
		return false;
	});
	*/
	/*
	$nav.find('> ul >li:eq(1)').on('click', function () {
		if( $('.fullpage-wrap').is(':visible') ) {
			destroyFull('.fullpage-wrap')
		}
		if( $('.fullpage-wrap2').is(':hidden') ) {
			$('.fullpage-wrap2').show();
			window.setTimeout(initialization2, 50);
			$otherContent.removeClass('page-view');
			$(this).siblings().removeClass('active').end().addClass('active');
			$(this).closest('.header').removeClass('opened-menu');
		};
		return false;
	});
	*/
	/*
	$nav.find('> ul >li[data-page]').on('click', function () {
		if( $('.fullpage-wrap').is(':visible') ) {
			destroyFull('.fullpage-wrap')
		};
		if( $('.fullpage-wrap2').is(':visible') ) {
			destroyFull('.fullpage-wrap2')
		};
		$otherContent.removeClass('page-view');
		var thisNum = $nav.find('> ul >li').index(this) - 1;
		$('.other-content' + $(this).data('page')).addClass('page-view');
		$(this).siblings().removeClass('active').end().addClass('active');
		$(this).closest('.header').removeClass('opened-menu');
		return false;
	});
	*/
	/*
	function doCheck() {
		if( $('#btn-menu').is(':hidden') ) {
			$('body').slimScroll({
				height: '100vh',
				alwaysVisible: true,
				size: '10px'
			});
		} else {
			$(".others").slimScroll({destroy: true}).removeAttr('style');
		}
	}
	*/
	// doCheck();

	$('.popup-wrap .btn-close').on('click', function() {
		$('body').removeClass('popup-open');
		$(this).closest('.popup-layer').hide();
		return false;
	});

	$('.footer .agree').on('click', function() {
		$('body').addClass('popup-open');
		$('.popup-wrap .popup-layer-agree').show();
		/*
		$(".popup-wrap .popup-layer .popup-content").mCustomScrollbar({
			scrollInertia: 100
		});
		*/
		/*
		$('.popup-wrap .popup-layer .popup-content').slimScroll({
			height:'auto',
			alwaysVisible: true,
			size: '10px'
		});
		*/
		return false;
	});
	$('.footer .privacy').on('click', function() {
		$('body').addClass('popup-open');
		$('.popup-wrap .popup-layer-privacy').show();
		/*
		$(".popup-wrap .popup-layer .popup-content").mCustomScrollbar({
			scrollInertia: 100
		});
		*/
		/*
		$('.popup-wrap .popup-layer .popup-content').slimScroll({
			height:'auto',
			alwaysVisible: true,
			size: '10px'
		});
		*/
		return false;
	});

	$(window).on('resize', function () {
		// doCheck();
	});

	$('#btn-menu button').on('click', function() {
		$(this).closest('.header').toggleClass('opened-menu');
	});
});