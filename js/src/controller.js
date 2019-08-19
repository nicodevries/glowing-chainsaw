var newController = function (keys) {
	var self = {};
	var controller = {};
	var keys = keys || {left: 37, up: 38, right: 39, down: 40}

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
        	case keys.left: self.leftKeyDown = true; break;
        	case keys.up: self.upKeyDown = true; break;
        	case keys.right: self.rightKeyDown = true; break;
        	case keys.down: self.downKeyDown = true; break;
        }
    };

    self.onKeyUp = function (e) {
        switch(e.keyCode) {
        	case keys.left: self.leftKeyDown = false; break;
        	case keys.up: self.upKeyDown = false; break;
        	case keys.right: self.rightKeyDown = false; break;
        	case keys.down: self.downKeyDown = false; break;
        }
    };

    self.initialize();
	return controller;
}