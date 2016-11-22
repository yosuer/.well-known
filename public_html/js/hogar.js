var hogar = (function () {

    function initComponents() {
        new WOW().init();

        $(window).scroll(function () {

            if ($(window).scrollTop() > $("[class*=section1]").offset().top) {
                $('.nav-primary').css('background', '#3551ad');
            }

            if ($(window).scrollTop() < $('[class*=section1]').offset().top) {
                $('.nav-primary').css('background', 'transparent');
            }
        });

        $("#iguana-house-btn-selectInstallHome").on("click", function (e) {
            window.location.href = $("#selectInstallHome").val();
        });

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

    function init() {
        initComponents();
    }

    return {
        init: init
    };
})();

$(document).ready((function () {
    hogar.init();
}));