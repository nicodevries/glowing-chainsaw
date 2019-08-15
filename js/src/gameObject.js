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

	gameObject.moveTo = function (x, y) {
		self.game.clearRect(self.x, self.y, self.width, self.height, self.game.getDynamicLayer());
		self.x = x;
		self.y = y;
		self.game.drawRect(self.x, self.y, self.width, self.height, null, self.game.getDynamicLayer());
	}

	gameObject.draw = function () {
		self.game.drawRect(self.x, self.y, 10, 10, null, self.game.getDynamicLayer());
	}

	return gameObject;
}