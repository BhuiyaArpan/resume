$(".box-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 10000,
    fade: true,
    cssEase: 'linear'
})

// fixed header

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.header-section').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.header-section').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

// counter

if($('#counter').length) {
    var counted = 0;
      $(window).scroll(function () {
    
        var oTop = $("#counter").offset().top-window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
          $(".counter-value").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },
    
              {
                duration: 1000,
                easing: "swing",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
                },
              }
            );
          });
          counted = 1;
        }
      });
    }
