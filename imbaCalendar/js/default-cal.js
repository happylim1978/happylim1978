$(document).ready(function(){
	//레이어 달력 start
	$( "#datepicker1, #datepicker2" ).datepicker({
		altFormat: "yy-mm-dd",
		showButtonPanel :true,
		showMonthAfterYear: true,
		showOtherMonths: true,
		selectOtherMonths: true,
		yearSuffix: '년',
		currentText : '오늘',
		closeText : '닫기',
		dateFormat: "yy년 m월 dd일(DD)",
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames:  [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		setDate: 'today',
		selectCurrent: false,
		beforeShow: function(){
			$('#ui-datepicker-div').wrap('<div class="cal-wrap"></div>');
		},
		onSelect: function(date,ins){
		},
		onClose: function(){
			$('#ui-datepicker-div').unwrap('<div class="cal-wrap"></div>');
		}
	});
	var _date = new Date();
	var _date_year = _date.getFullYear();
	var _date_month = $('#datepicker1').datepicker('option', 'monthNames')[_date.getMonth()];
	var _date_day = _date.getDate();
	if(_date_day<10) {
		_date_day = '0' + _date_day;
	}
	var getutcday = _date.getUTCDay();
	var _date_week = $('#datepicker1').datepicker('option', 'dayNames')[getutcday];
	var _date_all = _date.toDateString();

	var _date_today = _date_year + '년 ' + _date_month + ' ' +_date_day + '일(' + _date_week +')'
	$('#datepicker1, #datepicker2').val(_date_today);
	//  레이어 달력 end

	// 레이어 시계 start
	var $ampm  = $('#ampm');
	var $hour  = $('#hour');
	var $minute  = $('#minute');
	var $ampm2  = $('#ampm2');
	var $hour2  = $('#hour2');
	var $minute2  = $('#minute2');

	//시간셋팅
	var _time = new Date();
	var _time_hour = _time.getHours();
	var _c_hour = _time.getHours();
	//console.log(_time_hour);
	var _current_ampm = 0;
	var _current_hour = _c_hour;

	//시계 초기 설정 start
	var _time_ampm = '오전';
	if( _time_hour >= 11 && _time_hour < 23) {
		_time_ampm = '오후';
		_time_hour = _time_hour%12;
		_current_ampm = 1;
	}
	if( _time_hour == '23' ) {
		_time_hour = 11;
	}
	_time_hour = _time_hour + 1;

	//레이어 시계 초기 값 설정 start
	if( _c_hour < 11 ){
		_current_hour = _current_hour + 1;
	}
	if( _c_hour > 11 && _c_hour < 23 ){
		_current_hour = _c_hour%12 + 1;
	}
	if( _c_hour == '11' || _c_hour == '23' ){
		_current_hour = 0;
	}
	//레이어 시계 초기 값 설정 end

	var _timeoption = {
		itemNav: 'forceCentered',
		activateMiddle: true,
		smart: 1,
		activateOn: 'click',
		mouseDragging: 1,
		touchDragging: 1,
		releaseSwing: 1,
		scrollBy: 1,
		speed: 300,
		elasticBounds: 1,
		easing: 'easeOutExpo',
		dragHandle: 1,
		dynamicHandle: 1,
		clickBar: 1,
	}

	if( $ampm.length > 0 ){
		var _ampm1 = new Sly($ampm, _timeoption).init()
		_ampm1.activate(_current_ampm, true); // 0은 오전, 1은 오후
		_ampm1.on('moveEnd', function(){
			$('#time-wrapper #date1 .ampm').html($('#ampm .active').text());
		});
		var _hour1 = new Sly($hour, _timeoption).init()
		_hour1.activate(_current_hour, true); // 0은 12시, 1은 : 1시 ~ 11은 : 11시
		_hour1.on('moveEnd', function(){
			$('#time-wrapper #date1 .h').html($('#hour .active').text());
		});
		var _minute1 = new Sly($minute, _timeoption).init()
		_minute1.activate(0, true); //0 : 00, 1 : 05 ~ 11 : 55 (5분 씩 증가)
		_minute1.on('moveEnd', function(){
			$('#time-wrapper #date1 .m').html($('#minute .active').text());
		});

		var _ampm2 = new Sly($ampm2, _timeoption).init()
		_ampm2.activate(_current_ampm, true); // 0은 오전, 1은 오후
		_ampm2.on('moveEnd', function(){
			$('#time-wrapper #date2 .ampm').html($('#ampm2 .active').text());
		});
		var _hour2 = new Sly($hour2, _timeoption).init()
		_hour2.activate(_current_hour, true); // 0은 12시, 1은 : 1시 ~ 11은 : 11시
		_hour2.on('moveEnd', function(){
			$('#time-wrapper #date2 .h').html($('#hour2 .active').text());
		});
		var _minute2 = new Sly($minute2, _timeoption).init()
		_minute2.activate(0, true); //0 : 00, 1 : 05 ~ 11 : 55 (5분 씩 증가)
		_minute2.on('moveEnd', function(){
			$('#time-wrapper #date2 .m').html($('#minute2 .active').text());
		});
	}
	//시간 초기화
	$('#date1').html('<span class="ampm">'+ $('#ampm .active').text() +'</span><span class="h">'+ $('#hour .active').text() +'</span> : <span class="m">'+ $('#minute .active').text() +'</span>')
	$('#date2').html('<span class="ampm">'+ $('#ampm2 .active').text() +'</span><span class="h">'+ $('#hour2 .active').text() +'</span> : <span class="m">'+ $('#minute2 .active').text() +'</span>')

	$('#settime1').find('.ampm').text(_time_ampm);
	$('#settime1').find('.h').text(_time_hour);
	$('#settime2').find('.ampm').text(_time_ampm);
	$('#settime2').find('.h').text(_time_hour);

	//첫번째 시간 클릭시
	$('#settime1').on('click', function(){
		$('#time-wrapper').addClass('timeview1');
	});
	//두번째 시간 클릭시
	$('#settime2').on('click', function(){
		$('#time-wrapper').addClass('timeview2');
	});

	//첫번째 시간 확인 클릭시
	$('#timeset1').on('click', function(){
		$('#settime1 .ampm').text($('#ampm .active').text());
		$('#settime1 .h').text($('#hour .active').text());
		$('#settime1 .m').text($('#minute .active').text());
		$(this).closest('#time-wrapper').removeClass();
	});

	//두번째 시간 확인 클릭시
	$('#timeset2').on('click', function(){
		$('#settime2 .ampm').text($('#ampm2 .active').text());
		$('#settime2 .h').text($('#hour2 .active').text());
		$('#settime2 .m').text($('#minute2 .active').text());
		$(this).closest('#time-wrapper').removeClass();
	});

	//취소 클릭시
	$('#time-wrapper button.cancel').on('click', function(){
		$(this).closest('#time-wrapper').removeClass();
	});
	// 레이어 시계 end

	// 레이어 컬러 선택 start
	$('#theme-select').on('click', function(){
		$('#theme-layer').show();
	});
	$('#theme-layer li').on('click', function(){
		var $this = $(this);
		$this.siblings().removeClass('current').end().addClass('current');
		$('#theme-select > span').css('background-color', $this.find('span').css('background-color'));
		$this.closest('#theme-layer').hide();
	});
	// 레이어 컬러 선택 end

	$('#calendarViewWrap .close').on('click', function(){
		$(this).closest('#calendarViewWrap').fadeOut('fast')
		.find('.tit-add').text('').end()
		.find('.name').text('').end()
		.find('.location').text('').end()
		.find('.view-message').text('')
		;
	});
});