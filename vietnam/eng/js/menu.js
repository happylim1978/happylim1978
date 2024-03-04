function goLink() {
	location.href='https://lc.multicampus.com/vn';
}
$(document).ready(function(){
	var _menu =
		'<p class="subject">' +
			'<a href="./"><img src="images/common/logo.png" alt="Multicampus" /></a>' +
		'</p>' +
		'<p class="go-link">' +
			'<a href="#" onclick="goLink(); return false;">Start Learn</a>' +
		'</p>' +
		'<ul class="depth1">' +
			'<li>' +
				'<h2 class="tit"><a href="#">Company Introduction</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="page1-1.html">Multicampus Introduction</a></li>' +
					'<li><a href="page1-2.html">CI (Corporate Identity)</a></li>' +
					'<li><a href="page1-3.html">Vision</a></li>' +
					'<li><a href="page1-4.html">Contact us</a></li>' +
				'</ul>' +
			'</li>' +
			'<li>' +
				'<h2 class="tit"><a href="#">Service Introduction</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="page2-1.html">Leadership Training Service</a></li>' +
					'<li><a href="page2-2.html">Foreign Language Traning Service</a></li>' +
					'<li><a href="page2-3.html">IT Training Service</a></li>' +
					'<li><a href="page2-4.html">E-learning Service</a></li>' +
				'</ul>' +
			'</li>' +
			'<li>' +
				'<h2 class="tit"><a href="#">Language</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="../index.html">Vietnamese</a></li>' +
					'<li><a href="#">English</a></li>' +
				'</ul>' +
			'</li>' +
		'</ul>'
		;

	var _depth1 =
		'<li><a href="page1-1.html">Multicampus Introduction</a></li>' +
		'<li><a href="page1-2.html">CI (Corporate Identity)</a></li>' +
		'<li><a href="page1-3.html">Vision</a></li>' +
		'<li><a href="page1-4.html">Contact us</a></li>' 
	;

	var _depth2 = 
		'<li><a href="page2-1.html">Leadership Training Service</a></li>' +
		'<li><a href="page2-2.html">Foreign Language Training Service</a></li>' +
		'<li><a href="page2-3.html">IT Training Service</a></li>' +
		'<li><a href="page2-4.html">E-learning Service</a></li>' 
	;
	
	var titles = [
		'Company Introduction',
		'Service Introduction'
	]

	$('#title1').text(titles[0]);
	$('#title2').text(titles[1]);

	var _footer = 
		'<div class="footer1">' +
			'Hotline : 024 32020339<br />E-Mail : changwon46.lee@multicampus.com' +
			'<div class="sns">' +
				'<span>Find us</span>' +
				'<a href="https://www.facebook.com/multicampusvn" target="_blank"><img src="images/2020/common/icon-facebook.png" alt="facebook"></a>' +
				' <a href="http://zalo.me/1702216234559036373" target="_blank"><img src="images/2020/common/icon-zalo.png" alt="zalo"></a>' +
			'</div>' +
		'</div>' +
		'<div class="footer">' +
			'<p>Office Address: 5th Floor, Peakview Tower, 36 Hoang Cau, Hanoi<br />Business registration number: 2300680991-003</p>' +
			'<p>COPYRIGHT BY SAMSUNG SDS VIETNAM CO., LTD. ALL RIGHT RESERVED</p>' +
		'</div>'
	;


	$('#side .menu').html(_menu)
	$('#depth1').html(_depth1);
	$('#depth2').html(_depth2);
	$('#footer-wrap').html(_footer);
});
