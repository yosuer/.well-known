var autos = (function () {

    function initComponents() {
        new WOW().init();

        $('.ic.menu').on('click', function () {
            $('.ic.close').css('z-index', '300');
        });
        $('.ic.close').on('click', function () {
            $('.ic.close').css('z-index', '20');
        });

        $(window).scroll(function () {

            if ($(window).scrollTop() > $("[class*=section1]").offset().top) {
                console.log('color');
                $('.nav-primary').css('background', '#3551ad');
            }

            if ($(window).scrollTop() < $('[class*=section1]').offset().top) {
                console.log('transparent');
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
    autos.init();
}));