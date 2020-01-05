(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});


})(jQuery);

$(document).ready(function () {

	// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
	function AppViewModel() {

		self = this;
		self.customer = ko.observableArray([]);

		self.chosenCustomer = ko.observable();
		self.chosenCustomerData = ko.observable();

		// Behaviours
		self.goToCustomer = function (customer) {
			self.chosenCustomer(customer);
			self.chosenCustomerData(customer);
		};
		$('#fetch-btn').on('click', function () {
			customerNumber = $('#customer-number').val();
			email = $('#email-input').val();

			if (customerNumber || email) {
				param = customerNumber ? customerNumber : email;
				$.ajax({
					url: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb',
					dataType: 'json',
					success: function (data) {
						if (data.results[0] && data.results[0].length > 0) {
							console.log(_.filter(data.results[0], function (obj) {
								return obj.email.includes(param);
							}));
							self.customer(
								_.filter(data.results[0], function (obj) {
									return obj.email.includes(param);
								})
							);
						}
					}
				});
			}

		});
	}

	// Activates knockout.js
	ko.applyBindings(new AppViewModel());
	if ($('.custom-menu').is(":visible")) {
		$('.customer-list .customer-item').on('click', function () {
			$('#sidebarCollapse').click();
		});
	}

});