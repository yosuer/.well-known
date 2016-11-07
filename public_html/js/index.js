var index = (function () {

    var configFullPage = {
        anchors: ['primera', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos'],
        verticalCentered: true,
        css3: false,
        responsiveWidth: 320,
        scrollOverflow: true,
        slidesNavigation: true,
        scrollingSpeed: 800,
        recordHistory: false,
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            console.log('anchorLink: ' + anchorLink + ', index: ' + index +
                    ', slideAnchor: ' + slideAnchor + ', slideIndex: ' + slideIndex);
        },
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
            console.log('after render');
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

        $('.iguana-home-btn-auto').on('click', function (e) {
            console.log('saddsadsada ' + configFullPage.scrollingSpeed);
            configFullPage.scrollingSpeed = 4000;
            console.log('saddsadsada ' + configFullPage.scrollingSpeed);
        });
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));