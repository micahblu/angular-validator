angular.module('angular-validator-demo', ['angularValidator']);


angular.module('angular-validator-demo').controller('DemoCtrl', function($scope) {

	$scope.fields = [{
		id: 1,
		validateOn: 'dirty',
		label: 'Favorite color',
		validateFunc: "validateColor"
	}, {
		id: 2,
		validateOn: 'dirty',
		label: 'Favorite day',
		validateFunc: "validateDay"
	}, {
		id: 3,
		validateOn: 'blur',
		label: 'Favorite genius',
		validateFunc: "verifyGenius"
	}];

	$scope.submitMyForm = function() {
		alert("Form submitted");
	};

	$scope.myCustomValidator = function(text) {
		return true;
	};

	$scope.anotherCustomValidator = function(text) {
		if (text === "rainbow") {
			return true;
		} else return "type in 'rainbow'";
	};

	$scope.verifyColor = function(text) {
		var colors = [
			'blue',
			'green',
			'red',
			'purple',
			'black',
			'white',
			'brown',
			'orange',
			'yellow'
		];
		return colors.indexOf(text) > -1 ? true : false;
	};

	$scope.verifyDay = function(text) {
		var days = [
			'sunday',
			'monday',
			'tuesday',
			'wednesday',
			'thursday',
			'friday',
			'saturday'
		];
		return days.indexOf(text) > -1 ? true : false;
	};

	$scope.verifyGenius = function(text) {
		var geniuses = [
			'newton',
			'einstein',
			'galileo',
			'hawking',
			'tesla',
			'von neumann',
			'turing'
		];
		return geniuses.indexOf(text) > -1 ? true : false;
	};


	$scope.passwordValidator = function(password) {

		if (!password) {
			return;
		}
		else if (password.length < 6) {
			return "Password must be at least " + 6 + " characters long";
		}
		else if (!password.match(/[A-Z]/)) {
			return "Password must have at least one capital letter";
		}
		else if (!password.match(/[0-9]/)) {
			return "Password must have at least one number";
		}

		return true;
	};
}).factory('customMessage', function () {
    // invalid message service with message function
    return {
        // scopeElementModel is the object in scope version, element is the object in DOM version
        message: function (scopeElementModel, element) {
            var errors = scopeElementModel.$error;
            if (errors.maxlength) {
                // be careful with the quote
                return "'Should be no longer than " + element.attributes['ng-maxlength'].value + " characters!'";
            } else {
                // default message
                return "'This field is invalid!'";
            }
        }
    };
});