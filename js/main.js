// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {

  $('.cf a').css({color:'#ccc'});
  $(this).css({color:'#256d7b'});
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;

      }
    );
  }
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();



		// Assign active class to nav links while scolling
		$('.nv').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.nv a.active').removeClass('active');
						$('.nv a').eq(i).addClass('active');
            console.log(this);
				}
		});
}).scroll();
