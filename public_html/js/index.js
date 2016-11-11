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

    function initComponents() {
        new WOW().init();
        
        $('.ic.menu').on('click', function (){
            $('.ic.close').css('z-index','300');
        });
        $('.ic.close').on('click', function (){
            $('.ic.close').css('z-index','20');
        });
    }

    function bindArrowsSliders() {
        $('.nav-fillpath .next').on('click', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveSlideRight();
        });
        $('.nav-fillpath .prev').on('click', function (e) {
            e.preventDefault();
            $.fn.fullpage.moveSlideLeft();
        });
    }

    function initFullPage() {

        var configFullPage = {
            anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
            verticalCentered: true,
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
                    $(".iguana-telefono-contenido").attr("src", "static/home/image/paso" + nextSlideIndex + ".gif");
                    $(".iguana-telefono-contenido").fadeIn(200);
                });
            },
            onLeave: function (index, nextIndex, direction) {
                if (index === 1 && nextIndex === 2) {
                    $('.nav-primary').css('background', '#3551ad');
                }
                if (index === 2 && nextIndex === 1) {
                    $('.nav-primary').css('background', 'transparent');
                }
            },
            afterRender: function () {
                $("#status").fadeOut();
                $("#preloader").delay(350).fadeOut('slow');
                bindArrowsSliders();
            },
            afterLoad: function (anchorLink, index) {
                if (index === 2 || index === 3 || index === 4) {
                    $('.nav-primary').css('background', '#3551ad');
                }
            }
        };

        $('#fullPage').fullpage(configFullPage);
    }

    function init() {
        initComponents();
        initFullPage();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));