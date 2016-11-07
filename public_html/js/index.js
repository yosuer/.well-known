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
            $("#status").fadeOut(1000);
            $("#preloader").delay(500).fadeOut();
        });
        new WOW().init();
    }

    function initFullPage() {

        var configFullPage = {
            anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
            verticalCentered: true,
            css3: isMobile(),
            responsiveWidth: 320,
            scrollOverflow: true,
            slidesNavigation: true,
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
                    console.log(index + '  ' + nextIndex + '  ' + direction);
                }
                if (index === 2 && nextIndex === 1) {
                    $('#section0 .wow').css('opacity', 1);
                    console.log(index + '  ' + nextIndex + '  ' + direction);
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