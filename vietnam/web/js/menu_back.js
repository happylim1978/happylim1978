$(document).ready(function(){
	var _menu =
		'<div class="header">' +
			'<h1><a href="index.html"><img src="images/common/logo.png" alt="multicampus" /></a></h1>' +
			'<ul class="depth1">' +
				'<li class="sub1"><a href="sub1-1.html">Giới thiệu công ty</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-a">' +
							'<li class="sub2"><a href="sub1-1.html">Giới thiệu Multicampus</a></li>' +
							'<li class="sub2"><a href="sub1-2.html">CEO Messages</a></li>' +
						'</ul>' +
					'</div>' +
				'</li>' +
				'<li class="sub1"><a href="sub2-1.html">Giới thiệu dịch vụ</a>' +
					'<div class="depth2-wrap">' +
						'<ul class="depth2 depth2-b">' +
							'<li class="sub2"><a href="sub2-1.html">Vai trò lãnh đạo</a></li>' +
							'<li class="sub2"><a href="sub2-2.html">Làm việc thông minh</a></li>' +
							'<li class="sub2"><a href="sub2-3.html">Giáo dục ngoại ngữ</a></li>' +
							'<li class="sub2"><a href="sub2-4.html">Kiểm tra ngoại ngữ</a></li>' +
							'<li class="sub2"><a href="sub2-5.html">Giáo dục phần mềm</a></li>' +
							'<li class="sub2"><a href="sub2-6.html">Dịch vụ tri thức</a></li>' +
						'</ul>' +
					'</div>' +
				'</li>' +
				'<li class="sub1"><a href="sub3.html">Liên hệ</a></li>' +
			'</ul>' +
		'</div>'
	;

	var _footer = '<div class="footer">Copyright by Multicampus Co., Ltd. All rights reserved.</div>';

	$('#header-wrap').html(_menu)
	$('#footer-wrap').html(_footer);
});
