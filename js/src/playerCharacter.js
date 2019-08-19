var newPlayerCharacter = function (x, y, game, controller) {
	var self = newGameObject(x, y, game);
	var playerCharacter = {};
	var controller = controller || newController();
	self.speed = 3;

	playerCharacter.getPosition = self.getPosition;

	playerCharacter.update = function () {
		var direction = self.determineDirection();
		self.move(direction.x, direction.y);
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