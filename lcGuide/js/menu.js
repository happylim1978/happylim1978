$(document).ready(function(){

	var _menu =
		'<ul>' + 
			'<li><a class="no-sub" href="../overview/overview.html">Service Overview</a>' +
			'</li>' +
			'<li class="arrows"><p class="lnb-title">Learning Cloud Guidelines</p>' +
				'<a href="#" class="arrow">Foundation</a>' +
				'<ul>' +
					'<li><a href="../foundation/foundation-layout.html">Layout</a></li>' +
					'<li><a href="../foundation/foundation-color.html">Color</a></li>' +
					'<li><a href="../foundation/foundation-typography.html">Typography</a></li>' +
					'<li><a href="../foundation/foundation-iconography.html">Iconography</a></li>' +
					'<li><a href="../foundation/foundation-illustration.html">Illustration</a></li>' +
					'<li><a href="../foundation/foundation-photography.html">Photography</a></li>' +
					'<li><a href="../foundation/foundation-bi.html">BI</a></li>' +
				'</ul>' +
			'</li>' +
			'<li class="arrows"><a href="#" class="arrow">Component (PC)</a>' +
				'<ul>' +
					'<li><a href="../component-pc/accordion.html"><span>Accordion</span><span class="demo"><img src="../images/sub/component/pc/accordion/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/buttons.html"><span>Button</span><span class="demo"><img src="../images/sub/component/pc/buttons/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/data-table.html"><span>Data Table</span><span class="demo"><img src="../images/sub/component/pc/dataTable/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/empty-error.html"><span>Empty &amp; Error</span><span class="demo"><img src="../images/sub/component/pc/emptyError/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/flag.html"><span>Flag</span><span class="demo"><img src="../images/sub/component/pc/flag/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/loading.html"><span>Loading</span><span class="demo"><img src="../images/sub/component/pc/loading/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/pickers.html"><span>Picker</span><span class="demo"><img src="../images/sub/component/pc/pickers/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/search.html"><span>Search</span><span class="demo"><img src="../images/sub/component/pc/search/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/selection-controls.html"><span>Selection controls</span><span class="demo"><img src="../images/sub/component/pc/selectionControls/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/snackbar.html"><span>Snackbar</span><span class="demo"><img src="../images/sub/component/pc/snackbar/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/step-indicator.html"><span>Step Indicator</span><span class="demo"><img src="../images/sub/component/pc/stepIndicator/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/tab.html"><span>Tab</span><span class="demo"><img src="../images/sub/component/pc/tab/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/text-field.html"><span>Text Field</span><span class="demo"><img src="../images/sub/component/pc/textField/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/tooltips.html"><span>Tooltip</span><span class="demo"><img src="../images/sub/component/pc/tooltips/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/banner.html"><span>Banner</span><span class="demo"><img src="../images/sub/component/pc/banner/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/card-contents.html"><span>Card Contents</span><span class="demo"><img src="../images/sub/component/pc/cardContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/email-form.html"><span>Email Forms</span><span class="demo"><img src="../images/sub/component/pc/emailForm/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/feed-contents.html"><span>Feed Contents</span><span class="demo"><img src="../images/sub/component/pc/feedContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/footer.html"><span>Footer</span><span class="demo"><img src="../images/sub/component/pc/footer/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/gnb.html"><span>GNB</span><span class="demo"><img src="../images/sub/component/pc/gnb/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/layer-popup.html"><span>Layer Popup</span><span class="demo"><img src="../images/sub/component/pc/layerPopup/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/list-contents.html"><span>List Contents</span><span class="demo"><img src="../images/sub/component/pc/listContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/login.html"><span>Login</span><span class="demo"><img src="../images/sub/component/pc/login/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/quick-menu.html"><span>Quick Menu</span><span class="demo"><img src="../images/sub/component/pc/quickMenu/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-pc/result.html"><span>Results</span><span class="demo"><img src="../images/sub/component/pc/result/demo.png" alt="" /></span></a></li>' +
				'</ul>' +
			'</li>' +
			'<li class="arrows"><a href="#" class="arrow">Component (MOB)</a>' +
				'<ul>' +
					'<li><a href="../component-mo/accordion.html"><span>Accordion</span><span class="demo"><img src="../images/sub/component/mo/accordion/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/buttons.html"><span>Button</span><span class="demo"><img src="../images/sub/component/mo/buttons/demo.png" alt="" /></span></a></li>' + 
					'<li><a href="../component-mo/data-table.html"><span>Data Table</span><span class="demo"><img src="../images/sub/component/mo/dataTable/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/empty-error.html"><span>Empty &amp; Error</span><span class="demo"><img src="../images/sub/component/mo/emptyError/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/flag.html"><span>Flag</span><span class="demo"><img src="../images/sub/component/mo/flag/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/loading.html"><span>Loading</span><span class="demo"><img src="../images/sub/component/mo/loading/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/pickers.html"><span>Picker</span><span class="demo"><img src="../images/sub/component/mo/pickers/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/search.html"><span>Search</span><span class="demo"><img src="../images/sub/component/mo/search/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/selection-controls.html"><span>Selection controls</span><span class="demo"><img src="../images/sub/component/mo/selectionControls/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/snackbar.html"><span>Snackbar</span><span class="demo"><img src="../images/sub/component/mo/snackbar/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/step-indicator.html"><span>Step Indicator</span><span class="demo"><img src="../images/sub/component/mo/stepIndicator/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/tab.html"><span>Tab</span><span class="demo"><img src="../images/sub/component/mo/tab/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/text-field.html"><span>Text Field</span><span class="demo"><img src="../images/sub/component/mo/textField/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/tooltips.html"><span>Tooltip</span><span class="demo"><img src="../images/sub/component/mo/tooltips/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/app-bar.html"><span>App Bar</span><span class="demo"><img src="../images/sub/component/mo/appBar/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/banner.html"><span>Banner</span><span class="demo"><img src="../images/sub/component/mo/banner/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/card-contents.html"><span>Card Contents</span><span class="demo"><img src="../images/sub/component/mo/cardContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/feed-contents.html"><span>Feed Contents</span><span class="demo"><img src="../images/sub/component/mo/feedContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/footer.html"><span>Footer</span><span class="demo"><img src="../images/sub/component/mo/footer/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/launcher-icon.html"><span>Launcher Icon</span><span class="demo"><img src="../images/sub/component/mo/launcherIcon/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/layer-popup.html"><span>Layer Popup</span><span class="demo"><img src="../images/sub/component/mo/layerPopup/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/list-contents.html"><span>List Contents</span><span class="demo"><img src="../images/sub/component/mo/listContents/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/login.html"><span>Login</span><span class="demo"><img src="../images/sub/component/mo/login/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/result.html"><span>Results</span><span class="demo"><img src="../images/sub/component/mo/result/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/slide-menu-bar.html"><span>Slide Menu Bar</span><span class="demo"><img src="../images/sub/component/mo/slideMenuBar/demo.png" alt="" /></span></a></li>' +
					'<li><a href="../component-mo/splash-screen.html"><span>Splash Screen</span><span class="demo"><img src="../images/sub/component/mo/splashScreen/demo.png" alt="" /></span></a></li>' +
				'</ul>' +
			'</li>' +
			'<li class="depth1-last"><a href="#">Resources</a>' +
				'<ul>' +
					'<li><a href="../resource/resource-ci.html">CI</a></li>' +
					'<li><a href="../resource/resource-thumbnail.html">Thumbnail</a></li>' +
				'</ul>' +
			'</li>' +
		'</ul>'
	;

	var _otherLink = 
		'<p class="copy-right">' +
			'<i>ⓒ</i> Multicampus Co., Ltd.<br />' +
			'All rights reserved.' +
		'</p>'


	$('#menu').html(_menu)
	$('#other-link').html(_otherLink)
	$('#gnb-in').addClass('mCS-autoHide');
});
