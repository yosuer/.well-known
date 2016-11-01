var index = (function () {

    var $header = null;
    var $nav = null;
    var isTouch = false;
    var nav_height = null;

    function loadPreloader() {
        $("#status").fadeOut(1000);
        $("#preloader").delay(500).fadeOut();
    }

    /* RESIZE BACKGROUND IMAGES */
    function backgroundResize() {
        var windowH = $(window).height();
        // variables
        var contW = $header.width();
        var contH = $header.height();
        var imgW = $header.attr("data-img-width");
        var imgH = $header.attr("data-img-height");
        var ratio = imgW / imgH;
        // overflowing difference
        var diff = parseFloat($header.attr("data-diff"));
        diff = diff ? diff : 0;
        // remaining height to have fullscreen image only on parallax
        var remainingH = 0;
        if ($header.hasClass("parallax") && !isTouch) {
            var maxH = contH > windowH ? contH : windowH;
            remainingH = windowH - contH;
        }
        // set img values depending on cont
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        // fix when too large
        if (contW > imgW) {
            imgW = contW;
            imgH = imgW / ratio;
        }

        $header.data("resized-imgW", imgW).data("resized-imgH", imgH).css("background-size", imgW + "px " + imgH + "px");
    }

    /* SET PARALLAX BACKGROUND-POSITION */
    function parallaxPosition(e) {
        if (isTouch) {
            return;
        }
        var heightWindow = $(window).height();
        var topWindow = $(window).scrollTop();
        var bottomWindow = topWindow + heightWindow;
        var currentWindow = (topWindow + bottomWindow) / 2;
        var height = $header.height();
        var top = $header.offset().top;
        var bottom = top + height;
        // only when in range
        if (bottomWindow > top && topWindow < bottom) {
            var imgW = $header.data("resized-imgW");
            var imgH = $header.data("resized-imgH");
            // min when image touch top of window
            var min = 0;
            // max when image touch bottom of window
            var max = -imgH + heightWindow;
            // overflow changes parallax
            var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
            top = top - overflowH;
            bottom = bottom + overflowH;
            // value with linear interpolation
            var value = min + (max - min) * (currentWindow - top) / (bottom - top);
            // set background-position
            var horizontalPosition = $header.attr("data-oriz-pos");
            horizontalPosition = horizontalPosition ? horizontalPosition : "50%";
            $header.css("background-position", horizontalPosition + " " + value + "px");
        }
    }

    function scroll() {
        var scrollPosition = $(this).scrollTop();
        // COLLAPSE THE NAVBAR ON SCROLL
        if ($nav.offset().top > 100) {
            $nav.hasClass("navbar-fixed-top") ? $nav.addClass("top-nav-collapse") : $nav.addClass("top-nav-collapse-white");
        } else {
            $nav.hasClass("navbar-fixed-top") ? $nav.removeClass("top-nav-collapse") : $nav.removeClass("top-nav-collapse-white");
        }
        // FADE HERO TEXT
        $("#container-top").css("opacity", 1 - scrollPosition / 300);
        if (scrollPosition > 700) {
            $('#backtop').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
        } else {
            $('#backtop').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
        }

        // Header - Parallax Explode Effect 
        var transY = (scrollPosition * 0.5), scale = 1 + (scrollPosition * 0.0003), transform = 'translateY(' + transY + 'px) scale(' + scale + ') translate3d(0,0,0)';

        parallaxPosition();
    }

    function initMain() {
        // makes sure the whole site is loaded
        $(window).on("load", loadPreloader)
                .on("scroll", scroll);

        // Touch screen device
        if ("ontouchstart" in window) {
            document.documentElement.className = document.documentElement.className + " touch";
            isTouch = true;
        }
        new WOW().init();
        backgroundResize();
        parallaxPosition();
    }

    function initScroll() {
        $('#fullPage').fullpage({
            anchors: ['primera', 'bienvenidos', 'destacados'],
            verticalCentered: false
        });
    }

    function init() {
        $nav = $('#navbar');
        $header = $('#header-parallax');
        nav_height = $nav.find("nav").outerHeight();
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