$(document).ready(function(){
  $(".members-cover").mouseenter(function(){
    $(this).hide(400);
  });
    
  $(".member").mouseleave(function(){
    $(".members-cover").show(400);
  });
    
   $("#open").click(function(){
       $(this).hide();
       $("#close, .submenu").show(400);   
  });
    
    $("#close, ul > li > a").click(function(){
        $("#close, .submenu").hide();
        $("#open").show();    
  });
    
    $(".working-process").waypoint(function(direction){
        if (direction == "down") {
          $(".scroll-to-top").css("display", "flex");  
        } else {
          $(".scroll-to-top").css("display", "none");  
        }
    }, {
        offset: '25%'
    });
    
    $('.slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dotsClass: 'dots-holder',
        prevArrow: '<button class="prev-arrow" type="button"></button>',
        nextArrow: '<button class="next-arrow" type="button"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
        ]
     });

  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) 
    {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
});