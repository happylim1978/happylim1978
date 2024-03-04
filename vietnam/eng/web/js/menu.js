function goLink() {
	window.open('https://lc.multicampus.com/vn');
}
$(document).ready(function(){
	var _top = 
		'<div class="top-in">' +
			'<a href="../../web/index.html" class="btn">Vietnamese</a>' +
			'<a href="#" class="btn">English</a>' +
			'<a href="#" class="go" onclick="goLink(); return false;">Start Learn</a>' +
		'</div>'
	;

	var _menu =
		'<div class="header">' +
			'<h1><a href="index.html"><img src="images/common/logo.png" alt="multicampus" /></a></h1>' +
			'<ul class="depth1">' +
				'<li class="sub1"><a href="page1-1.html">Company Introduction</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-a">' +
							'<li class="sub2"><a href="page1-1.html">Multicampus Introduction</a></li>' +
							'<li class="sub2"><a href="page1-2.html">CI (Corporate Identity)</a></li>' +
							'<li class="sub2"><a href="page1-3.html">Vision</a></li>' +
							'<li class="sub2"><a href="page1-4.html">Contact us</a></li>' +
						'</ul>' +
					'</div>' +
				'</li>' +
				'<li class="sub1"><a href="page2-1.html">Service Introduction</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-b">' +
							'<li class="sub2"><a href="page2-1.html">Leadership Training Service</a></li>' +
							'<li class="sub2"><a href="page2-2.html">Foreign Language Training Service</a></li>' +
							'<li class="sub2"><a href="page2-3.html">IT Training Service</a></li>' +
							'<li class="sub2"><a href="page2-4.html">E-learning Service</a></li>' +
						'</ul>' +
					'</div>' +
				'</li>' +
			'</ul>' +
		'</div>'
	;

	var _footer =
		'<div class="footer-new">' +
			'<div class="contact">' +
				'<div class="footer-new-in">' +
					'<span class="s1">Hotline : (+84) 243.2020.339</span>' +
					'<span class="s2">Email : <a href="mailto:changwon46.lee@multicampus.com">changwon46.lee@multicampus.com</a></span>' +
					'<div class="sns">' +
						'<span>Find Us</span>' +
						'<a href="https://www.facebook.com/multicampusvn" target="_blank"><img src="images/2020/common/icon-facebook.png" alt="facebook" /></a>' +
						'<a href="http://zalo.me/1702216234559036373" target="_blank"><img src="images/2020/common/icon-zalo.png" alt="zalo" /></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="address">' +
				'<div class="footer-new-in">' +
					'<p class="p1">Office Address: 5th Floor, Peakview Tower, 36 Hoang Cau, Hanoi <br />Business registration number: 2300680991-003</p>' +
					'<p class="p2">COPYRIGHT BY SAMSUNG SDS VIETNAM CO., LTD. ALL RIGHT RESERVED</p>' +
				'</div>' +
			'</div>' +
		'</div>'
	;


	$('#top').html(_top)
	$('#header-wrap').html(_menu)
	$('#footer-wrap').html(_footer);
});
