function goLink() {
	location.href='https://lc.multicampus.com/vn';
}
$(document).ready(function(){
	var _menu =
		'<p class="subject">' +
			'<a href="./"><img src="images/common/logo.png" alt="Multicampus" /></a>' +
		'</p>' +
		'<p class="go-link">' +
			'<a href="#" onclick="goLink(); return false;">Bắt đầu học</a>' +
		'</p>' +
		'<ul class="depth1">' +
			'<li>' +
				'<h2 class="tit"><a href="#">Giới thiệu công ty</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="page1-1.html">Giới thiệu Về Multicampus</a></li>' +
					'<li><a href="page1-2.html">Hệ thống nhận diện thương hiệu</a></li>' +
					'<li><a href="page1-3.html">Tầm nhìn</a></li>' +
					'<li><a href="page1-4.html">Liên hệ</a></li>' +
				'</ul>' +
			'</li>' +
			'<li>' +
				'<h2 class="tit"><a href="#">Giới thiệu dịch vụ</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="page2-1.html">Dịch vụ đào tạo Leadership</a></li>' +
					'<li><a href="page2-2.html">Dịch vụ đào tạo ngoại ngữ</a></li>' +
					'<li><a href="page2-3.html">Dịch vụ đào tạo tin học</a></li>' +
					'<li><a href="page2-4.html">Dịch vụ E-learning</a></li>' +
				'</ul>' +
			'</li>' +
			'<li>' +
				'<h2 class="tit"><a href="#">Language</a></h2>' +
				'<ul class="depth2">' +
					'<li><a href="#">Tiếng Việt</a></li>' +
					'<li><a href="./eng/index.html">English</a></li>' +
				'</ul>' +
			'</li>' +
		'</ul>'
		;
	var _depth1 =
		'<li><a href="page1-1.html">Giới thiệu Về Multicampus</a></li>' +
		'<li><a href="page1-2.html">Hệ thống nhận diện thương hiệu</a></li>' +
		'<li><a href="page1-3.html">Tầm nhìn</a></li>' +
		'<li><a href="page1-4.html">Liên hệ</a></li>' 
	;

	var _depth2 = 
		'<li><a href="page2-1.html">Dịch vụ đào tạo Leadership</a></li>' +
		'<li><a href="page2-2.html">Dịch vụ đào tạo ngoại ngữ</a></li>' +
		'<li><a href="page2-3.html">Dịch vụ đào tạo tin học</a></li>' +
		'<li><a href="page2-4.html">Dịch vụ E-learning</a></li>' 
	;

	var titles = [
		'Giới thiệu công ty',
		'Giới thiệu dịch vụ'
	]
	
	$('#title1').text(titles[0]);
	$('#title2').text(titles[1]);

	var _footer = 
		'<div class="footer1">' +
			'Hotline : 024 32020339<br />E-Mail : changwon46.lee@multicampus.com' +
			'<div class="sns">' +
				'<span>Liên lạc với chúng tôi</span>' +
				'<a href="https://www.facebook.com/multicampusvn" target="_blank"><img src="images/2020/common/icon-facebook.png" alt="facebook"></a>' +
				' <a href="http://zalo.me/1702216234559036373" target="_blank"><img src="images/2020/common/icon-zalo.png" alt="zalo"></a>' +
			'</div>' +
		'</div>' +
		'<div class="footer">' +
			'<p>Địa chỉ văn phòng: Tầng 5, tòa nhà PeakviewTower, 36 Hoàng Cầu, Hà Nội<br />Số đăng ký kinh doanh : 2300680991-003</p>' +
			'<p>Bản quyền thuộc về Công ty TNHH SAMSUNG SDS Việt Nam<br />Mọi sự sao chép phải được chấp thuận bằng văn bản</p>' +
		'</div>'
	;

	$('#side .menu').html(_menu)
	$('#depth1').html(_depth1);
	$('#depth2').html(_depth2);
	$('#footer-wrap').html(_footer);
});
