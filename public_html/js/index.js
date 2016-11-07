var index = (function () {

    var configFullPage = {
        anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
        verticalCentered: true,
        css3: false,
        responsiveWidth: 320,
        scrollOverflow: true,
        slidesNavigation: true,
        scrollingSpeed: 700,
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            $("#iguana-telefono-contenido").attr("src", "img/paso" + slideIndex + ".gif");
        }
    };

    function loadPreloader() {
        $("#status").fadeOut(1000);
        $("#preloader").delay(500).fadeOut();
    }

    function initMain() {
        $(window).on("load", loadPreloader);
        new WOW().init();
    }

    function initScroll() {
        $('#fullPage').fullpage(configFullPage);
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