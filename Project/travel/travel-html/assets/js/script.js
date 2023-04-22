// on scoll add class in header
window.onscroll = function () {
    this.scrollY > 20 ?
        document.getElementById("main-header").classList.add("scroll-header") :
        document.getElementById("main-header").classList.remove("scroll-header");
}

$(document).ready(function () {
    $('header .menu_bar').click(function () {
        $('body').toggleClass('dower_menu');
    });

    // page scroll to top when we refresh page  
    // $(window).on('beforeunload', function(){
    //     $(window).scrollTop(0);
    // });

    // scenery slider home page
    $('.scenery_slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    // choose slider home page
    $('.choose_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Client slider home page
    $('.client_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});