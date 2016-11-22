var hogar = (function() {

	function initComponents() {
		new WOW().init();

		$(window).scroll(function() {

			if ($(window).scrollTop() > $("[class*=section1]").offset().top) {
				$('.nav-primary').css('background', '#3551ad');
			}

			if ($(window).scrollTop() < $('[class*=section1]').offset().top) {
				$('.nav-primary').css('background', 'transparent');
			}
		});

		$("#iguana-house-btn-selectInstallHome").on("click", function(e) {
			window.location.href = $("#selectInstallHome").val();
		});
		
	}

	function init() {
		initComponents();
	}

	return {
		init : init
	};
})();

$(document).ready((function() {
	hogar.init();
}));