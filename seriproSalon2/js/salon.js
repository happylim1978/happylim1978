$(document).ready(function(){
	// $('.salon').addClass('salon' + pagecode);

	function floatCheck() {
		var _visualHeight = $('.visual-head');
		var _floatTab = $('.float-tab');
		var _floatTabWrap = $('.float-tab-wrap');
		var prevTop = $(this).scrollTop();

		if( prevTop > _visualHeight.outerHeight() ) {
			_floatTab.addClass('fixed');
			_floatTabWrap.css('padding-top', _floatTab.outerHeight());
		} else {
			_floatTabWrap.removeAttr('style');
			_floatTab.removeClass('fixed');
		}
	}
	
	$(window).on('scroll', function(){
		floatCheck();
	});

var _footer = 
	'<div class="footer-in">' +
		'<div class="footer1">' +
			'<dl>' +
				'<dt>사업자 등록번호</dt>' +
				'<dd>104-81-53114</dd>' +
				'<dt>통신판매신고번호</dt>' +
				'<dd>제2016-서울강남-00515호</dd>' +
			'</dl>' +
			'<p class="p">(주)멀티캠퍼스 서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</p>' +
		'</div>' +
		'<div class="footer2">' +
			'<dl>' +
				'<dt>대표이사</dt>' +
				'<dd>정석목</dd>' +
				'<dt>개인정보 보호 책임자</dt>' +
				'<dd>임영관 이사</dd>' +
			'</dl>' +
			'<p class="lts0">Copyright by Multicampus., Ltd. All Rights Reserved.</p>' +
		'</div>' +
	'</div>'
	;
	/*
var _salonTab =
	'<a href="page1.html" class="tab1">돋움</a>' +
	'<a href="page2.html" class="tab2">채움</a>' +
	'<a href="page3.html" class="tab3">피움</a>' +
	'<a href="page4.html" class="tab4">배움</a>'
	;
	$('#salon-tab').html(_salonTab);
	$('#salon-tab').find('a').eq(pagecode - 1).addClass('current');

var _floatTab =
		'<ul>' +
			'<li>' +
				'<a href="page1.html">' +
					'<span class="s">용기와 희망을</span>' +
					'<strong class="st">돋움</strong>' +
				'</a>' +
			'</li>' +
			'<li>' +
				'<a href="page2.html">' +
					'<span class="s">지혜를</span>' +
					'<strong class="st">채움</strong>' +
				'</a>' +
			'</li>' +
			'<li>' +
				'<a href="page3.html">' +
					'<span class="s">통찰의 꽃을</span>' +
					'<strong class="st">피움</strong>' +
				'</a>' +
			'</li>' +
			'<li>' +
				'<a href="page4.html">' +
					'<span class="s">삶을</span>' +
					'<strong class="st">배움</strong>' +
				'</a>' +
			'</li>' +
		'</ul>'
	;
	$('#float-tab').html(_floatTab);
	$('#float-tab').find('a').eq(pagecode - 1).addClass('current');
	*/
	$('#footer').html(_footer);
});

