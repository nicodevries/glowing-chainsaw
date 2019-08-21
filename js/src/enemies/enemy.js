import newGameObject from '../gameObject.js';
import {randInt} from '../utils/random.js';

const newEnemy = (x, y, game) => {
	const self = newGameObject(x, y, game);
	const enemy = {};
	self.speed = {x: randInt(1,5), y: randInt(1,5)};

	enemy.update = () => {
		self.move(self.speed.x, self.speed.y);
	};

	self.onExitGameArea = () => {
		let position = self.getPosition();
		let xNext = position.x + self.speed.x;
		let yNext = position.y + self.speed.y;
		if (xNext + 10 >= game.getWidth() || xNext <= 0) {
			self.speed.x *= (-0.1 * randInt(5,15));
		}
		if (yNext + 10 >= game.getHeight() || yNext <= 0) {
			self.speed.y *= (-0.1 * randInt(5,15));
		}
	};

	game.addMovingObject(enemy);
	return enemy;
};

export default newEnemy;