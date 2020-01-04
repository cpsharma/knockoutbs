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
		self.customer = ko.observableArray([{
				"name": {
					"title": "mr",
					"first": "brad",
					"last": "gibson"
				},
				"email": "brad.gibson@example.com",
				"dob": {
					"date": "1993-07-20T09:44:18.674Z",
					"age": 26
				},
				"phone": "011-962-7516",
				"cell": "081-454-0666",
				"location": {
					"street": "9278 new road",
					"city": "kilcoole",
					"state": "waterford",
					"postcode": "93027",
					"coordinates": {
						"latitude": "20.9267",
						"longitude": "-7.9310"
					}
				}
			},
			{
				"name": {
					"title": "mr",
					"first": "Jim",
					"last": "gibson"
				},
				"email": "brad.gibson@example.com",
				"dob": {
					"date": "1993-07-20T09:44:18.674Z",
					"age": 26
				},
				"phone": "011-962-7516",
				"cell": "081-454-0666",
				"location": {
					"street": "9278 new road",
					"city": "kilcoole",
					"state": "waterford",
					"postcode": "93027",
					"coordinates": {
						"latitude": "20.9267",
						"longitude": "-7.9310"
					}
				}
			}
		]);

		self.chosenCustomer = ko.observable();
		self.chosenCustomerData = ko.observable();

		// Behaviours
		self.goToCustomer = function (customer) {
			self.chosenCustomer(customer);
			self.chosenCustomerData(customer);
			console.log(self.chosenCustomerData());
		};
	}

	// Activates knockout.js
	ko.applyBindings(new AppViewModel());
	if ($('.custom-menu').is(":visible")) {
		$('.customer-list .customer-item').on('click', function () {
			$('#sidebarCollapse').click();
		});
	}
});