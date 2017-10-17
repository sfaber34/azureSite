(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});

	$(document).ready(function() {


		$('.setIframe').click(function(e) {
			screenWidth=$(window).width();
			screenWidth=screenWidth*.98
			height=2160/4096*screenWidth;
			setTimeout(function(){
				$(".featherlight-content").width(screenWidth).height(height);
			},100);

		});



		/* ---------------------------------------------- /*
		 * Animated scrolling / Scroll Up
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});

		/* ---------------------------------------------- /*
		 * Background image
		/* ---------------------------------------------- */

		$('#intro').backstretch(['assets/images/titleBackground.jpg']);

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Knob Animation
		/* ---------------------------------------------- */

		$(".custom-knob").knob({
			font: 'Montserrat',
			bgColor: '#C4C4C4',
			fgColor: '#90C695',
			thickness: '0.05',
			readOnly: true,
			max: 100,
			min: 0,
			step: 1,
			value: 0,
			width: 150,
			height: 150
		});

		$('#skill').waypoint(function() {
			$('#skill .custom-knob').each(function() {
				counter = $(this).attr('data-count-to'),
				$(this).animate({ value: counter }, {
					duration: 1500,
					easing:'swing',
					progress: function() {
						$(this).val(Math.ceil(this.value)).trigger('change');
					}
				});
			});
		}, { offset: '70%', triggerOnce: true });

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();

		/* ---------------------------------------------- /*
		 * Owl slider - (clients, testimonials)
		/* ---------------------------------------------- */

		$("#owl-testimonials").owlCarousel({
			items : 1,
			navigation: true,
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000,
			singleItem: true
		});

		$("#owl-clients").owlCarousel({
			items : 5,
			pagination: false,
			slideSpeed : 300,
			paginationSpeed : 400,
			autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Rotate
		/* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */


		// $('#intro').YTPlayer({
    // 	fitToBackground: true,
    // 	videoId: 'qA0jkcw_9ag'
		// });

		// $('#orderPhotos').magnificPopup({
    //   type: 'inline',
		// 	closeBtnInside: true,
		// });

		/* ---------------------------------------------- /*
		 * Service Nav
		/* ---------------------------------------------- */

		$('.serviceLi').click(function() {
			$('.serviceLi').removeClass("active");
			$(this).addClass("active");
			var id = $(this).attr("id");
			$(".servicePane .tab-pane").removeClass("active");
			$(".servicePane .tab-pane#"+id).addClass("active").css("visibility","visible");
		});

		$('#insuranceImage4Img').click(function() {
			$(".sketchfabIframe").height($(window).height()*.92);
		});

		/* ---------------------------------------------- /*
		 * Autofill code
		/* ---------------------------------------------- */
		$('.autoFill').change(function() {
			var type = $(this).attr("data-autofillType");
			var value = $(this).val();

			$('.autoFill[data-autofillType=type]').val(value);
		});


		/* ---------------------------------------------- /*
		 * Price Calculators
		/* ---------------------------------------------- */

		$('.orderPhotos_modPrice').change(function() {
			var base = 150;
			var addPhotos = $("#orderPhotos_addPhotos").val();
			var addPano = $("#orderPhotos_addPano").val();

			if(addPhotos == "None"){
				var addPhotos = 0;
			}

			if (addPano == "Yes"){
				addPano = 60;
			} else{
				addPano = 0;
			}

			var price = parseInt(base) + parseInt(addPhotos) * 10 + parseInt(addPano);

			$("#orderPhotos_total").text(price);
		});



		$('.orderVideo_modPrice').change(function() {
			var base = 300;

			var addVideoB = $("#orderVideo_addVideo").val();

			if(addVideoB == "None"){
				var addVideo = 0;
			} else{

				var addVideoC = parseInt(addVideoB.split(" ")[0]);
				var addVideo = addVideoC / 30 * 100
			}

			var price = parseInt(base) + addVideo

			$("#orderVideo_total").text(price);
		});




		/* ---------------------------------------------- /*
		 * A jQuery plugin for fluid width video embeds
		/* ---------------------------------------------- */

		$(".video").fitVids();

		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$("#contact-form").submit(function(e) {

			e.preventDefault();

			var c_name = $("#c_name").val();
			var c_email = $("#c_email").val();
			var c_message = $("#c_message ").val();
			var responseMessage = $('#contact-form .ajax-response');

			if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
				responseMessage.fadeIn(500);
				responseMessage.html('<i class="fa fa-warning"></i> Please Check all fields.');
			}

			else {
				$.ajax({
					type: "POST",
					url: "assets/php/contactForm.php",
					dataType: 'json',
					data: {
						c_email: c_email,
						c_name: c_name,
						c_message: c_message
					},
					beforeSend: function(result) {
						$('#contact-form button').empty();
						$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$('#contact-form .ajax-hidden').fadeOut(500);
							responseMessage.html(result.message).fadeIn(500);
						} else {
							$('#contact-form button').empty();
							$('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});
			}

			return false;

		});


		/* ---------------------------------------------- /*
		 * Order Photos Form JS
		/* ---------------------------------------------- */



		$("#orderPhotosForm").submit(function(e) {
			$("#orderPhotosForm .required").removeClass("problem");
			e.preventDefault();

			var orderPhotos_name = $("#orderPhotos_name").val();
			var orderPhotos_company = $("#orderPhotos_company").val();
			var orderPhotos_email = $("#orderPhotos_email").val();
			var orderPhotos_phone = $("#orderPhotos_phone").val();
			var orderPhotos_streetAddress = $("#orderPhotos_streetAddress").val();
			var orderPhotos_cityAddress = $("#orderPhotos_cityAddress").val();
			var orderPhotos_zipCode = $("#orderPhotos_zipCode").val();
			var orderPhotos_message = $("#orderPhotos_message ").val();
			var orderPhotos_total = $("#orderPhotos_total").html();
			var responseMessage = $('#orderPhotosForm .ajax-response');


			if(!isValidEmailAddress(orderPhotos_email)){
				$("#orderPhotos_email").addClass("problem");
			}else if($("#orderPhotosForm #orderPhotos_name").val() == ''){
				$('#orderPhotosForm #orderPhotos_name').addClass('problem');
			}else if($("#orderPhotosForm #orderPhotos_phone").val() == ''){
				$('#orderPhotosForm #orderPhotos_phone').addClass('problem');
			}else if($("#orderPhotosForm #orderPhotos_streetAddress").val() == ''){
				$('#orderPhotosForm #orderPhotos_streetAddress').addClass('problem');
			}else if($("#orderPhotosForm #orderPhotos_cityAddress").val() == ''){
				$('#orderPhotosForm #orderPhotos_cityAddress').addClass('problem');
			}else if($("#orderPhotosForm #orderPhotos_zipCode").val() == ''){
				$('#orderPhotosForm #orderPhotos_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderPhotosForm.php",
					dataType: 'json',
					data: {
						orderPhotos_email: orderPhotos_email,
						orderPhotos_name: orderPhotos_name,
						orderPhotos_company: orderPhotos_company,
						orderPhotos_phone: orderPhotos_phone,
						orderPhotos_streetAddress: orderPhotos_streetAddress,
						orderPhotos_cityAddress: orderPhotos_cityAddress,
						orderPhotos_zipCode: orderPhotos_zipCode,
						orderPhotos_total: orderPhotos_total,
						orderPhotos_message: orderPhotos_message,
					},
					beforeSend: function(result) {
						$('#orderPhotosForm button').empty();
						$('#orderPhotosForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderPhotosPopup").modal("hide");

							$('#orderPhotosForm button').empty();
							$('#orderPhotosForm button').append('Order');
						} else {
							$('#orderPhotosForm button').empty();
							$('#orderPhotosForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});




		/* ---------------------------------------------- /*
		 * Order Video Form JS
		/* ---------------------------------------------- */


		$("#orderVideoForm").submit(function(e) {
			$("#orderVideoForm .required").removeClass("problem");
			e.preventDefault();

			var orderVideo_name = $("#orderVideo_name").val();
			var orderVideo_company = $("#orderVideo_company").val();
			var orderVideo_email = $("#orderVideo_email").val();
			var orderVideo_phone = $("#orderVideo_phone").val();
			var orderVideo_streetAddress = $("#orderVideo_streetAddress").val();
			var orderVideo_cityAddress = $("#orderVideo_cityAddress").val();
			var orderVideo_zipCode = $("#orderVideo_zipCode").val();
			var orderVideo_addVideo = $("#orderVideo_addVideo").val();
			var orderVideo_resolution = $("#orderVideo_resolution").val();
			var orderVideo_message = $("#orderVideo_message ").val();
			var orderVideo_total = $("#orderVideo_total").html();
			var responseMessage = $('#orderVideoForm .ajax-response');


			if(!isValidEmailAddress(orderVideo_email)){
				$("#orderVideo_email").addClass("problem");
			}else if($("#orderVideoForm #orderVideo_name").val() == ''){
				$('#orderVideoForm #orderVideo_name').addClass('problem');
			}else if($("#orderVideoForm #orderVideo_phone").val() == ''){
				$('#orderVideoForm #orderVideo_phone').addClass('problem');
			}else if($("#orderVideoForm #orderVideo_streetAddress").val() == ''){
				$('#orderVideoForm #orderVideo_streetAddress').addClass('problem');
			}else if($("#orderVideoForm #orderVideo_cityAddress").val() == ''){
				$('#orderVideoForm #orderVideo_cityAddress').addClass('problem');
			}else if($("#orderVideoForm #orderVideo_zipCode").val() == ''){
				$('#orderVideoForm #orderVideo_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderVideoForm.php",
					dataType: 'json',
					data: {
						orderVideo_email: orderVideo_email,
						orderVideo_name: orderVideo_name,
						orderVideo_company: orderVideo_company,
						orderVideo_phone: orderVideo_phone,
						orderVideo_streetAddress: orderVideo_streetAddress,
						orderVideo_cityAddress: orderVideo_cityAddress,
						orderVideo_zipCode: orderVideo_zipCode,
						orderVideo_addVideo: orderVideo_addVideo,
						orderVideo_resolution: orderVideo_resolution,
						orderVideo_total: orderVideo_total,
						orderVideo_message: orderVideo_message,
					},
					beforeSend: function(result) {
						$('#orderVideoForm button').empty();
						$('#orderVideoForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderVideoPopup").modal("hide");

							$('#orderVideoForm button').empty();
							$('#orderVideoForm button').append('Order');
						} else {
							$('#orderVideoForm button').empty();
							$('#orderVideoForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});





		/* ---------------------------------------------- /*
		 * Order Pano Form JS
		/* ---------------------------------------------- */


		$("#orderPanoForm").submit(function(e) {
			$("#orderPanoForm .required").removeClass("problem");
			e.preventDefault();

			var orderPano_name = $("#orderPano_name").val();
			var orderPano_company = $("#orderPano_company").val();
			var orderPano_email = $("#orderPano_email").val();
			var orderPano_phone = $("#orderPano_phone").val();
			var orderPano_streetAddress = $("#orderPano_streetAddress").val();
			var orderPano_cityAddress = $("#orderPano_cityAddress").val();
			var orderPano_zipCode = $("#orderPano_zipCode").val();
			var orderPano_message = $("#orderPano_message ").val();
			var orderPano_total = $("#orderPano_total").html();
			var responseMessage = $('#orderPanoForm .ajax-response');


			if(!isValidEmailAddress(orderPano_email)){
				$("#orderPano_email").addClass("problem");
			}else if($("#orderPanoForm #orderPano_name").val() == ''){
				$('#orderPanoForm #orderPano_name').addClass('problem');
			}else if($("#orderPanoForm #orderPano_phone").val() == ''){
				$('#orderPanoForm #orderPano_phone').addClass('problem');
			}else if($("#orderPanoForm #orderPano_streetAddress").val() == ''){
				$('#orderPanoForm #orderPano_streetAddress').addClass('problem');
			}else if($("#orderPanoForm #orderPano_cityAddress").val() == ''){
				$('#orderPanoForm #orderPano_cityAddress').addClass('problem');
			}else if($("#orderPanoForm #orderPano_zipCode").val() == ''){
				$('#orderPanoForm #orderPano_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderPanoForm.php",
					dataType: 'json',
					data: {
						orderPano_email: orderPano_email,
						orderPano_name: orderPano_name,
						orderPano_company: orderPano_company,
						orderPano_phone: orderPano_phone,
						orderPano_streetAddress: orderPano_streetAddress,
						orderPano_cityAddress: orderPano_cityAddress,
						orderPano_zipCode: orderPano_zipCode,
						orderPano_total: orderPano_total,
						orderPano_message: orderPano_message,
					},
					beforeSend: function(result) {
						$('#orderPanoForm button').empty();
						$('#orderPanoForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderPanoPopup").modal("hide");

							$('#orderPanoForm button').empty();
							$('#orderPanoForm button').append('Order');
						} else {
							$('#orderPanoForm button').empty();
							$('#orderPanoForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});






		/* ---------------------------------------------- /*
		 * Order Sitemap Form JS
		/* ---------------------------------------------- */



		$("#orderSitemapForm").submit(function(e) {
			$("#orderSitemapForm .required").removeClass("problem");
			e.preventDefault();

			var orderSitemap_name = $("#orderSitemap_name").val();
			var orderSitemap_company = $("#orderSitemap_company").val();
			var orderSitemap_email = $("#orderSitemap_email").val();
			var orderSitemap_phone = $("#orderSitemap_phone").val();
			var orderSitemap_streetAddress = $("#orderSitemap_streetAddress").val();
			var orderSitemap_cityAddress = $("#orderSitemap_cityAddress").val();
			var orderSitemap_zipCode = $("#orderSitemap_zipCode").val();
			var orderSitemap_format = $("#orderSitemap_format").val();
			var orderSitemap_message = $("#orderSitemap_message ").val();
			var orderSitemap_total = $("#orderSitemap_total").html();
			var responseMessage = $('#orderSitemapForm .ajax-response');


			if(!isValidEmailAddress(orderSitemap_email)){
				$("#orderSitemap_email").addClass("problem");
			}else if($("#orderSitemapForm #orderSitemap_name").val() == ''){
				$('#orderSitemapForm #orderSitemap_name').addClass('problem');
			}else if($("#orderSitemapForm #orderSitemap_phone").val() == ''){
				$('#orderSitemapForm #orderSitemap_phone').addClass('problem');
			}else if($("#orderSitemapForm #orderSitemap_streetAddress").val() == ''){
				$('#orderSitemapForm #orderSitemap_streetAddress').addClass('problem');
			}else if($("#orderSitemapForm #orderSitemap_cityAddress").val() == ''){
				$('#orderSitemapForm #orderSitemap_cityAddress').addClass('problem');
			}else if($("#orderSitemapForm #orderSitemap_zipCode").val() == ''){
				$('#orderSitemapForm #orderSitemap_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderSitemapForm.php",
					dataType: 'json',
					data: {
						orderSitemap_email: orderSitemap_email,
						orderSitemap_name: orderSitemap_name,
						orderSitemap_company: orderSitemap_company,
						orderSitemap_phone: orderSitemap_phone,
						orderSitemap_streetAddress: orderSitemap_streetAddress,
						orderSitemap_cityAddress: orderSitemap_cityAddress,
						orderSitemap_zipCode: orderSitemap_zipCode,
						orderSitemap_format: orderSitemap_format,
						orderSitemap_total: orderSitemap_total,
						orderSitemap_message: orderSitemap_message,
					},
					beforeSend: function(result) {
						$('#orderSitemapForm button').empty();
						$('#orderSitemapForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderSitemapPopup").modal("hide");

							$('#orderSitemapForm button').empty();
							$('#orderSitemapForm button').append('Order');
						} else {
							$('#orderSitemapForm button').empty();
							$('#orderSitemapForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});





		/* ---------------------------------------------- /*
		 * Order 3D Model Form JS
		/* ---------------------------------------------- */



		$("#orderModelForm").submit(function(e) {
			$("#orderModelForm .required").removeClass("problem");
			e.preventDefault();

			var orderModel_name = $("#orderModel_name").val();
			var orderModel_company = $("#orderModel_company").val();
			var orderModel_email = $("#orderModel_email").val();
			var orderModel_phone = $("#orderModel_phone").val();
			var orderModel_streetAddress = $("#orderModel_streetAddress").val();
			var orderModel_cityAddress = $("#orderModel_cityAddress").val();
			var orderModel_zipCode = $("#orderModel_zipCode").val();
			var orderModel_format = $("#orderModel_format").val();
			var orderModel_message = $("#orderModel_message ").val();
			var orderModel_total = $("#orderModel_total").html();
			var responseMessage = $('#orderModelForm .ajax-response');


			if(!isValidEmailAddress(orderModel_email)){
				$("#orderModel_email").addClass("problem");
			}else if($("#orderModelForm #orderModel_name").val() == ''){
				$('#orderModelForm #orderModel_name').addClass('problem');
			}else if($("#orderModelForm #orderModel_phone").val() == ''){
				$('#orderModelForm #orderModel_phone').addClass('problem');
			}else if($("#orderModelForm #orderModel_streetAddress").val() == ''){
				$('#orderModelForm #orderModel_streetAddress').addClass('problem');
			}else if($("#orderModelForm #orderModel_cityAddress").val() == ''){
				$('#orderModelForm #orderModel_cityAddress').addClass('problem');
			}else if($("#orderModelForm #orderModel_zipCode").val() == ''){
				$('#orderModelForm #orderModel_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderModelForm.php",
					dataType: 'json',
					data: {
						orderModel_email: orderModel_email,
						orderModel_name: orderModel_name,
						orderModel_company: orderModel_company,
						orderModel_phone: orderModel_phone,
						orderModel_streetAddress: orderModel_streetAddress,
						orderModel_cityAddress: orderModel_cityAddress,
						orderModel_zipCode: orderModel_zipCode,
						orderModel_format: orderModel_format,
						orderModel_total: orderModel_total,
						orderModel_message: orderModel_message,
					},
					beforeSend: function(result) {
						$('#orderModelForm button').empty();
						$('#orderModelForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderOtherPopup").modal("hide");

							$('#orderModelForm button').empty();
							$('#orderModelForm button').append('Order');
						} else {
							$('#orderModelForm button').empty();
							$('#orderModelForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});





		/* ---------------------------------------------- /*
		 * Order Inspection Form JS
		/* ---------------------------------------------- */



		$("#orderInspectionForm").submit(function(e) {
			$("#orderInspectionForm .required").removeClass("problem");
			e.preventDefault();

			var orderInspection_name = $("#orderInspection_name").val();
			var orderInspection_company = $("#orderInspection_company").val();
			var orderInspection_email = $("#orderInspection_email").val();
			var orderInspection_phone = $("#orderInspection_phone").val();
			var orderInspection_streetAddress = $("#orderInspection_streetAddress").val();
			var orderInspection_cityAddress = $("#orderInspection_cityAddress").val();
			var orderInspection_zipCode = $("#orderInspection_zipCode").val();
			var orderInspection_format = $("#orderInspection_format").val();
			var orderInspection_message = $("#orderInspection_message ").val();
			var orderInspection_total = $("#orderInspection_total").html();
			var responseMessage = $('#orderInspectionForm .ajax-response');


			if(!isValidEmailAddress(orderInspection_email)){
				$("#orderInspection_email").addClass("problem");
			}else if($("#orderInspectionForm #orderInspection_name").val() == ''){
				$('#orderInspectionForm #orderInspection_name').addClass('problem');
			}else if($("#orderInspectionForm #orderInspection_phone").val() == ''){
				$('#orderInspectionForm #orderInspection_phone').addClass('problem');
			}else if($("#orderInspectionForm #orderInspection_streetAddress").val() == ''){
				$('#orderInspectionForm #orderInspection_streetAddress').addClass('problem');
			}else if($("#orderInspectionForm #orderInspection_cityAddress").val() == ''){
				$('#orderInspectionForm #orderInspection_cityAddress').addClass('problem');
			}else if($("#orderInspectionForm #orderInspection_zipCode").val() == ''){
				$('#orderInspectionForm #orderInspection_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderInspectionForm.php",
					dataType: 'json',
					data: {
						orderInspection_email: orderInspection_email,
						orderInspection_name: orderInspection_name,
						orderInspection_company: orderInspection_company,
						orderInspection_phone: orderInspection_phone,
						orderInspection_streetAddress: orderInspection_streetAddress,
						orderInspection_cityAddress: orderInspection_cityAddress,
						orderInspection_zipCode: orderInspection_zipCode,
						orderInspection_format: orderInspection_format,
						orderInspection_total: orderInspection_total,
						orderInspection_message: orderInspection_message,
					},
					beforeSend: function(result) {
						$('#orderInspectionForm button').empty();
						$('#orderInspectionForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderInspectionPopup").modal("hide");

							$('#orderInspectionForm button').empty();
							$('#orderInspectionForm button').append('Order');
						} else {
							$('#orderInspectionForm button').empty();
							$('#orderInspectionForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});



		/* ---------------------------------------------- /*
		 * Order Cut/Fill Form JS
		/* ---------------------------------------------- */



		$("#orderCutfillForm").submit(function(e) {
			$("#orderCutfillForm .required").removeClass("problem");
			e.preventDefault();

			var orderCutfill_name = $("#orderCutfill_name").val();
			var orderCutfill_company = $("#orderCutfill_company").val();
			var orderCutfill_email = $("#orderCutfill_email").val();
			var orderCutfill_phone = $("#orderCutfill_phone").val();
			var orderCutfill_streetAddress = $("#orderCutfill_streetAddress").val();
			var orderCutfill_cityAddress = $("#orderCutfill_cityAddress").val();
			var orderCutfill_zipCode = $("#orderCutfill_zipCode").val();
			var orderCutfill_message = $("#orderCutfill_message ").val();
			var orderCutfill_total = $("#orderCutfill_total").html();
			var responseMessage = $('#orderCutfillForm .ajax-response');


			if(!isValidEmailAddress(orderCutfill_email)){
				$("#orderCutfill_email").addClass("problem");
			}else if($("#orderCutfillForm #orderCutfill_name").val() == ''){
				$('#orderCutfillForm #orderCutfill_name').addClass('problem');
			}else if($("#orderCutfillForm #orderCutfill_phone").val() == ''){
				$('#orderCutfillForm #orderCutfill_phone').addClass('problem');
			}else if($("#orderCutfillForm #orderCutfill_streetAddress").val() == ''){
				$('#orderCutfillForm #orderCutfill_streetAddress').addClass('problem');
			}else if($("#orderCutfillForm #orderCutfill_cityAddress").val() == ''){
				$('#orderCutfillForm #orderCutfill_cityAddress').addClass('problem');
			}else if($("#orderCutfillForm #orderCutfill_zipCode").val() == ''){
				$('#orderCutfillForm #orderCutfill_zipCode').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderCutfillForm.php",
					dataType: 'json',
					data: {
						orderCutfill_email: orderCutfill_email,
						orderCutfill_name: orderCutfill_name,
						orderCutfill_company: orderCutfill_company,
						orderCutfill_phone: orderCutfill_phone,
						orderCutfill_streetAddress: orderCutfill_streetAddress,
						orderCutfill_cityAddress: orderCutfill_cityAddress,
						orderCutfill_zipCode: orderCutfill_zipCode,
						orderCutfill_total: orderCutfill_total,
						orderCutfill_message: orderCutfill_message,
					},
					beforeSend: function(result) {
						$('#orderCutfillForm button').empty();
						$('#orderCutfillForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderCutfillPopup").modal("hide");

							$('#orderCutfillForm button').empty();
							$('#orderCutfillForm button').append('Order');
						} else {
							$('#orderCutfillForm button').empty();
							$('#orderCutfillForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});






		/* ---------------------------------------------- /*
		 * Order Inspection Form JS
		/* ---------------------------------------------- */



		$("#orderUtilityInspectionForm").submit(function(e) {
			$("#orderUtilityInspectionForm .required").removeClass("problem");
			e.preventDefault();

			var orderUtilityInspection_name = $("#orderUtilityInspection_name").val();
			var orderUtilityInspection_company = $("#orderUtilityInspection_company").val();
			var orderUtilityInspection_email = $("#orderUtilityInspection_email").val();
			var orderUtilityInspection_phone = $("#orderUtilityInspection_phone").val();
			var orderUtilityInspection_streetAddress = $("#orderUtilityInspection_streetAddress").val();
			var orderUtilityInspection_cityAddress = $("#orderUtilityInspection_cityAddress").val();
			var orderUtilityInspection_zipCode = $("#orderUtilityInspection_zipCode").val();
			var orderUtilityInspection_format = $("#orderUtilityInspection_format").val();
			var orderUtilityInspection_message = $("#orderUtilityInspection_message ").val();
			var orderUtilityInspection_total = $("#orderUtilityInspection_total").html();
			var responseMessage = $('#orderUtilityInspectionForm .ajax-response');


			if(!isValidEmailAddress(orderUtilityInspection_email)){
				$("#orderUtilityInspection_email").addClass("problem");
			}else if($("#orderUtilityInspectionForm #orderUtilityInspection_name").val() == ''){
				$('#orderUtilityInspectionForm #orderUtilityInspection_name').addClass('problem');
			}else if($("#orderUtilityInspectionForm #orderUtilityInspection_phone").val() == ''){
				$('#orderUtilityInspectionForm #orderUtilityInspection_phone').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderUtilityInspectionForm.php",
					dataType: 'json',
					data: {
						orderUtilityInspection_email: orderUtilityInspection_email,
						orderUtilityInspection_name: orderUtilityInspection_name,
						orderUtilityInspection_company: orderUtilityInspection_company,
						orderUtilityInspection_phone: orderUtilityInspection_phone,
						orderUtilityInspection_streetAddress: orderUtilityInspection_streetAddress,
						orderUtilityInspection_cityAddress: orderUtilityInspection_cityAddress,
						orderUtilityInspection_zipCode: orderUtilityInspection_zipCode,
						orderUtilityInspection_format: orderUtilityInspection_format,
						orderUtilityInspection_total: orderUtilityInspection_total,
						orderUtilityInspection_message: orderUtilityInspection_message,
					},
					beforeSend: function(result) {
						$('#orderUtilityInspectionForm button').empty();
						$('#orderUtilityInspectionForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderUtilityInspectionPopup").modal("hide");

							$('#orderUtilityInspectionForm button').empty();
							$('#orderUtilityInspectionForm button').append('Order');
						} else {
							$('#orderUtilityInspectionForm button').empty();
							$('#orderUtilityInspectionForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});





		/* ---------------------------------------------- /*
		 * Order Other Form JS
		/* ---------------------------------------------- */



		$("#orderOtherForm").submit(function(e) {
			$("#orderOtherForm .required").removeClass("problem");
			e.preventDefault();

			var orderOther_name = $("#orderOther_name").val();
			var orderOther_company = $("#orderOther_company").val();
			var orderOther_email = $("#orderOther_email").val();
			var orderOther_phone = $("#orderOther_phone").val();
			var orderOther_message = $("#orderOther_message ").val();
			var responseMessage = $('#orderOtherForm .ajax-response');


			if(!isValidEmailAddress(orderOther_email)){
				$("#orderOther_email").addClass("problem");
			}else if($("#orderOtherForm #orderOther_name").val() == ''){
				$('#orderOtherForm #orderOther_name').addClass('problem');
			}else if($("#orderOtherForm #orderOther_phone").val() == ''){
				$('#orderOtherForm #orderOther_phone').addClass('problem');
			}else if($("#orderOtherForm #orderOther_message").val() == ''){
				$('#orderOtherForm #orderOther_message').addClass('problem');
			} else {
				$.ajax({
					type: "POST",
					url: "assets/php/orderOtherForm.php",
					dataType: 'json',
					data: {
						orderOther_email: orderOther_email,
						orderOther_name: orderOther_name,
						orderOther_company: orderOther_company,
						orderOther_phone: orderOther_phone,
						orderOther_message: orderOther_message,
					},
					beforeSend: function(result) {
						$('#orderOtherForm button').empty();
						$('#orderOtherForm button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							$("#thankYouPopup").modal("show");
							$("#orderOtherPopup").modal("hide");

							$('#orderOtherForm button').empty();
							$('#orderOtherForm button').append('Order');
						} else {
							$('#orderOtherForm button').empty();
							$('#orderOtherForm button').append('<i class="fa fa-retweet"></i> Try again.');
							responseMessage.html(result.message).fadeIn(1000);
						}
					}
				});

			}
			return false;

		});



equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}


matchHeight = function(e){
if($(window).width() > 767){
	source=$(".matchContainer");

	for (i = 0; i < source.length; i++) {
		target=$(source[i]).children('.matchTarget');
		height=[0]
		$(target).each(function(k){height[k]=$(target[k]).height()});
		maxHeight=Math.max.apply(null, height)

			for (j = 0; j < target.length; j++) {
				heightDiff=(maxHeight-height[j])/2
				$(target[j]).css('padding-top', heightDiff);
			}
		}
		}else{
			$(".matchTarget").css('padding-top', 0);
		}
};

$(window).ready(function() {
	setTimeout(function(){
  	equalheight('.priceDiv');
		equalheight('.serviceLi');
		equalheight('.productBlurbEqualHeight');
		matchHeight();
	},50);
});


$(window).resize(function(){
  equalheight('.priceDiv');
	equalheight('.serviceLi');
	equalheight('.productBlurbEqualHeight');
	matchHeight();
});



$(".autoFill").keyup(function(){
	val=$(this).val();
	type=$(this).attr("data-autoFillType");

	$("[data-autofillType="+type+"]").val(val);
});

	});

})(jQuery);
