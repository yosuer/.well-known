var hogar = (function () {

    function resize(component, relation) {
        console.log($(component).width());
        console.log($(component).height());
        $(component).css('height', $(component).width() * relation);

    }

    function resizeHeightComponents() {
        $('.iguana-hogar-section1 .team-box').each(function (i, obj) {
        });
    }

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
        resizeHeightComponents();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    hogar.init();
}));