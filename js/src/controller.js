const newController = (providedKeys) => {
	const self = {};
	const controller = {};
	let keys = providedKeys || {left: 37, up: 38, right: 39, down: 40}

	controller.leftKeyDown = () => {
		return self.leftKeyDown;
	};

	controller.upKeyDown = () => {
		return self.upKeyDown;
	};

	controller.rightKeyDown = () => {
		return self.rightKeyDown;
	};

	controller.downKeyDown = () => {
		return self.downKeyDown;
	};

	controller.dispose = () => {
		document.removeEventListener('keydown', self.onKeyDown);
		document.removeEventListener('keyup', self.onKeyUp);
	};

	self.initialize = () => {
		document.addEventListener('keydown', self.onKeyDown);
		document.addEventListener('keyup', self.onKeyUp);
	};

	self.onKeyDown = e => {
        switch(e.keyCode) {
        	case keys.left: self.leftKeyDown = true; break;
        	case keys.up: self.upKeyDown = true; break;
        	case keys.right: self.rightKeyDown = true; break;
        	case keys.down: self.downKeyDown = true; break;
        }
    };

    self.onKeyUp = e => {
        switch(e.keyCode) {
        	case keys.left: self.leftKeyDown = false; break;
        	case keys.up: self.upKeyDown = false; break;
        	case keys.right: self.rightKeyDown = false; break;
        	case keys.down: self.downKeyDown = false; break;
        }
    };

    self.initialize();
	return controller;
};

export default newController;