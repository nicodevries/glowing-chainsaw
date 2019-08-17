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
	self.draw = function () {
		//console.log(`drawing on ${self.x}, ${self.y}`);
		self.game.drawRect(self.x, self.y, self.width, self.height, null, self.game.getDynamicLayer());
	}

	self.clear = function () {
		self.game.clearRect(self.x, self.y, self.width, self.height, self.game.getDynamicLayer());
	}

	self.moveTo = function (x, y) {
		self.clear();
		self.x = x;
		self.y = y;
		self.draw();
	}

	return gameObject;
}