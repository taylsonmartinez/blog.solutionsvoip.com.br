(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        $(".video-play-btn").magnificPopup({
            type: "video"
        });

        $(".header-sticky").sticky({ topSpacing: 0 });

        $('#b-mania-menu').slicknav({
            prependTo: '#mobile-menu-wrap'
        });

        new WOW().init();

    });

    $('.home-page-slides').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="icon ti-arrow-left"></i>', '<i class="icon ti-arrow-right"></i>'],
        autoplay: true
    });
    $('.logo-carousel').owlCarousel({
        items: 6,
        margin: 30,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });
    $('.case-studies-carousel').owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        autoplay: true
    });

}(jQuery));