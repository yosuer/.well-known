var landing = (function () {

    function initComponents() {
        $('.ic.menu').on('click', function () {
            $('.ic.close').css('z-index', '300');
        });
        $('.ic.close').on('click', function () {
            $('.ic.close').css('z-index', '20');
        });

        $('.nav-primary').css('background', '#3551ad');
    }

    function init() {
        initComponents();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    landing.init();
}));