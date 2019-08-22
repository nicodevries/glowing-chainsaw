import newGameObject from '../gameObject.js';
import {randInt} from '../utils/random.js';
import {otherLeg} from '../utils/pythagoras.js';

const newEnemy = (x, y, game) => {
	const self = newGameObject(x, y, game);
	const enemy = {};
	self.velocity = 3;
	self.speed = {x: 0, y: 0};

	enemy.update = () => {
		self.move(self.speed.x, self.speed.y);
		console.log(`x: ${self.speed.x}, y: ${self.speed.y}`);
	};

	self.initialize = () => {
		self.speed.x = randInt(-3,3);
		self.speed.y = otherLeg(self.velocity, self.speed.x, randInt(0,1));
	};

	self.onExitGameArea = (hit) => {
		let position = self.getPosition();
		let xNext = position.x + self.speed.x;
		let yNext = position.y + self.speed.y;
		if (xNext >= game.getWidth() || xNext <= 0) {
			self.speed.x *= (-0.1 * randInt(1,10));
			self.speed.y = otherLeg(self.velocity, self.speed.x, self.speed.y < 0);
		}
		if (yNext >= game.getHeight() || yNext <= 0) {
			self.speed.y *= (-0.1 * randInt(1,10));
			self.speed.x = otherLeg(self.velocity, self.speed.y, self.speed.x < 0);
		}
	};

	game.addMovingObject(enemy);
	self.initialize();
	return enemy;
};

export default newEnemy;