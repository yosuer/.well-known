var index = (function () {

    function isMobile() {
        if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
                ) {
            return true;
        } else {
            return false;
        }
    }

    function initMain() {
        $(window).on("load", function () {
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow': 'visible'});
        });
        new WOW().init();
    }

    function initFullPage() {

        var configFullPage = {
            anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
            verticalCentered: true,
            menu: '#menu-primary',
            css3: isMobile(),
            autoScrolling: true,
            responsiveWidth: 0,
            responsiveHeight: 0,
            scrollOverflow: true,
            slidesNavigation: true,
            scrollBar: false,
            touchSensitivity: 15,
            scrollingSpeed: 800,
            recordHistory: false,
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                $(".iguana-telefono-contenido").fadeOut(300, function () {
                    $(".iguana-telefono-contenido").attr("src", "img/paso" + nextSlideIndex + ".gif");
                    $(".iguana-telefono-contenido").fadeIn(200);
                });
                console.log('anchorLink: ' + anchorLink + ', index: ' + index + ', slideIndex: ' + slideIndex +
                        ', direction: ' + direction + ', nextSlideIndex: ' + nextSlideIndex);
            },
            onLeave: function (index, nextIndex, direction) {
                if (index === 1 && nextIndex === 2) {
                    $('#section0 .wow').css('opacity', 0.7);
                    $('#header').css('background', '#ff4081');
                    $('#header').css('opacity', '0.2');
                }
                if (index === 2 && nextIndex === 1) {
                    $('#section0 .wow').css('opacity', 1);
                    $('#header').css('background', 'transparent');
                    $('#header').css('opacity', '1');
                }
            },
            afterRender: function () {
                $('.nav-fillpath .next').on('click', function (e) {
                    e.preventDefault();
                    $.fn.fullpage.moveSlideRight();
                });
                $('.nav-fillpath .prev').on('click', function (e) {
                    e.preventDefault();
                    $.fn.fullpage.moveSlideLeft();
                });
            }
        };

        $('#fullPage').fullpage(configFullPage);

        window.addEventListener("load", function () {
            setTimeout(function () {
                window.scrollTo(0, 1);
            }, 0);
        });

        
    }

    function init() {
        initMain();
        initFullPage();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));