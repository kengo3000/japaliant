jQuery(function($) {
  $('.toggle').click(function() {
    $(this).toggleClass("active");
		if($(this).hasClass('active')) {
			$('.global_nav').addClass('active');
		} else {
			$('.global_nav').removeClass('active');
		}
  });
});



jQuery(function($) {
    $('.bg-slider').bgSwitcher({
        images: ['img/header1.jpg','img/header2.jpg','img/header3.jpg'],
	      interval: 6000,
        loop: true,
        shuffle: false,
        effect: "fade",
        duration: 500,
        easing: "swing"
    });
});

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});


$(function(){
  $('#js-nav1').on('click',function(){
    $(this).addClass('active');
    $('#js-nav2').removeClass('active');
    $('#js-nav3').removeClass('active');

    $('#js-menu1').addClass('active')
    $('#js-menu2').removeClass('active')
    $('#js-menu3').removeClass('active')
  });
});

$(function(){
  $('#js-nav2').on('click',function(){
    $(this).addClass('active');
    $('#js-nav1').removeClass('active');
    $('#js-nav3').removeClass('active');

    $('#js-menu2').addClass('active')
    $('#js-menu1').removeClass('active')
    $('#js-menu3').removeClass('active')
  });
});

$(function(){
  $('#js-nav3').on('click',function(){
    $(this).addClass('active');
    $('#js-nav2').removeClass('active');
    $('#js-nav1').removeClass('active');

    $('#js-menu3').addClass('active')
    $('#js-menu2').removeClass('active')
    $('#js-menu1').removeClass('active')
  });
});

$(function(){
  $('.accbox>label').on('click',function(){
    $(this).toggleClass('accbox_toggle');
  })
})
