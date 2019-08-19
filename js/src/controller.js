var newController = function () {
	var self = {};
	var controller = {};

	controller.leftKeyDown = function () {
		return self.leftKeyDown;
	};

	controller.upKeyDown = function () {
		return self.upKeyDown;
	};

	controller.rightKeyDown = function () {
		return self.rightKeyDown;
	};

	controller.downKeyDown = function () {
		return self.downKeyDown;
	};

	controller.dispose = function () {
		document.removeEventListener('keydown', self.onKeyDown);
		document.removeEventListener('keyup', self.onKeyUp);
	};

	self.initialize = function () {
		document.addEventListener('keydown', self.onKeyDown);
		document.addEventListener('keyup', self.onKeyUp);
	};

	self.onKeyDown = function (e) {
        switch(e.keyCode) {
        	case 37: self.leftKeyDown = true; break;
        	case 38: self.upKeyDown = true; break;
        	case 39: self.rightKeyDown = true; break;
        	case 40: self.downKeyDown = true; break;
        }
    };

    self.onKeyUp = function (e) {
        switch(e.keyCode) {
        	case 37: self.leftKeyDown = false; break;
        	case 38: self.upKeyDown = false; break;
        	case 39: self.rightKeyDown = false; break;
        	case 40: self.downKeyDown = false; break;
        }
    };

    self.initialize();
	return controller;
}