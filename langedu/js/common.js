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

});

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