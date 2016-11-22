var index = (function () {

    var mobile = false;
    var cdnUrl = "";

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

    function bindearOptions() {
        $("#iguana-house-btn-selectInstallHome").on("click", function (e) {
            window.location.href = $("#selectInstallHome").val();
        });

        $("#iguana-house-btn-selectInstallCar").on("click", function (e) {
            window.location.href = $("#selectInstallCar").val();
        });
    }

    function calculateTeamBox() {
        var biggestHeight = "0";
        var imgHeight = "0";
        $(".team-box").each(function () {
            if ($(this).height() > biggestHeight) {
                biggestHeight = $(this).height();
            }
            if ($(this).find("img").height() > imgHeight) {
                imgHeight = $(this).find("img").height();
            }
        });
        $(".team-box").height(biggestHeight + 50);
        $(".team-box img").height(imgHeight);
    }

    function initComponents() {
        mobile = isMobile();
        cdnUrl = $('#cdnUrl').val();

        new WOW().init();

        $('.ic.menu').on('click', function () {
            $('.ic.close').css('z-index', '300');
        });
        $('.ic.close').on('click', function () {
            $('.ic.close').css('z-index', '20');
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() > $("[class*=section1]").offset().top) {
                $('.nav-primary').css('background', '#3551ad');
            }
            if ($(window).scrollTop() < $('[class*=section1]').offset().top) {
                $('.nav-primary').css('background', 'transparent');
            }
        });
        
            
        calculateTeamBox();
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
            anchors: ['home', 'bienvenidos', 'comofunciona', 'destacados', 'tequeremos', 'foot'],
            verticalCentered: false,
            css3: mobile,
            autoScrolling: true,
            responsiveWidth: 0,
            responsiveHeight: 0,
            scrollOverflow: true,
            slidesNavigation: false,
            navigationPosition: 'right',
            navigation: true,
            scrollBar: false,
            touchSensitivity: 15,
            scrollingSpeed: 800,
            recordHistory: false,
            onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
                if (!mobile) {
                    $(".iguana-telefono-contenido").fadeOut(300, function () {
                        console.log(cdnUrl);
                        $(".iguana-telefono-contenido").attr("src", cdnUrl + "static/restyling/images/home/paso" + nextSlideIndex + ".gif");
                        $(".iguana-telefono-contenido").fadeIn(200);
                    });
                }
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
                bindArrowsSliders();
                if (mobile) {
                    console.log(cdnUrl);
                    $(".iguana-telefono-contenido").attr("src", cdnUrl + "static/restyling/images/home/pasosCelular.gif");
                }

            },
            afterLoad: function (anchorLink, index) {
                if (index === 1 || index === 6) {
                    $('#fp-nav').hide();
                }
                if (index === 2 || index === 3 || index === 4 || index === 5) {
                    $('.nav-primary').css('background', '#3551ad');
                    $('#fp-nav').show();
                }
            }
        };

        $('#fullPage').fullpage(configFullPage);
    }

    function init() {
        initComponents();
        initFullPage();

        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut('slow');
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    index.init();
}));