import newController from '../controller.js';
import newWeapon from './weapon.js';
import newBullet from './bullet.js';

const newBlowDart = (wielder, game) => {
	let controller = newController({left: 65, up: 87, right: 68, down: 83});
	const self = newWeapon(controller);
	const blowDart = {};
	self.speed = 10;

	blowDart.fire = () => {
		self.fire();
	};

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
		if (xDelta === 0 && yDelta === 0) {
			return undefined;
		}
		return {x: xDelta, y: yDelta};
	};

	self.shoot = (xSpeed, ySpeed) => {
		let startingPosition = wielder.getPosition();
		let bullet = newBullet(startingPosition.x, startingPosition.y, xSpeed, ySpeed, game);
	};

	return blowDart;
};

export default newBlowDart;