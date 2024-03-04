$(document).ready(function(){
	//top 버튼

	var updownFixed = {
		viewHandle : function() {
			if ($(window).scrollTop() > 50) {
				$('#btn-fixed-up').fadeIn(1000);
			} else {
				$('#btn-fixed-up').fadeOut(1000);
			}
		},
		scrollUp : function() {
			$('#btn-fixed-up').click(function() {
				$(window).scrollTop(0);
			});
		}
	};

	$(window).scroll(function() {
		if ($('#btn-fixed-up').length > 0) {
			updownFixed.viewHandle();
			updownFixed.scrollUp();
		}
	});

	//submeun
	var _submenu = 
		'<ul>' +
			'<li><a href="sub1-1.html">외생관 소개</a></li>' +
			'<li><a href="sub2-1.html">외생관 특장점</a></li>' +
			'<li><a href="sub3-1.html">교육과정</a>' +
				'<div class="sub-in">' +
					'<a href="sub3-1.html">과정 Map</a>' +
					'<a href="sub3-2.html">스파르타 집중어학</a>' +
					'<a href="sub3-3.html">임원 집중어학</a>' +
					'<a href="sub3-4.html">해외 주재원 어학</a>' +
					'<a href="sub3-5.html">고급 회화과정</a>' +
					'<a href="sub3-6.html">단기 집중과정</a>' +
					'<a href="sub3-7.html">맞춤형 과정</a>' +
				'</div>' +
			'</li>' +
			'<li><a href="sub4-1.html">교육일정 및 문의</a></li>' +
		'</ul>'
	;
	$('#sub-menu').html(_submenu);

	$('.gnblist > li').on('mouseenter', function(){
		$(this).siblings('li').removeClass('on').end().addClass('on');
		if( $(this).find('.gnb-sub').length > 0 ) {
			$(this).find('.gnb-sub').stop(true,true).slideDown('fast');
		}
	});
	$('.gnblist > li').on('mouseleave', function(){
		if( $(this).find('.gnb-sub').length > 0 ) {
			$(this).find('.gnb-sub').stop(true,true).slideUp('fast');
		}
		$(this).removeClass('on');
	});

	$('#sub-menu>ul>li').on('mouseenter', function(){
		if( $(this).find('>.sub-in').length > 0 ) {
			$(this).find('>.sub-in').stop(true,true).fadeIn('fast');
		}
	});
	$('#sub-menu>ul>li').on('mouseleave', function(){
		if( $(this).find('>.sub-in').length > 0 && !$(this).hasClass('selected') ) {
			$(this).find('>.sub-in').stop(true,true).fadeOut('fast');
		}
	});

	//tab
	$('.tabs > a').on('click', function(){
		$('.tabs').attr('class', 'tabs tabs' + ($('.tabs > a').index(this)+1));
		$(this).siblings('a').removeClass('on').end().addClass('on');
		$('.tab-con').removeClass('tab-con-view');
		$( $(this).attr('href') ).addClass('tab-con-view');
		$(this).closest('.tabs-wrap').prev('.des2').text( $(this).data('text') );
		return false;
	});

});

//pagecode
function pagecode(dep1, dep2){
	var $target = $('#sub-menu');
	var state = 'on';
	if( dep1 == 3 ) state = 'on selected';
	$target.find('>ul>li').eq((dep1-1)).addClass(state).find('.sub-in>a').eq((dep2-1)).addClass('on');
}

//패밀리 사이트 바로가기
function familyGo(){
	var url = $("#f_site option:selected").val();

	if(url == ""){
		url = document.getElementsByName('family1')[0].value;
	}

	if( url ) {
		window.open(url);
	}
}

//팝업띄우기
function popupGo(src){
	
	var url = "";
	
	//이용약관
	if(src == "1"){			
		url = "/web/join/check/provision01.html";		
	//개인정보취급방침
	}else if(src == "2"){			
		url = "/web/credu/html/learn/user/member/pop_provision.html";
	}		
	window.open(url,'','width=750, height=650, scrollbars=yes, toolbar=no, menubar=no, location=no');
}