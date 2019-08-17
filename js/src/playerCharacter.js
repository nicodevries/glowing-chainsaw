var newPlayerCharacter = function (x, y, game) {
	var self = newGameObject(x, y, game);
	var playerCharacter = {};
	self.speed = 5;

	playerCharacter.getPosition = self.getPosition;

	playerCharacter.update = function () {
		var direction = self.determineDirection();
		self.move(direction.x, direction.y);
	}

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

    self.determineDirection = function () {
    	var xDelta = 0, yDelta = 0;
		if(self.leftKeyDown) {
			xDelta -= self.speed;
		}
		if(self.rightKeyDown) {
			xDelta += self.speed;
		}
		if(self.upKeyDown) {
			yDelta -= self.speed;
		}
		if(self.downKeyDown) {
			yDelta += self.speed;
		}
		return {x: xDelta, y: yDelta};
    };


    document.addEventListener('keydown', self.onKeyDown);
	document.addEventListener('keyup', self.onKeyUp);
	return playerCharacter;
}