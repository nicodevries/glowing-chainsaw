var newGameObject = function(x, y, game) {
	var self = {};
	var gameObject = {};
	self.x = x;
	self.y = y;
	self.width = 10;
	self.height = 10;
	self.game = game;

	gameObject.getPosition = function () {
		return { 
			x: self.x,
			y: self.y
		}
	}

	gameObject.move = function (xDelta, yDelta) {
		self.moveTo(self.x + xDelta, self.y + yDelta);
	}

	gameObject.update = function () {
		throw "update not implemented";
	}
	
	self.draw = function () {
		self.game.drawRect(self.x, self.y, self.width, self.height, null, self.game.getDynamicLayer());
	}

	self.clear = function () {
		self.game.clearRect(self.x, self.y, self.width, self.height, self.game.getDynamicLayer());
	}

	self.moveTo = function (x, y) {
		if(self.positionIsInGameArea(x, y)) {
			self.clear();
			self.x = x;
			self.y = y;
			self.draw();
		}
	}

	self.positionIsInGameArea = function (x, y) {
		return (
			x >= 0 && 
			x + self.width <= self.game.getWidth() && 
			y >= 0 && 
			y + self.height <= self.game.getHeight()
		);
	}

	return gameObject;
}