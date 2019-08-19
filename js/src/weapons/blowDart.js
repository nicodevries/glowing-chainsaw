var newBlowDart = function(wielder, game) {
	var controller = newController({left: 65, up: 87, right: 68, down: 83});
	var self = newWeapon(controller);
	var blowDart = {};
	self.speed = 10;

	blowDart.fire = function () {
		self.fire();
	};

	self.determineDirection = function () {
		var xDelta = 0, yDelta = 0;
		if(controller.leftKeyDown()) {
			xDelta -= self.speed;
		}
		if(controller.rightKeyDown()) {
			xDelta += self.speed;
		}
		if(controller.upKeyDown()) {
			yDelta -= self.speed;
		}
		if(controller.downKeyDown()) {
			yDelta += self.speed;
		}
		if (xDelta === 0 && yDelta === 0) {
			return undefined;
		}
		return {x: xDelta, y: yDelta};
	};

	self.shoot = function (xSpeed, ySpeed) {
		var startingPosition = wielder.getPosition();
		var bullet = newBullet(startingPosition.x, startingPosition.y, xSpeed, ySpeed, game);
	};

	return blowDart;
};