$(document).ready(function(){
	//브랜드 바
	var _topmenu =
		'<div class="top_menu_area2">' +
			'<ul class="fl">' +
				'<li class="tm01"><a href="http://www.multicampus.com" target="_blank">홈</a></li>' +
				'<li class="tm02"><a href="http://el.multicampus.com" target="_blank">이러닝</a></li>' +
				'<li class="tm03"><a href="http://ksp.multicampus.com/ksp/jsp/gate/index.jsp?p_grcode=000002" target="_blank">집합.공개교육</a></li>' +
				'<li class="tm04"><a href="http://www.sericeo.org/" target="_blank">SERICEO</a></li>' +
				'<li class="tm05 selected"><a href="http://www.opic.or.kr/senior/langedu/main.html" target="_blank">외국어교육.평가</a></li>' +
				'<li class="tm06"><a href="http://www.opic.or.kr/senior/gateopic/main.html" target="_blank">OPIc</a></li>' +
			'</ul>' +
			'<ul class="fr">' +
				'<li class="tm07"><a href="http://el.multicampus.com/main/cresys/event/onetime/sparkseminar/zu_seminar_I.jsp?p_seminar_id=help" onclick="window.open(\'http://el.multicampus.com/main/cresys/event/onetime/sparkseminar/zu_seminar_I.jsp?p_seminar_id=help\',\'\',\'width=635,height=580\'); return false;" class="menu7" target="_blank">기업교육문의</a></li>' +
				'<li class="tm08"><a href="http://hrleader.multicampus.com/" target="_blank">HR Leaders\' Club</a></li>' +
			'</ul>' +
		'</div>'
		;

	//gnb
	var _gnblist =
		'<li><a href="'+_gnbCheck2+'main.html">OPIc 교육</a>' +
			'<div class="gnb-sub">' +
				'<div class="gnb-sub-in">' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck2+'sub02.html" class="depth1">영어</a>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck2+'sub03.html" class="depth1">중국어</a>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck2+'sub04.html" class="depth1">일본어/베트남어</a>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck2+'sub05.html" class="depth1">전략어</a>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</li>' +
		'<li><a href="'+_gnbCheck+'index.html">외국어생활관</a>' +
			'<div class="gnb-sub">' +
				'<div class="gnb-sub-in">' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck+'sub1-1.html" class="depth1">외생관 소개</a>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck+'sub2-1.html" class="depth1">외생관 특장점</a>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck+'sub3-1.html" class="depth1">교육과정</a>' +
						'<ul class="depth2">' +
							'<li><a href="'+_gnbCheck+'sub3-1.html">과정 Map</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-2.html">스파르타 집중어학</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-3.html">임원 집중어학</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-4.html">해외 주재원 어학</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-5.html">고급 회화과정</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-6.html">단기 집중과정</a></li>' +
							'<li><a href="'+_gnbCheck+'sub3-7.html">맞춤형 과정</a></li>' +
						'</ul>' +
					'</div>' +
					'<div class="menu">' +
						'<a href="'+_gnbCheck+'sub4-1.html" class="depth1">교육일정</a>' +
					'</div>' +
					'<div class="guide">' +
						'<p class="p1">교육문의</p>' +
						'<p class="p2"><span class="tel">031.320.3007</span></p>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</li>'
	;

	//footer link
	var _footerLinkIn =
		'<ul class="links">' +
			'<li><a href="http://about.multicampus.com/" target="_blank">회사소개</a></li>' +
			'<li><a href="http://career.multicampus.com/" target="_blank">채용안내</a></li>' +
			'<li><a href="/senior/html/agree/provision.html" onclick="window.open(this.href,\'_blank\',\'width=750, height=650, scrollbars=1\'); return false;">이용약관</a></li>' +
			'<li><a href="/senior/html/agree/pop_provision.html" onclick="window.open(this.href,\'_blank\',\'width=750, height=650, scrollbars=1\'); return false;"><strong>개인정보처리방침</strong></a></li>' +
			'<li><a href="http://el.multicampus.com/main/credu/user/community/zu_location.jsp?p_menuid=090060000000000" target="_blank">찾아오시는 길(본사)</a></li>' +
			'<li><a href="http://ksp.multicampus.com/ksp/servlet/controller.gate.common.GateConstServlet?p_process=select-iFrame&p_frameUrl=/multicam/info/MC_Info_08.html&p_grcode=000002&p_menucd=M0402" target="_blank">찾아오시는 길(멀티스퀘어 교육센터)</a></li>' +
		'</ul>' +
		'<div class="select-wrap">' +
			'<select class="" title="family site 선택" id="f_site" name="family1">' +
				'<option value="" selected="selected">FAMILY SITE</option>' +
				'<option value="http://about.multicampus.com/">회사소개</option>' +
				'<option value="http://el.multicampus.com/">이러닝</option>' +
				'<option value="http://bl.multicampus.com/">집합교육</option>' +
				'<option value="http://www.sericeo.org/">SERICEO</option>' +
				'<option value="http://www.seripro.org/">SERIPro</option>' +
				'<option value="http://www.opic.or.kr/">OPIc</option>' +
				'<option value="http://www.imba.ac.kr/">iMBA</option>' +
				'<option value="http://www.opic.or.kr/senior/langedu/main.html">외국어교육·평가</option>' +
				'<option value="http://hrleaderclub.multicampus.com/">HR Leaders\' Club</option>' +
				'<option value="https://www.languagetesting.com/">LTI</option>' +
			'</select>' +
			'<div class="btn-go"><a href="javascript:familyGo();">go</a></div>' +
		'</div>'
		;

	//copyright
	var _footerCopyrightIn = 
		'<p class="address">㈜멀티캠퍼스 서울특별시 강남구 언주로 508 10~17층(역삼동, 서울상록빌딩)&nbsp;&nbsp;&nbsp;대표이사 : 유연호<br />사업자등록번호 : 104-81-53114&nbsp;&nbsp;&nbsp;통신판매신고번호 : 제2016-서울강남-00515호&nbsp;&nbsp;&nbsp;개인정보관리 최고책임자 : 방인식 상무</p>' +
		'<p class="cr">Copyright by Multicampus Co., Ltd. All rights reserved.</p>' +
		'<p class="footer-logo">' +
			'<a href="http://www.multicampus.com/" target="_blank"><img src="./images/common/footer-logo.png" alt="멀티캠퍼스" /></a>' +
		'</p>' + 
		'<p class="footer-add-text">' +
			'<em>고객센터 1544-9001</em> 평일 상담시간 : 08:00~20:00 휴일 상담시간 : 09:00~18:00(휴일 점심시간 12:00~13:00 제외)' +
		'</p>'
	;

	$('#topmenu').html(_topmenu);
	$('#gnblist').html(_gnblist);
	$('#footer-link-in').html(_footerLinkIn);
	$('#footer-copyright-in').html(_footerCopyrightIn);
});
var _gnbCheck = ''
var _gnbCheck2 = ''