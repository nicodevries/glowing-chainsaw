import newPlayerCharacter from './playerCharacter.js';

const newGame = (width, height) => {
	const game = {};
	const self = {};
    const movingObjects = [];
	self.WIDTH = width || 500;
	self.HEIGHT = height || 500;
	

	game.getBackGround = () => {
        return self.bgctx;
    };

    game.getStaticLayer = () => {
        return self.sctx;
    };

    game.getDynamicLayer = () => {
        return self.dctx;
    };

    game.getHeight = () => {
        return self.HEIGHT;
    };

    game.getWidth = () => {
        return self.WIDTH;
    };

    game.drawRect = (x, y, width, height, color, canvas) => {
        canvas.globalCompositeOperation = "source-over";
        canvas.fillStyle = color || "#000000";
        canvas.fillRect(x, y, width, height);
    };

    game.clearRect = (x, y, width, height, canvas) => {
        canvas.globalCompositeOperation = "destination-out";
        canvas.clearRect(x, y, width, height);
    };

    game.drawCircle = (x, y, radius, color, canvas) => {
        canvas.globalCompositeOperation = "source-over";
        canvas.fillStyle = color || "#000000";
        canvas.beginPath();
        canvas.arc(x, y, radius, 0, 2*Math.PI);
        canvas.closePath();
        canvas.fill();
    };

    game.clearCircle = (x, y, radius, canvas) => {
        canvas.globalCompositeOperation = "destination-out";
        canvas.beginPath();
        canvas.arc(x, y, radius, 0, 2*Math.PI, true);
        canvas.closePath();
        canvas.fill();
    };

    game.addMovingObject = movingObject => {
        movingObjects.push(movingObject);
    }

    game.start = () => {
    	[self.dynamicLayer, self.bg, self.staticLayer].forEach(
			layer => document.body.appendChild(layer)
		);
    	self.createBackGround();
    	self.firstItem = newPlayerCharacter(100, 100, game);
    	self.animation = setInterval(self.update, 20);
    }


    self.createBackGround = () => {
        let color = "#aaeeff"
        game.drawRect(0, 0, self.WIDTH, self.HEIGHT, color, self.bgctx);
        game.drawCircle(0, 0, 100, "#ffeeaa", self.bgctx);
    };

	self.createLayer = zIndex => {
		let canvas = document.createElement("canvas");
		canvas.width = self.WIDTH.toString();
		canvas.height = self.HEIGHT.toString();
		canvas.style.position = "absolute";
		canvas.style.left = "0";
		canvas.style.top = "0";
		canvas.style.zIndex = zIndex.toString();
		return canvas;
	}

	self.update = () => {
		self.firstItem.update();
        movingObjects.forEach(item => item.update());
	}

	self.dynamicLayer = self.createLayer(2);
	self.dctx = self.dynamicLayer.getContext("2d");
	self.staticLayer = self.createLayer(1);
	self.sctx = self.staticLayer.getContext("2d");
	self.bg = self.createLayer(0);
	self.bgctx = self.bg.getContext("2d");
	return game;
};

window.startGame = () => {
	let game = newGame();
	game.start();
}

export default newGame;