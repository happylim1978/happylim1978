function lnb_set(){
	var th = $(window.parent.document).outerHeight() - 50 - 52;
	$('#menu_list').slimScroll({
		height: th + 'px'
	});
}

$(document).ready(function(){
	//start
	lnb_set();

	$(window).on('resize', function(){
		$("#menu_list").slimScroll({destroy: true});
		lnb_set();

		var ele_width = $('.graph2').width();
		$('.graph2 > img').width(ele_width);
	});

	var
		$body = $('body'),
		$wrap = $('#wrap'),
		$menu_wrap = $wrap.find('.menu_wrap'),
		$content_wrap = $wrap.find('.content_wrap')
	;

	$wrap.find('.btn_folding_lnb').on('click', function(){
		var
			ele = window.parent.document.getElementById('frmCont'),
			$this = $(this)
		;
		
		if( $(ele).hasClass('lnb_close') ){
			//function lnb_close(){};
			$(ele).attr('cols', '230,*');
			$(ele).removeClass('lnb_close')
			$this.removeClass('btn_folding_lnb_close');
		}
		else {
			//function lnb_open(){};
			$(ele).attr('cols', '0,*');
			$(ele).addClass('lnb_close')
			$this.addClass('btn_folding_lnb_close');
		}

	});
	var
		$menu_list = $('#menu_list')
	;

	$menu_list.on('click', 'a', function(){
		var $this = $(this);
		if( $this.closest('li').hasClass('main_exp') ) return;
		if( $this.parent().hasClass('depth3_area') ) {
			$menu_list.find('.depth3_area').parent('li').removeClass('on');
			$this.closest('li').addClass('on');
		}

		if( $this.parent().hasClass('menu_2depth_tit') ){
			if( $this.closest('li').hasClass('open') ) {
				$this.closest('li').find('ul.menu_3depth').slideUp('fast', function(){
					$(this).parent().removeClass('open').addClass('close');
				});
			}
			else {
				$this.closest('li').find('ul.menu_3depth').slideDown('fast', function(){
					$(this).parent().removeClass('close').addClass('open');
				});
			}
		}

		if( $this.parent().hasClass('menu_1depth') ){
			if( $this.closest('dd').hasClass('open') ) {
				$this.closest('dd').find('ul.menu_2depth').slideUp('fast', function(){
					$(this).parent().removeClass('open').addClass('close');
				});
			}
			else {
				$this.closest('dd').find('ul.menu_2depth').slideDown('fast', function(){
					$(this).parent().removeClass('close').addClass('open');
				});
			}
		}

	});

//end
});

/* 탭메뉴 */
$.fn.tabsx = function(tab_num)
{
	//return start
	return this.each(function(){
		var
			$ele_id = $(this),
			$tabt = $ele_id.find('>.tab_navi>ul li'),
			$tabt_a = $ele_id.find('>.tab_navi>ul li a'),
			$tab_con = $ele_id.find('>.tab_cons > .tab_article')
		;

		if(!tab_num)
		{
			$tabt.first().addClass('selected');
			$tab_con.not(':first').hide()
				.end()
			.first().show();
		} else {
			$tabt.eq(tab_num-1).addClass('selected');
			$tab_con.not(':eq('+(tab_num-1)+')').hide()
				.end()
			.eq(tab_num-1).show();
		}

		$tabt_a.on('focusin click', function(){
			$tabt.removeClass('selected');
			$tab_con.hide();
			$(this).parent().addClass('selected');
			$($(this).attr('href')).show();

			return false;
		});
	});
}

/* 단순링크 탭메뉴 */
$.fn.tabsLink = function()
{
	//return start
	return this.each(function(){
		var
			$ele_id = $(this),
			$tabt_li = $ele_id.find('>.tab_navi>ul>li')
		;

		$tabt_li.on('click', function(){
			$(this).siblings('li').removeClass('selected').end().addClass('selected');
		});
	});
}


$.fn.maintabs = function(tab_num2)
{
	//return start
	return this.each(function(){
		var
			$ele_id = $(this),
			$tabt = $ele_id.find('.notify_tab > li'),
			$tabt_a = $ele_id.find('.notify_tab > li a'),
			$tab_con = $ele_id.find('.defineType1')
		;

		if(!tab_num2)
		{
			$tabt.first().addClass('select');
			$tab_con.not(':first').hide()
				.end()
			.first().show();
		} else {
			$tabt.eq(tab_num2-1).addClass('select');
			$tab_con.not(':eq('+(tab_num2-1)+')').hide()
				.end()
			.eq(tab_num2-1).show();
		}

		$tabt_a.on('focusin click', function(){
			$tabt.removeClass('select');
			$tab_con.hide();
			$(this).parent().addClass('select');
			$($(this).attr('href')).show();

			return false;
		});
	});
}
