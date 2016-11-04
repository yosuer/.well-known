var index = (function () {

    function loadPreloader() {
        $("#status").fadeOut(1000);
        $("#preloader").delay(500).fadeOut();
    }

    function initMain() {
        // makes sure the whole site is loaded
        $(window).on("load", loadPreloader);
        // Touch screen device
        if ("ontouchstart" in window) {
            document.documentElement.className = document.documentElement.className + " touch";
            isTouch = true;
        }
        new WOW().init();

    }

    function initScroll() {
        $('#fullPage').fullpage({
            anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
            menu: '#menu',
            verticalCentered: false,
            css3: true,
            scrollOverflow: true,
            slidesNavigation: true,
            scrollingSpeed: 1000
        });
    }

    function init() {
        initMain();
        initScroll();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));