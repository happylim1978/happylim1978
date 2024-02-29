if(document.getElementById('cssBefore')) {
	var cssBefore = document.getElementById('cssBefore');
	var linkCss = document.createElement('link');
	linkCss.rel = 'stylesheet';
	linkCss.type = 'text/css';
	linkCss.href = 'https://el.multicampus.com/de_common/b2c/info/css/about_cus.css?ver=' + Date.now();
	cssBefore.insertAdjacentElement('afterend', linkCss);
}

$(document).ready(function() {

	//동영상레이어
	var _movieLayer =
		'<!-- 샘플 링크 href, data-movietitle' +
		'<a class="layer-movie" target="_blank" href="https://www.youtube.com/embed/gfidD-TYEj0" data-movietitle="급변하는 시대에 맞는 경영 의사결정력 향상, MBA"><span>홍보영상보기</span></a>' +
		'-->' +
		'<div class="modal" id="movie-default">' +
			'<div class="modal-con">' +
				'<div class="modal-con-in">' +
					'<iframe width="1076" height="605" src="" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
				'</div>' +
				'<button type="button" class="modal-close dot-btn">닫기</button>' +
			'</div>' +
		'</div>'
	$('body').append(_movieLayer);
	$('.modal').prepend('<span class="layerdim"></span>');
	$(document).on('click', '.layer-movie', function() {
		var $this = $(this);
		var movieUrl = $this.attr('href');
		var movieTitle = $this.data('movietitle');
		var _target = $('#movie-default');

		$(_target).find('iframe').attr({
			src: movieUrl,
			title: movieTitle
		});

		$('html').addClass('modal-on');
		$(_target).addClass('modal-visible');
		return false;
	});
	$('.modal > .layerdim, .modal .modal-close').on('click', function(){
		$('html').removeClass('modal-on');
		$('.modal').removeClass('modal-visible');
		$('.modal iframe').attr({
			'src': '',
			'title': ''
		});
	});

	// fullpage
	if ($('#fullpage').length > 0) {
		$('#fullpage').fullpage({
			'verticalCentered': false,
			anchors: ['page0', 'page1', 'page2', 'page3', 'page4'],
			menu: '#menu',
			scrollingSpeed: 1000,
			scrollOverflow:true,
			'afterLoad': function(anchorLink, index){
				if(index == 1){
					$('#gnb').removeClass('float');
				}
				if(index == 2){
				}
				if(index != 1){
				}
				if(index == 7){
				}
			},
			'onLeave': function(index, nextIndex, direction){
				if (index == 2 && nextIndex == 1 && direction == 'up'){
					$('#gnb').removeClass('float');
				}
				if (index == 1 && direction == 'down'){
					$('#gnb').addClass('float');
				}
				if (index == 3 && direction == 'down'){
				}
				if (index == 4 && direction == 'down'){
				}
				if (index == 5 && direction == 'down'){
				}
			}
		});
	}

	// quick import
	var _quick =
		'<div class="quick-in">' +
			'<a target="_blank" href="/main" class="quick1" data-mlink="https://event.multicampus.com/"><span><em>교육과정</em></span></a>' +
			'<a href="/om/about/sub/requestPopup" class="quick2"><span><em>문의하기</em></span></a>' +
			'<a class="gotop" href="#visual"><span>go</span></a>' +
		'</div>'

	$('#quick').append(_quick);
	var wh = $(window).height();
	$(window).on('scroll', function () {
		var dh = $(document).height();
		var wst = $(window).scrollTop();
		var fh = $('.footer').height();
		if (dh <= wh + wst + fh - 200) {
			$('#quick').addClass('quick-bottom');
		} else {
			$('#quick').removeClass('quick-bottom');
		}
	});
	// menu import 
	var _menu = 
		'<div class="gnb-in">' +
			'<h1><a href="/kr/index.html"><span>Multicampus</span></a></h1>' +
			'<div class="area-wrap">' +
			'<ul class="area-l">' +
				'<li class="sub-item1">' +
					'<a href="#" class="m-sub-link-current"><span>서비스</span></a>' +
					'<!-- gnb-sub -->' +
					'<div class="gnb-sub">' +
						'<div class="gnb-sub-in">' +
							'<div class="gnb-msg">' +
								'임직원들의 역량 진단부터 <br />' +
								'교육, 자격 인증과 취업 연계까지,<br />' +
								'조직과 개인의 성장을 위한<br />' +
								' 토탈러닝서비스를 제공합니다.<br />' +
							'</div>' +
							'<div class="sub-item">' +
								'<ul>' +
									'<li><a href="/kr/service/consulting.html">컨설팅 서비스</a></li>' +
									'<li><a href="/kr/service/learning.html">러닝 서비스</a></li>' +
									'<li><a href="/kr/service/platform.html">플랫폼 서비스</a></li>' +
									'<li><a href="/kr/service/bpo.html">BPO 서비스</a></li>' +
									'<li><a href="/kr/service/certi.html">자격인증 서비스</a></li>' +
									'<li><a href="/kr/service/recruit.html">채용연계 서비스</a></li>' +
								'</ul>' +
							'</div>' +
							'<div class="add-items">' +
								'<div class="add-item">' +
									'<p class="pic"><img src="/kr/images/common/gnb-pic1.png" alt="" /></p>' +
									'<p class="des">SERICEO는 경영자와 오피니언 리더들에게 꼭 필요한 지식과 정보를 담은 정제된 콘텐츠와 멤버십 네트워크를 제공하는 프리미엄 서비스로, 대한민국의 지식 트렌드를 선도하고 있습니다.</p>' +
									'<div class="button-detail">' +
										'<a target="_blank" href="https://www.sericeo.org/" class="link-detail">자세히 보기</a>' +
									'</div>' +
								'</div>' +
								'<div class="add-item">' +
									'<p class="pic"><img src="/kr/images/common/gnb-pic2.png" alt="" /></p>' +
									'<p class="des">OPIc은 1,700여 개 기업에서 신입채용, 인사고과, 교육평가, 인력선발 부분에서 활용하고 있는 국제공인 외국어 말하기 평가입니다.</p>' +
									'<div class="button-detail">' +
										'<a target="_blank" href="https://www.opic.or.kr" class="link-detail">자세히 보기</a>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<!-- //gnb-sub -->' +
				'</li>' +
				'<li class="sub-item2">' +
					'<a href="#"><span>콘텐츠</span></a>' +
					'<!-- gnb-sub -->' +
					'<div class="gnb-sub">' +
						'<div class="gnb-sub-in">' +
							'<div class="gnb-msg">' +
								'DT시대 경쟁력 확보를 위한 </br>' +
								'핵심 역량 교육부터</br>' +
								'직무, 법정의무교육까지, </br>' +
								'임직원의 역량 향상과 </br>' +
								'비즈니스 성과로 이어지는 </br>' +
								'다양한 솔루션을 제시합니다.' +
							'</div>' +
							'<div class="sub-item">' +
								'<ul>' +
									'<li><a href="/kr/contents/dt.html">DT</a></li>' +
									'<li><a href="/kr/contents/leadership.html">리더십</a></li>' +
									'<li><a href="/kr/contents/jobskill.html">직무</a></li>' +
									'<li><a href="/kr/contents/language.html">외국어</a></li>' +
									'<li><a href="/kr/contents/foundational-skills.html">공통역량</a></li>' +
									'<li><a href="/kr/contents/compliance.html">법정의무</a></li>' +
									'<li><a href="/kr/contents/biz-life.html">자기계발</a></li>' +
								'</ul>' +
							'</div>' +
							'<div class="add-items">' +
								'<div class="add-item">' +
									'<p class="pic"><img src="/kr/images/common/gnb-pic3.png" alt="" /></p>' +
									'<p class="des">데이터가 곧 기업의 경쟁력인 시대. <br />멀티캠퍼스 DS 아카데미는 직무·역량별 체계적인 솔루션을 제공하여 기업의 DS 인력양성에 기여하고 있습니다.</p>' +
									'<div class="button-detail">' +
										'<a target="_blank" href="https://www.multicampus.com/system/menu/iframe?p_url=aHR0cHM6Ly9lbC5tdWx0aWNhbXB1cy5jb20vZGVfY29tbW9uL211bGNhbS9tYWlsLzIwMjIvMDMvMDMyMV8yLzAzMjFfMi5odG1s&htmlHghtPixelSize=7000&p_menu=MjY5I01BSU4=&p_gubun=Qw==" class="link-detail">자세히 보기</a>' +
									'</div>' +
								'</div>' +
								'<div class="add-item">' +
									'<p class="pic"><img src="/kr/images/common/gnb-pic4.png" alt="" /></p>' +
									'<p class="des">매일경제-멀티캠퍼스 Real MBA는 다년간의 노하우를 기반으로 한 고품질 교육프로그램을  제공하여 DT시대의 핵심리더를 양성하고 있습니다.</p>' +
									'<div class="button-detail">' +
										'<a target="_blank" href="http://realmba.multicampus.com/" class="link-detail">자세히 보기</a>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<!-- //gnb-sub -->' +
				'</li>' +
				'<li class="sub-item2-a">' +
					'<a href="#"><span>FOCUS</span></a>' +
					'<!-- gnb-sub -->' +
					'<div class="gnb-sub">' +
						'<div class="gnb-sub-in">' +
							'<div class="gnb-msg">' +
								'급변하는 경영 환경 속,</br>' +
								'기업의 내일을 대비하기 위해</br>' +
								'오늘 주목해야 할</br>' +
								'중점 서비스를 소개합니다.' +
							'</div>' +
							'<div class="sub-item">' +
								'<ul>' +
									'<li><a href="/kr/focus/metaverse/">메타버스 러닝</a></li>' +
									'<li><a href="/kr/focus/it/">IT</a></li>' +
									'<li><a href="/kr/focus/language/">외국어</a></li>' +
									'<li><a href="/kr/focus/mba/">MBA</a></li>' +
									'<li><a href="/kr/focus/serilibrary/">지식라이브러리</a></li>' +
								'</ul>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<!-- //gnb-sub -->' +
				'</li>' +
				'<li class="sub-item3 sub-only">' +
					'<a href="https://www.sericeo.org/" target="_blank"><span>SERICEO</span></a>' +
				'</li>' +
				'<li class="sub-item4 sub-only">' +
					'<a href="https://www.opic.or.kr/opics/jsp/senior/index.jsp" data-mlink="https://m.opic.or.kr/opics/jsp/senior/indexMobile.jsp" target="_blank"><span>OPIc</span></a>' +
				'</li>' +
				'<li class="sub-item5 sub-only">' +
					'<a href="https://certi.multicampus.com/main" target="_blank"><span>ProDS</span></a>' +
				'</li>' +
				'<li class="sub-item6 sub-only">' +
					'<a href="https://event.multicampus.com/multicampusmain" target="_blank"><span>IT취업교육</span></a>' +
				'</li>' +
					'<li class="sub-item7 sub-only">' +
					'<a href="https://event.multicampus.com/seoul" target="_blank"><span>서울형청년인턴</span></a>' +
				'</li>' +
			'</ul>' +
			'<ul class="area-r">' +
				'<li class="sub-item3"><a href="#"><span>회사소개</span></a>' +
					'<!-- gnb-sub -->' +
					'<div class="gnb-sub">' +
						'<div class="gnb-sub-in">' +
							'<div class="gnb-msg">' +
								'멀티캠퍼스는 기업교육 시장의 <br />First Mover로서, <br />고객사의 Learning Driven<br>Digital Transformation 혁신을<br>선도하며 HRD의 생태계를<br>리딩하고 있습니다.' +
							'</div>' +
							'<div class="sub-item">' +
								'<ul>' +
									'<li><a href="/kr/about_comp/home.html">멀티캠퍼스 소개</a></li>' +
									'<li><a href="/kr/about_comp/ceo.html">CEO 인사말</a></li>' +
									'<li><a href="/kr/about_comp/about_history.html">연혁</a></li>' +
									'<li class="sub-has"><a href="#">윤리·준법경영<i></i></a>'+
										'<ul>' +
											'<li><a href="/kr/about_comp/principle.html">경영원칙</a></li>' +
											'<li><a href="/kr/about_comp/compliance.html">준법경영</a></li>' +
											'<li><a href="https://ethics.multicampus.com/" target="_blank">부정제보</a></li>' +
										'</ul>' +
									'</li>' +
									'<li class="sub-has"><a href="#">투자자정보<i></i></a>' +
										'<ul>' +
											'<li><a href="/kr/about_comp/ir-fif.html">재무정보</a></li>' +
											'<li><a href="/kr/about_comp/ir-stockholder.html">주주정보</a></li>' +
											'<li><a href="/om/about/sub/requestDartNotiMstr">공시정보·전자공고</a></li>' +
											'<li><a href="/om/about/sub/earningsRelease">IR 자료실</a></li>' +
										'</ul>' +
									'</li>' +
									'<li class="sub-has"><a href="#">홍보<i></i></a>' +
										'<ul>' +
											'<li><a href="/om/about/sub/requestNewsList">언론보도</a></li>' +
											'<li><a href="/kr/about_comp/pr-awards.html">수상실적</a></li>' +
										'</ul>' +
									'</li>' +
									'<li><a href="https://multicampus.recruiter.co.kr/appsite/company/index" target="_blank">인재채용</a></li>' +
									'<!--li><a href="#" target="_blank">About Company(English)</a></li-->' +
								'</ul>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<!-- //gnb-sub -->' +
				'</li>' +
				'<li class="rbtn"><a href="/main" target="_blank" data-mlink="https://event.multicampus.com/"><span>교육과정신청</span><div class="circle circle-12"></div><div class="circle circle-11"></div><div class="circle circle-10"></div><div class="circle circle-9"></div><div class="circle circle-8"></div><div class="circle circle-7"></div><div class="circle circle-6"></div><div class="circle circle-5"></div><div class="circle circle-4"></div><div class="circle circle-3"></div><div class="circle circle-2"></div><div class="circle circle-1"></div></a></li>' +
			'</ul>' +
			'</div>' +
			'<div class="m-gnb-button">' +
				'<button type="button" id="m-menu"><span>메뉴</span></button>' +
			'</div>' +
		'</div>' +
		'<div class="gnb-sub-service gnb-sub-service1">' +
			'<div class="gnb-sub-service-in">' +
				'<p class="cate">서비스</p>' +
				'<p class="sub-cate"></p>' +
				'<span class="mw">'+
					'<a class="subitemlink" href="/kr/service/consulting.html">컨설팅 서비스</a>' +
					'<a class="subitemlink" href="/kr/service/learning.html">러닝 서비스</a>' +
					'<a class="subitemlink" href="/kr/service/platform.html">플랫폼 서비스</a>' +
					'<a class="subitemlink" href="/kr/service/bpo.html">BPO 서비스</a>' +
					'<a class="subitemlink" href="/kr/service/certi.html">자격인증 서비스</a>' +
					'<a class="subitemlink" href="/kr/service/recruit.html">채용연계 서비스</a>' +
				'</span>' +
			'</div>' +
		'</div>' +
		'<div class="gnb-sub-service gnb-sub-service2">' +
			'<div class="gnb-sub-service-in">' +
				'<p class="cate">콘텐츠</p>' +
				'<p class="sub-cate"></p>' +
				'<span class="mw">'+
					'<a class="subitemlink" href="/kr/contents/dt.html">DT</a>' +
					'<a class="subitemlink" href="/kr/contents/leadership.html">리더십</a>' +
					'<a class="subitemlink" href="/kr/contents/jobskill.html">직무</a>' +
					'<a class="subitemlink" href="/kr/contents/language.html">외국어</a>' +
					'<a class="subitemlink" href="/kr/contents/foundational-skills.html">공통역량</a>' +
					'<a class="subitemlink" href="/kr/contents/compliance.html">법정의무</a>' +
					'<a class="subitemlink" href="/kr/contents/biz-life.html">자기계발</a>' +
				'</span>' +
			'</div>' +
		'</div>' +
		'<div class="gnb-sub-service gnb-sub-service2-a">' +
			'<div class="gnb-sub-service-in">' +
				'<p class="cate">FOCUS</p>' +
				'<p class="sub-cate"></p>' +
				'<span class="mw">'+
					'<a class="subitemlink" href="/kr/focus/metaverse/">메타버스 러닝</a>' +
					'<a class="subitemlink lts0" href="/kr/focus/it/">IT</a>' +
					'<a class="subitemlink" href="/kr/focus/language/">외국어</a>' +
					'<a class="subitemlink lts0" href="/kr/focus/mba/">MBA</a>' +
					'<a class="subitemlink" href="/kr/focus/serilibrary/">지식라이브러리</a>' +
				'</span>' +
			'</div>' +
		'</div>' +
		'<div class="gnb-sub-service gnb-sub-service3">' +
			'<div class="gnb-sub-service-in">' +
				'<p class="cate">회사소개</p>' +
				'<p class="sub-cate"></p>' +
				'<span class="mw">'+
					'<a class="subitemlink" href="/kr/about_comp/home.html">멀티캠퍼스 소개</a>' +
					'<a class="subitemlink" href="/kr/about_comp/ceo.html">CEO 인사말</a>' +
					'<a class="subitemlink" href="/kr/about_comp/about_history.html">연혁</a>' +
					'<span class="g-sub"><a class="subitemlink" href="#">윤리·준법경영</a>'+
						'<p class="g-sub-items">' +
							'<a href="/kr/about_comp/principle.html">경영원칙</a>' +
							'<a href="/kr/about_comp/compliance.html">준법경영</a>' +
							'<a href="https://ethics.multicampus.com/" target="_blank">부정제보</a>' +
						'</p>' +
					'</span>' +
					'<span class="g-sub"><a class="subitemlink" href="#">투자자정보</a>'+
						'<p class="g-sub-items">' +
							'<a href="/kr/about_comp/ir-fif.html">재무정보</a>' +
							'<a href="/kr/about_comp/ir-stockholder.html">주주정보</a>' +
							'<a href="/om/about/sub/requestDartNotiMstr">공시정보·전자공고</a>' +
							'<a href="/om/about/sub/earningsRelease">IR 자료실</a>' +
						'</p>' +
					'</span>' +
					'<span class="g-sub"><a class="subitemlink" href="#">홍보</a>'+
						'<p class="g-sub-items">' +
							'<a href="/om/about/sub/requestNewsList">언론보도</a>' +
							'<a href="/kr/about_comp/pr-awards.html">수상실적</a>' +
						'</p>' +
					'</span>' +
					'<a class="subitemlink target-blank" href="https://multicampus.recruiter.co.kr/appsite/company/index" target="_blank">인재채용</a>' +
				'</span>' +
			'</div>' +
		'</div>'
	$('#gnb').append(_menu);

	//gnb start
	var $gnb = $('#gnb');
	/*
	window.onscroll = function() {
		if ( $(window).scrollTop() > 0 ){
			$gnb.css('top', -$gnb.find('>.gnb-in').outerHeight());
		} else {
			$gnb.css('top', 0);
		}
	};
	*/

	var prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			$gnb.css('top', 0);
		}
		if (prevScrollpos < currentScrollPos) {
			$gnb.css('top', -$gnb.find('>.gnb-in').outerHeight());
		}

		if (prevScrollpos > $gnb.find('>.gnb-in').height() ) {
			$gnb.addClass('float');
		} else {
			$gnb.removeClass('float');
		}
		if ( $(window).scrollTop() <= 0 ){
			$gnb.css('top', 0);
			$gnb.removeClass('float');
		} 
		prevScrollpos = currentScrollPos;
	}

	$gnb.on('mouseenter', function () {
		$(this).addClass('gnb-over');
	});
	$gnb.on('mouseleave', function () {
		$(this).removeClass('gnb-over');
	});

	$gnb.find('[class^="sub-item"]').on('mouseenter', function() {
		var $this = $(this);
		$this.addClass('sub-on');
	});
	$gnb.find('[class^="sub-item"]').on('mouseleave', function() {
		var $this = $(this);
		$this.removeClass('sub-on');
	});
	/*
	$gnb.find('.sub-has > a').on('click', function () {
		$(this).next('ul').slideToggle('fast').end().closest('li').toggleClass('opened');
		return false;
	});
	*/

	$gnb.find('.g-sub').on({
		'mouseenter': function () {
			$(this).addClass('on');
		},
		'mouseleave': function () {
			$(this).removeClass('on');
		}
	});
	$gnb.find('.g-sub').on('click', function () {
		if ( $gnb.find('.area-wrap').is(':hidden') ) {
			$(this).toggleClass('fold');
			$(this).find('.g-sub-items').slideToggle('fast');
		};
	});
	// gnb end

	// modal start
	/*
	$('#movie').on('click', function(){
		$('html').addClass('modal-on');
		$(this).next('.modal').addClass('modal-visible');
		return false;
	});
	$('.modal > .layerdim, .modal .modal-close').on('click', function(){
		$('html').removeClass('modal-on');
		$(this).closest('.modal').removeClass('modal-visible');
	});
	*/
	// modal end 

	//nav
	if( $('.navbox').length > 0 ){
		var _navbox = $('.navbox');
		var _nav = $('.navItem');
		var thisNav = 0
		var thisNavItem = _nav.eq(thisNav);
		var _navLink = _navbox.find('a');
		var thisCurrent = _navLink.eq(thisNav).addClass('current');
		var gap = 0;

		//_navbox.width(_navLink.first().outerWidth() + 40);

		_navLink.on('click', function(){
			var $this = $(this);
			$('html, body').stop(true,true).animate({
				scrollTop: _nav.eq(_navLink.index(this)).offset().top - gap
			}, 500, function(){
				_navLink.removeClass('current');
				thisCurrent = $this;
				$this.addClass('current');
			});
			return false;
		});

		var prevScrolltop = $(window).scrollTop();
		var wHeight = $(window).height();
		var navTop = $('.sub-contents').offset().top;
		var footerHeight = $('.footer').outerHeight();

		function _scroll() {
			var dHeight = $(document).height();
			var currentScrollTop = $(this).scrollTop();
			if (prevScrolltop > currentScrollTop) {
				// console.dir('up');
				gap =  $('body').hasClass('main') ? $('#gnb').height() : $('#gnb').height() + $('.gnb-sub-service').height();
				if( currentScrollTop + gap <= _nav.eq(thisNav).offset().top && thisNav != 0) {
					_navLink.eq(_navLink.length - 1).removeClass('current');
					thisNav--;
					thisCurrent.removeClass('current');
					thisCurrent = _navLink.eq(thisNav).addClass('current');
				}
			}
			if (prevScrolltop < currentScrollTop) {
				// console.dir('down');
				gap =  $('body').hasClass('main') ? 0 : $('.gnb-sub-service').height();
				if( thisNav !=_navLink.length - 1 && currentScrollTop > _nav.eq(thisNav + 1).offset().top - gap ) {
					thisNav++;
					thisCurrent.removeClass('current');
					thisCurrent = _navLink.eq(thisNav).addClass('current');
				};

				if( (dHeight ) <= ( currentScrollTop + wHeight  + 55 ) ) {
					_navLink.removeClass('current');
					_navLink.eq(_navLink.length - 1).addClass('current');
					thisNav = _navLink.length - 1;
				};
			}

			if ( navTop < currentScrollTop ) {
				$('#lnb-link').addClass('lnb-float');
			} else {
				$('#lnb-link').removeClass('lnb-float');
			}
			prevScrolltop = currentScrollTop;
		}
		$(window).on({
			scroll: function(){
				_scroll()
			},
			resize: function(){
				navTop = $('.sub-contents').offset().top;
			},
		})
	}
	//nav

	$(window).on('resize', function () {
		if ($('#gnb .area-wrap').is(':visible')) {
			$('#gnb .g-sub').removeClass('fold').find('.g-sub-items').removeAttr('style');
		};
	});

	//default slide
		var swiper = new Swiper('.default-slide', {
		slidesPerView: '1',
		spaceBetween: 8,
		breakpoints: {
			640: {
				spaceBetween: 16
			},
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	if( $('.default-slide .swiper-slide').length === 1 ) {
		$('.default-slide .swiper-slide').find('.copy-r').addClass('copy-r0');
	}
	//default slide

	var swiperTab = new Swiper('#swiper-tab', {
		slidesPerView: 'auto',
		freeMode: true
	});
	var stIndex = 0;
	if ( $('#swiper-list').hasClass('stIndex2') ) {
		stIndex = 2;
	}
	var swiperList = new Swiper('#swiper-list', {
		autoHeight:true,
		spaceBetween: 10,
		pagination: {
			el: ".swiper-pagination.pagination-bar",
			type: "progressbar"
		},
		initialSlide: stIndex,
		on: {
			init: function () {
				$('#swiper-counter .current').text(this.activeIndex + 1);
				$('#swiper-counter .total').text(this.slides.length);
			},
			slideChange: function () {
				$('#swiper-tab .swiper-slide a').removeClass('active').eq(this.realIndex).addClass('active');
				$('#swiper-counter .current').text(this.realIndex + 1);
			}
		}
	});
	$('#swiper-tab .swiper-slide a').on('click', function () {
		$(this).closest('.swiper-wrapper').find('.swiper-slide > a').removeClass('active').end().end().addClass('active');
		swiperTab.slideTo($('#swiper-tab .swiper-slide a').index(this), 300);
		swiperList.slideTo($('#swiper-tab .swiper-slide a').index(this), 300);
		return false;
	});

	// 모바일 햄버거
	$('.area-wrap').clone(true, false).appendTo('#m-gnbs');
	var lnbTime = 400;
	var $mGnbs = $('#m-gnbs');
	var $mGnbsItem = $mGnbs.find('.gnb-sub-in');
	$mGnbsItem.eq(0).css('margin-left', 20).show();
	$mGnbsItem.eq(0).closest('.gnb-sub').addClass('gnb-sub-current');

	$mGnbs.find('[class^="sub-item"] > a').on('click', function () {
		if( !$(this).closest('li').hasClass('sub-only') ) {
			$mGnbs.find('[class^="sub-item"] > a').removeClass('m-sub-link-current');
			$(this).addClass('m-sub-link-current');
			$mGnbs.find('.gnb-sub').removeClass('gnb-sub-current').find('.gnb-sub-in').hide().css('margin-left', 0);
			$(this).closest('li').find('.gnb-sub').addClass('gnb-sub-current').find('.gnb-sub-in').fadeIn('fast').css('margin-left', 20);
		}
	});
	$mGnbs.find('.sub-has > a').on('click', function () {
		$(this).closest('li').toggleClass('opened').end().next('ul').slideToggle('fast');
		return false;
	});

	$('#m-menu').on('click', function () {
		if ($('html').hasClass('m-menu-open')) {
			$mGnbs.addClass('gnb-hidden');
			window.setTimeout(function () {
				$('html').removeClass('m-menu-open')
				$mGnbs.removeClass('gnb-hidden');
				$('#gnb').removeClass('lnb-over');
			}, lnbTime)
		} else {
			$('html').addClass('m-menu-open');
			$('#gnb').addClass('lnb-over');
		}
	});
	//go top
	var $scrollLink = $('.gotop');
	$scrollLink.on('click', function() {
		$( 'html, body' ).stop(true, true).animate( {
			scrollTop : 0
		}, 500, function () {
		})
		return false;
	});

	// main tab
	// 메뉴 슬라이드 처리 (가로 사이즈가 767 보다 작을 때 실행)
	var $tablinkWrap = $('#tablink-wrap');
	var $tablinkWrapItems = $tablinkWrap.find('li');
	var pageCode = 0 //null 메인, 0~4 까지 각 메뉴 활성화(서브 콘텐츠 페이지에 적용)

	function tablinkWrapCheck(){
		if($(window).outerWidth() > 767) {
			$tablinkWrap.sly('destroy');
			$tablinkWrap.removeClass('gnb-scroll');
			$tablinkWrapItems.eq(pageCode).addClass('current');
		} else {
			$tablinkWrap.addClass('gnb-scroll');
			$tablinkWrap.sly('reload');
			$tablinkWrap.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: pageCode,
				scrollBy: 1,
				activatePageOn: 'click',
				speed: 300,
				elasticBounds: 1,
				easing: 'easeOutExpo',
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,
				activeClass: 'current'
			});
		}
	}
	tablinkWrapCheck();
	$(window).on('resize', function(e){
		tablinkWrapCheck();
	});

	var $mainTab = $('#main-tab');
	$mainTab.find('.tablink > li').on('click', function () {
		$(this).siblings().removeClass('current').end().addClass('current');
		$mainTab.find('.target-con').removeClass('target-con-on');
		$($(this).find('a').attr('href')).addClass('target-con-on');

		for(var i=0; i<$tablinkWrapItems.length; i++) {
			if($tablinkWrapItems.eq(i).hasClass('current')) {
				pageCode = i;
			}
		}

		var totalWidth = 0;
		for(var j=0; j<=pageCode; j++) {
			totalWidth += $tablinkWrapItems.eq(j).outerWidth(true);
		}

		if($('#tablink-wrap').hasClass('gnb-scroll') && $('#tablink-wrap').outerWidth() <= totalWidth) {

		}
		return false;
	});



	// m sub menu open
	$gnb.find('.cate').on('click', function () {
		$(this).siblings('.mw').slideToggle('fast').closest('.gnb-sub-service').toggleClass('gnb-sub-service-open');
	});

	// 풋터
	var _footer = 
			'<div class="b2b">' +
				'<div class="fo_comp_wrap">' +
					'<ul>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-01.png" alt="고용노동부 | 직업능력심사평가원 직업능력개발 우수 훈련기관 3년 2019.10 ~ 2022.9"> </li>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-02.png" alt="인적자원개발 우수기관"> </li>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-03.png" alt="개인정보보호 우수사이트"> </li>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-04.png" alt="정보통신산업진흥청 NIPA(정보통신산업진흥원) 이러닝 품질인증"> </li>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-07.png" alt="가족친화 우수기입"> </li>' +
						'<li><img src="http://el.multicampus.com/de_common/b2c/info/images/common/banner-dark-09.png" alt="ISMS 인증범위 Total HRD 서비스 운영 2018.11.06~2021.11.05"> </li>' +
					'</ul>' +
				'</div>' +
				'<div class="fo_etc_wrap">' +
					'<div class="etc_link_wrap">' +
						'<div id="crazy">' +
							'<ul class="etc_link">' +
								'<li><img src="https://www.multicampus.com/img/common/logo_dark.png" alt="multicampus"></li>' +
								'<li class="info"><a href="http://about.multicampus.com" target="_blank">회사소개</a></li>' +
								'<li class="recruit"><a href="http://multicampus.recruiter.co.kr" target="_blank">채용안내</a></li>' +
								//'<li class="agree1"><a href="javascript:void(0);" data-modal-page="tosPopup">이용약관</a></li>' +
								'<li><a href="javascript:void(0);" data-js="modal_custom_agree">이용약관</a></li>' +
								//'<li class="agree2"><a href="javascript:void(0);" data-modal-page="privacyPolicyPopup" class="strong">개인정보처리방침</a></li>' +
								'<li class="agree2"><a href="javascript:void(0);" data-js="modal_custom_agree2" class="strong">개인정보처리방침</a></li>' +
								'<li class="contact"><a href="https://www.multicampus.com/cs/map/mapMain?p_menu=MTA1I01BSU4=&p_gubun=Qw==&req=0" target="_blank">찾아오시는 길(본사/멀티캠퍼스 선릉·역삼)</a></li>' +
								'<li class="none"></li>' +
								'<li class="open"><a href="http://www.multicampus.com/main/content/sub/OSLNotice" target="_blank">오픈소스라이선스</a></li>' +
								'<li class="wrong"><a href="https://ethics.multicampus.com/" target="_blank">부정제보</a></li>' +
								'<li class="contact-us"><a href="javascript:void(0);" data-js="modal_custom_contact">Contact us</a></li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
					'<div class="detail_info">' +
						'<p class="location"><span>㈜멀티캠퍼스</span><i> : </i>서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</p>' +
						'<div class="mulcam-info">' +
							'<span class="wide">대표이사 : 박성태</span>' +
							'<span class="mobile">대표이사 : 박성태</span>' +
							'<span>사업자등록번호 : 104-81-53114</span>' +
							'<span>통신판매신고번호 : 제2016-서울강남-00515호</span>' +
							'<span>개인정보관리 최고책임자 : 임영관 이사</span>' +
						'</div>' +
					'</div>' +
					'<p class="copy">Copyright by Multicampus Co., Ltd. All rights reserved.</p>' +
					'<div class="right">' +
						'<span class="link">' +
							'<a target="_blank" href="http://naver.me/5EhYuPlO" class="icon-naver"><span>네이버</span></a>' +
							'<a target="_blank" href="https://www.youtube.com/multicampus_official" class="icon-youtube"><span>유투브</span></a>' +
							'<a target="_blank" href="https://www.facebook.com/multicampus.official" class="icon-facebook"><span>페이스북</span></a>' +
						'</span>' +
						'<div class="combobox-wrap combobox-wrap-web" data-js="combobox" style="width: 160px; display: inline-block;" id="familySite">' +
							'<select name="" id="" title="family site 선택" class="combobox combobox--basic initial combobox--white combobox--pos-top">' +
								'<option value="" selected="selected">FAMILY SITE</option>' +
								'<option value="www.multicampus.com_main">멀티캠퍼스 교육사이트</option>' +
								'<option value="www.sericeo.org">SERICEO</option>' +
								'<option value="www.seripro.org">SERIPro</option>' +
								'<option value="www.opic.or.kr">OPIc</option>' +
								'<option value="realmba.multicampus.com">Real MBA</option>' +
								'<option value="hrleader.multicampus.com">HR Leaders’ Club</option>' +
								'<option value="multicampus.edu.vn">Multicampus Vietnam</option>' +
								'<option value="www.languagetesting.com">LTI</option>' +
							'</select>' +
						'</div>' +
						'<button type="button" class="o-button o-button--inner family-go-web" style="min-width: auto; margin-left: 6px;" id="familySiteGo">' +
							'<span>GO</span>' +
						'</button>' +
						'<div class="combobox-wrap combobox-wrap-mobi" data-js="combobox" style="width: 160px; display: inline-block;" id="familySite2">' +
							'<select name="" id="" title="family site 선택" class="combobox combobox--basic initial combobox--white combobox--pos-top">' +
								'<option value="" selected="selected">FAMILY SITE</option>' +
								'<option value="event.multicampus.com">멀티캠퍼스 교육사이트</option>' +
								'<option value="m.sericeo.org">SERICEO</option>' +
								'<option value="m.seripro.org">SERIPro</option>' +
								'<option value="m.opic.or.kr">OPIc</option>' +
								'<option value="realmba.multicampus.com">Real MBA</option>' +
								'<option value="hrleader.multicampus.com">HR Leaders’ Club</option>' +
								'<option value="multicampus.edu.vn">Multicampus Vietnam</option>' +
								'<option value="www.languagetesting.com">LTI</option>' +
							'</select>' +
						'</div>' +
						'<button type="button" class="o-button o-button--inner  family-go-mobi" style="min-width: auto; margin-left: 6px;" id="familySiteGo2">' +
							'<span>GO</span>' +
						'</button>' +
					'</div>' +
				'</div>' +
				'<div class="tel">' +
					'<div class="tel-in">' +
						'<span class="strong">고객센터 1544-9001</span>' +
						'<span>평일 08:00~20:00</span>' +
						'<span>휴일 09:00~18:00 (점심시간 12:00~13:00 제외)</span>' +
					'</div>' +
				'</div>' +
			'</div>'
	$('#footer').append(_footer);

	$('#footer').on('click', '.etc_link a[data-modal-page]', function () {
		var mdPup = this.getAttribute("data-modal-page");
		if (_.isEqual(mdPup, 'oslPopup')) {
			$(this).attr({
				href: '/main/content/sub/OSLNotice',
				target: '_blank'
			});
		} else {
			Snap.openModal("/main/content/sub/"+ mdPup, function(){});
		}
		return false;
	});

	$('#footer').on('click', '#familySiteGo', function () {
		$("#familySite select option:selected").each(function() {
			var url = $(this).val();
			if (url) {
				if ( url.split('_').length > 1 ) {
					url = url.split('_')[0] + '/' + url.split('_')[1];
				}
				window.open('http://' + url);
			}
			return false;
		});
	});

	$('#footer').on('click', '#familySiteGo2', function () {
		$("#familySite2 select option:selected").each(function() {
			var url = $(this).val();
			if (url) window.open('http://' + url);
			return false;
		});
	});

	var agreeLayer3 = 
		'<section id="modal_detail_contact" class="c-modal  c-modal--size-3" tabindex="-1" role="dialog" aria-labelledby="modal_detail_agree__title">' +
			'<div class="c-modal__wrap" role="document">' +
				'<header class="c-modal__head">' +
					'<h2 class="c-modal__title" id="modal_detail_agree__title">Contact us</h2>' +
				'</header>' +
				'<div class="c-modal__body">' +
					'<div class="c-modal__scroll">' +
						'<div class="c-modal__content scrollbar-inner">' +
							'<div id="contact-wrap-cover"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="c-modal__foot"> </div>' +
				'<button type="button" class="c-modal__close" data-dismiss="cancel">' +
					'<span class="screen--out">레이어 닫기</span>' +
				'</button>' +
			'</div>' +
		'</section>'

	$('body').append(agreeLayer3);
	$('body').find('#contact-wrap-cover').load('/kr/contact/contact.html #contact-wrap .contact-box');
	$('#footer').find('[data-js="modal_custom_contact"]').modal({
		src: '#modal_detail_contact',
		auto: true
	});

	var agreeLayer = 
		'<section id="modal_detail_agree" class="c-modal  c-modal--size-3" tabindex="-1" role="dialog" aria-labelledby="modal_detail_agree__title">' +
			'<div class="c-modal__wrap" role="document">' +
				'<header class="c-modal__head">' +
					'<h2 class="c-modal__title" id="modal_detail_agree__title">이용약관</h2>' +
				'</header>' +
				'<div class="c-modal__body">' +
					'<div class="c-modal__scroll">' +
						'<div class="c-modal__content scrollbar-inner">' +
						//	'<div class="agree-select">' +
						//		'<div class="combobox-wrap" data-js="combobox">' +
						//			'<select id="agree-p-select" title="이용약관" class="combobox combobox--basic initial">' +
						//				'<option value="agree">2021년 5월 4일 시행일자 기준</option>' +
						//				'<option value="agree_20210507">2021년 5월 7일 시행일자 기준</option>' +
						//			'</select>' +
						//		'</div>' +
						//	'</div>' +
							'<div id="agreebox-wrap-cover"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="c-modal__foot"> </div>' +
				'<button type="button" class="c-modal__close" data-dismiss="cancel">' +
					'<span class="screen--out">레이어 닫기</span>' +
				'</button>' +
			'</div>' +
		'</section>'

	$('body').append(agreeLayer);
	$('body').find('#agreebox-wrap-cover').load('/kr/agree/agree.html #agree-wrap .agreebox-wrap');
	$('#footer').find('[data-js="modal_custom_agree"]').modal({
		src: '#modal_detail_agree',
		auto: true
	});
	$('body').find('#agree-p-select').on('change', function () {
		var agreeVal = $(this).val();
		$('body').find('#agreebox-wrap-cover').load('/kr/agree/' + agreeVal + '.html #agree-wrap .agreebox-wrap');
	});

	var agreeLayer2 = 
		'<section id="modal_detail_agree2" class="c-modal  c-modal--size-3" tabindex="-1" role="dialog" aria-labelledby="modal_detail_agree__title">' +
			'<div class="c-modal__wrap" role="document">' +
				'<header class="c-modal__head">' +
					'<h2 class="c-modal__title" id="modal_detail_agree__title">개인정보처리방침</h2>' +
				'</header>' +
				'<div class="c-modal__body">' +
					'<div class="c-modal__scroll">' +
						'<div class="c-modal__content scrollbar-inner">' +
							'<div class="agree-select">' +
								'<div class="combobox-wrap" data-js="combobox">' +
									'<select id="agree-p-select2" title="이용약관" class="combobox combobox--basic initial">' +
										'<option value="agree">2022년 1월 12일 시행일자 기준</option>' +
										'<option value="agree_20210507">2021년 5월 7일 시행일자 기준</option>' +
									'</select>' +
								'</div>' +
							'</div>' +
							'<div id="agreebox-wrap-cover2"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="c-modal__foot"> </div>' +
				'<button type="button" class="c-modal__close" data-dismiss="cancel">' +
					'<span class="screen--out">레이어 닫기</span>' +
				'</button>' +
			'</div>' +
		'</section>'

	$('body').append(agreeLayer2);
	$('body').find('#agreebox-wrap-cover2').load('/kr/agree2/agree.html #agree-wrap .agreebox-wrap');
	$('#footer').find('[data-js="modal_custom_agree2"]').modal({
		src: '#modal_detail_agree2',
		auto: true,
		onAfterClose : function () {
			$('#agree-p-select2 option:eq(0)').prop('selected', true);
			$('#agree-p-select2').trigger('update');
		}
	});
	$('body').find('#agree-p-select2').on('change', function () {
		var agreeVal = $(this).val();
		$('body').find('#agreebox-wrap-cover2').load('/kr/agree2/' + agreeVal + '.html #agree-wrap .agreebox-wrap');
	});

	var $frame  = $('#crazy');
	var $slidee = $frame.children('ul').eq(0);
	var $wrap = $frame.parent();
	var pageCode = 0

	function doSly() {
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: pageCode,
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1
		});
		// $($frame).find('>ul').width( $($frame).find('>ul').width() + 50 )
	}
	/*
	window.setTimeout(function () {
		doSly();
	}, 500)
	$(window).resize(function(e) {
		$frame.sly('reload');
	});
	*/

	if(pagecode) {
		switch(pagecode) {
			case 'ss-consulting' : // 컨설팅 서비스
				pagecode = '1-1';
				break;
			case 'ss-learning' : // 러닝 서비스
				pagecode = '1-2';
				break;
			case 'ss-platform' : // 플랫폼 서비스
				pagecode = '1-3';
				break;
			case 'ss-bpo' : // BPO 서비스
				pagecode = '1-4';
				break;
			case 'ss-certi' : // 자격인증 서비스
				pagecode = '1-5';
				break;
			case 'ss-employ' : // 채용연계 서비스
				pagecode = '1-6';
				break;
			case 'cc-dt' : // Digital Transformation
				pagecode = '2-1'; 
				break;
			case 'cc-leadership' : // 리더십
				pagecode = '2-2';
				break;
			case 'cc-duty' : // 직무
				pagecode = '2-3';
				break;
			case 'cc-language' : // 외국어
				pagecode = '2-4';
				break;
			case 'cc-ability' : // 공통역량
				pagecode = '2-5';
				break;
			case 'cc-law' : // 법정의무
				pagecode = '2-6';
				break;
			case 'cc-self' : // 자기계발
				pagecode = '2-7';
				break;
			case 'focus-metaverse' : // 메타버스
				pagecode = '3-1';
				break;
			case 'focus-it' : // IT
				pagecode = '3-2';
				break;
			case 'focus-fl' : // 외국어
				pagecode = '3-3';
				break;
			case 'focus-mba' : // MBA
				pagecode = '3-4';
				break;
			case 'focus-kl' : // 지식라이브러리
				pagecode = '3-5';
				break;
			case 'about-infomation' : // 회사소개
				pagecode = '4-1';
				break;
			case 'about-ceo' : // CEO
				pagecode = '4-2';
				break;
			case 'about-history' : // 연혁
				pagecode = '4-3';
				break;
			case 'about-principle' : // 경영원칙
				pagecode = '4-4-1';
				break;
			case 'about-compliance' : // 준법경영
				pagecode = '4-4-2';
				break;
			case 'ir-fif' : // 재무정보
				pagecode = '4-5-1';
				break;
			case 'ir-stockholder' : // 주주정보
				pagecode = '4-5-2';
				break;
			case 'ir-disc' : // 공시정보 전자공고
				pagecode = '4-5-3';
				break;
			case 'ir-data' : // IR 자료실
				pagecode = '4-5-4';
				break;
			case 'pr' : // 언론보도
				pagecode = '4-6-1';
				break;
			case 'pr-awards' : // 수상실적
				pagecode = '4-6-2';
				break;
		}

		var depth1 = pagecode.split('-')[0] - 1;
		var depth2 = pagecode.split('-')[1] - 1;
		var depth3 = pagecode.split('-')[2] - 1;
		var $gnbSubService = $('.gnb-sub-service');
		$gnbSubService.eq(depth1).show().find('a.subitemlink').eq(depth2).addClass('current').next('.g-sub-items').find('>a').eq(depth3).addClass('selected');
		$gnbSubService.find('.sub-cate').text( $gnbSubService.eq(depth1).find('a.subitemlink').eq(depth2).text() );
		if( depth3 == 0 || depth3 ) {
			$gnbSubService.find('.sub-cate').html( '<span>' + $gnbSubService.eq(depth1).find('a.subitemlink').eq(depth2).text() + ' </span><i>&gt;</i><span>' + $gnbSubService.eq(depth1).find('a.subitemlink').eq(depth2).next('.g-sub-items').find('>a').eq(depth3).text() + '</span>');
		}
	}

	// 문의하기
	var _question = 
		'<div class="request-action">' +
			'<div class="inbox">' +
				'<p class="des-type1">문의하기</p>' +
				'<p class="des-type2">문의 내용을 작성해 주시면 <span class="br2">담당자가 빠른 시일 내에 답변드리겠습니다.</span></p>' +
				'<div class="buttons">' +
					'<a href="https://www.multicampus.com/om/about/sub/requestPopup" class="button button2">기업교육 문의하기</a>' +
					'<a target="_blank" href="https://www.multicampus.com/main" class="button button4" data-mlink="https://event.multicampus.com/">교육과정 신청하기</a>' +
				'</div>' +
			'</div>' +
		'</div>'
	$('#request-action').append(_question);

	// $('.aniview').AniView();

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	if(isMobile){
		$('a[data-mlink]').on('click', function () {
			window.open($(this).data('mlink'))
			return false;
		});
	}
	//document ready end
});

window.onload = function () {
	var _goTargetA = window.location.href.split('?')[1]
	var _goTargetB = _goTargetA.split('_')[0];
	var _goTarget = Number(_goTargetA.split('_')[1])
	if(_goTargetB === 'go') {
		setTimeout(function(){
			$('.navbox').find('a').eq(_goTarget).trigger('click');
		}, 10)
	}
}
