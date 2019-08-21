import newGameObject from './gameObject.js';
import newController from './controller.js';
import newBlowDart from './weapons/blowDart.js';

const newPlayerCharacter = (x, y, game, control) => {
	const self = newGameObject(x, y, game);
	const playerCharacter = {};
	let controller = control || newController();
	let weapon = newBlowDart(playerCharacter, game);
	self.speed = 3;
	self.timer = 0;

	playerCharacter.getPosition = self.getPosition;

	playerCharacter.update = () => {
		let direction = self.determineDirection();
		self.move(direction.x, direction.y);

		if (self.timer%10 === 0) {
			weapon.fire();
		}

		self.timer += 1;
	}

    self.determineDirection = () => {
    	let xDelta = 0, yDelta = 0;
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

    self.onExitGameArea = () => {
    	
    }

	return playerCharacter;
}

export default newPlayerCharacter;