var index = (function () {

    var mobile = false;

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
        mobile = isMobile();
        new WOW().init();

        $('.ic.menu').on('click', function () {
            $('.ic.close').css('z-index', '300');
        });
        $('.ic.close').on('click', function () {
            $('.ic.close').css('z-index', '20');
        });

        $(window).scroll(function () {

            if ($(window).scrollTop() > $('.iguana-home-container').offset().top) {
                $('.nav-primary').css('background', '#3551ad');
            }

            if ($(window).scrollTop() < $('.iguana-home-container').offset().top) {
                $('.nav-primary').css('background', 'transparent');
            }
        });
    }

    function init() {
        initComponents();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));