(function($) {

	var goTop = {
		init: function () {
			$('body').append('<span class="btn-fixed-up"></span>');
		},
		scrollHandle: function () {
			if( $(window).scrollTop() > 100 ) {
				$('.btn-fixed-up').addClass('view').fadeIn('fast');
			} else {
				$('.btn-fixed-up').removeClass('view').fadeOut('fast');
			}
		},
		scrollHandleClick: function () {
			$(window).scrollTop(0);
		}
	};

	goTop.init();
	$(window).on('scroll', function () {
		goTop.scrollHandle();
	});
	$('.btn-fixed-up').on('click', function () {
		goTop.scrollHandleClick();
	})

    var uniqueCntr = 0;
    $.fn.scrolled = function(waitTime, fn) {
        if (typeof waitTime === 'function') {
            fn = waitTime;
            waitTime = 200;
        }
        var tag = 'scrollTimer' + uniqueCntr++;
        this.scroll(function() {
            var self = $(this);
            clearTimeout(self.data(tag));
            self.data(tag, setTimeout(function() {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime));
        });
    };

    $.fn.AniView = function(options) {

        var settings = $.extend({
            animateThreshold: 0,
            scrollPollInterval: 20
        }, options);

        var collection = this;

        $(collection).each(function(index, element) {
            //$(element).wrap('<div class="av-container"></div>');
            $(element).css('opacity', 0);
        });

        function EnteringViewport(element) {
            var elementTop = $(element).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            return (elementTop < (viewportBottom - settings.animateThreshold)) ? true : false;
        }

        function RenderElementsCurrentlyInViewport(collection) {
            $(collection).each(function(index, element) {
                //var elementParentContainer = $(element).parent('.av-container');
                var elementParentContainer = $(element);
                if ($(element).is('[data-av-animation]') && !$(elementParentContainer).hasClass('av-visible') && EnteringViewport(elementParentContainer)) {
                    $(element).css('opacity', 1);
                    $(elementParentContainer).addClass('av-visible');
                    $(element).addClass('animated ' + $(element).attr('data-av-animation'));
					if( $(element).find('.ani-item').length > 0 ) {
						var $anchors = $(element).find('.ani-item'), counter = 0;

						setInterval(function(){
							$anchors.eq(counter++ % $anchors.length).addClass('ani-active');
						}, 400);
					}

                }
            });
        }

        RenderElementsCurrentlyInViewport(collection);

        $(window).scrolled(settings.scrollPollInterval, function() {
            RenderElementsCurrentlyInViewport(collection);
        });
    };
})(jQuery);
