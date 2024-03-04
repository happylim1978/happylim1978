$(document).ready(function(){
	var _menu = '<p class="subject"><a href="./"><img src="images/common/logo.png" alt="Multicampus" /></a></p><ul class="depth1"><li><h2 class="tit"><a href="./">Trang chủ</a></h2></li><li><h2 class="tit"><a href="#">Giới thiệu công ty</a></h2><ul class="depth2"><li><a href="sub2-1.html">Giới thiệu Multicampus</a></li><li><a href="sub2-2.html">CEO Message</a></li></ul></li><li><h2 class="tit"><a href="#">Giới thiệu dịch vụ</a></h2><ul class="depth2"><li><a href="sub3-1.html">Vai trò lãnh đạo</a></li><li><a href="sub3-2.html">Làm việc thông minh</a></li><li><a href="sub3-3.html">Giáo dục ngoại ngữ</a></li><li><a href="sub3-4.html">Kiểm tra ngoại ngữ</a></li><li><a href="sub3-5.html">Giáo dục phần mềm</a></li><li><a href="sub3-6.html">Dịch vụ tri thức</a></li></ul></li><li><h2 class="tit"><a href="sub4.html">Liên hệ</a></h2></li></ul>';

	var _footer = '<div class="footer">Copyright by Multicampus Co., Ltd. All rights reserved. </div>';

	$('#side .menu').html(_menu)
	$('#footer-wrap').html(_footer);
});
