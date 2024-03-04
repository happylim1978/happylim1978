function goLink() {
	window.open('https://lc.multicampus.com/vn');
}
$(document).ready(function(){
	var _top = 
		'<div class="top-in">' +
			'<a href="#" class="btn">Tiếng Việt</a>' +
			'<a href="../eng/web/index.html" class="btn">English</a>' +
			'<a href="#" class="go" onclick="goLink(); return false;">Bắt đầu học</a>' +
		'</div>'
	;

	var _menu =
		'<div class="header">' +
			'<h1><a href="index.html"><img src="images/common/logo.png" alt="multicampus" /></a></h1>' +
			'<ul class="depth1">' +
				'<li class="sub1"><a href="page1-1.html">Giới thiệu công ty</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-a">' +
							'<li class="sub2"><a href="page1-1.html">Giới thiệu Multicampus</a></li>' +
							'<li class="sub2"><a href="page1-2.html">Hệ thống nhận diện thương hiệu</a></li>' +
							'<li class="sub2"><a href="page1-3.html">Tầm nhìn</a></li>' +
							'<li class="sub2"><a href="page1-4.html">Liên hệ</a></li>' +
						'</ul>' +
					'</div>' +
				'</li>' +
				'<li class="sub1"><a href="page2-1.html">Giới thiệu dịch vụ</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-b">' +
							'<li class="sub2"><a href="page2-1.html">Dịch vụ đào tạo Leadership</a></li>' +
							'<li class="sub2"><a href="page2-2.html">Dịch vụ đào tạo ngoại ngữ</a></li>' +
							'<li class="sub2"><a href="page2-3.html">Dịch vụ đào tạo tin học</a></li>' +
							'<li class="sub2"><a href="page2-4.html">Dịch vụ E-learning</a></li>' +
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
						'<span>Liên lạc với chúng tôi</span>' +
						'<a href="https://www.facebook.com/multicampusvn" target="_blank"><img src="images/2020/common/icon-facebook.png" alt="facebook" /></a>' +
						'<a href="http://zalo.me/1702216234559036373" target="_blank"><img src="images/2020/common/icon-zalo.png" alt="zalo" /></a>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="address">' +
				'<div class="footer-new-in">' +
					'<p class="p1">Địa chỉ văn phòng: Tầng 5, tòa nhà Peakview Tower, 36 Hoàng Cầu, Hà Nội<br />Số đăng ký kinh doanh : 2300680991-003</p>' +
					'<p class="p2">Bản quyền thuộc về Công ty TNHH SAMSUNG SDS Việt Nam<br />Mọi sự sao chép phải được chấp thuận bằng văn bản</p>' +
				'</div>' +
			'</div>' +
		'</div>'
	;


	$('#top').html(_top)
	$('#header-wrap').html(_menu)
	$('#footer-wrap').html(_footer);
});
