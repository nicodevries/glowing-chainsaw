const newGameObject = (x, y, game) => {
	const self = {};
	const gameObject = {};
	self.x = x;
	self.y = y;
	self.width = 10;
	self.height = 10;
	self.game = game;

	gameObject.getPosition = () => {
		return { 
			x: self.x,
			y: self.y
		}
	};

	gameObject.move = (xDelta, yDelta) => {
		self.moveTo(self.x + xDelta, self.y + yDelta);
	};

	gameObject.update = () => {
		throw "update not implemented";
	};

	gameObject.onExitGameArea = () => {
		throw "onExitGameArea not implemented";
	};

	gameObject.destroy = (instance) => {
		self.clear();
		self.game.removeMovingObject(instance);
	};
	
	self.draw = () => {
		self.game.drawRect(self.x - self.width/2, self.y - self.height/2, self.width, self.height, null, self.game.getDynamicLayer());
	};

	self.clear = () => {
		self.game.clearRect(self.x - self.width/2 -1, self.y - self.height/2 -1, self.width + 2, self.height + 2, self.game.getDynamicLayer());
	};

	self.moveTo = (x, y) => {
		if(self.positionIsInGameArea(x, y)) {
			self.clear();
			self.x = x;
			self.y = y;
			self.draw();
		} else {
			gameObject.onExitGameArea(self.outsideGameArea(x, y));
		}
	};

	self.positionIsInGameArea = (x, y) => {
		return (
			x >= 0 && 
			x <= self.game.getWidth() && 
			y >= 0 && 
			y <= self.game.getHeight()
		);
	};

	self.outsideGameArea = (x, y) => {
		return {
			left: x < 0,
			right: x > self.game.getWidth(),
			top: y < 0,
			bottom: y > self.game.getHeight()
		}
	}

	return gameObject;
};

export default newGameObject;