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
	}

	gameObject.move = (xDelta, yDelta) => {
		self.moveTo(self.x + xDelta, self.y + yDelta);
	}

	gameObject.update = () => {
		throw "update not implemented";
	}
	
	self.draw = () => {
		self.game.drawRect(self.x, self.y, self.width, self.height, null, self.game.getDynamicLayer());
	}

	self.clear = () => {
		self.game.clearRect(self.x, self.y, self.width, self.height, self.game.getDynamicLayer());
	}

	self.moveTo = (x, y) => {
		if(self.positionIsInGameArea(x, y)) {
			self.clear();
			self.x = x;
			self.y = y;
			self.draw();
		}
	}

	self.positionIsInGameArea = (x, y) => {
		return (
			x >= 0 && 
			x + self.width <= self.game.getWidth() && 
			y >= 0 && 
			y + self.height <= self.game.getHeight()
		);
	}

	return gameObject;
}

export default newGameObject;