var newPlayerCharacter = function (x, y, game, controller) {
	var self = newGameObject(x, y, game);
	var playerCharacter = {};
	var controller = controller || newController();
	var weapon = newBlowDart(playerCharacter, game);
	self.speed = 3;
	self.timer = 0;

	playerCharacter.getPosition = self.getPosition;

	playerCharacter.update = function () {
		var direction = self.determineDirection();
		self.move(direction.x, direction.y);

		if (self.timer%10 === 0) {
			weapon.fire();
		}

		self.timer += 1;
	}

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
		return {x: xDelta, y: yDelta};
    };

	return playerCharacter;
}