$(document).ready(function(){
    
var skrol = $(this).scrollTop();
    if (skrol > 300) {
               $('nav').toggleClass('scrolled');  
               $('.navbar-brand img').fadeIn();  
    }

if ($(".home").length) {
    $(window).scroll(function() {
           var wS = $(this).scrollTop();
           var hT = $('.main-logo').offset().top,
               hH = $('.main-logo').outerHeight(),
               wH = $(window).height();
           if (wS > 300){
               $('.navbar-brand img').fadeIn();
           }
           if (wS < 300 ){
               $('.navbar-brand img').fadeOut();
           }

            if (wS > 300) {
               $('nav').addClass('scrolled');            
            } else if (wS < 300) {
               $('nav').removeClass('scrolled');  
            }
    });
    
    
            $(document).on("scroll", onScroll);

            $('a[href*="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");

                $('a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');

                var target = this.hash;
                $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top+2
                }, 500, 'swing', function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });

        
        function onScroll(event){
                        var scrollPosition = $(document).scrollTop();
                        $('.navbar-nav a').each(function () {
                            var currentLink = $(this);
                            var href = $(this).attr('href'); 
                            var n = href.search("#");
                            var res = href.slice(n); 
                            var refElement = $(res);

                            if (refElement.length) {

                                if (refElement.position().top - 150 <= scrollPosition && refElement.position().top + refElement.height() + 150 > scrollPosition) {
                                    $('nav ul li a').removeClass("active");
                                    currentLink.addClass("active");
                                }
                                else{
                                    currentLink.removeClass("active");
                                }
                            }

                        });        

        };
 
    
// PONUDA

        var $el, $ps, $up, totalHeight;
        var $section_ponuda = $("#ponuda");
        var $section_ponuda_height = $section_ponuda.outerHeight();
        $section_ponuda.css({"max-height":420});

        $("#ponuda").one('click',(function() {
              $section_ponuda
                .css({
                  "height": 420,
                  "max-height": 9999
                })
                .animate({
                  "height": $section_ponuda_height
                });
            $('#ponuda .prosiri').fadeOut();

        }));

};    // if is home
 
    
    AOS.init({
      disable: 'mobile'
    });   


      

}); // document ready