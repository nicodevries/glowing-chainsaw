import newGameObject from '../gameObject.js';

const newBullet = (x, y, xSpeed, ySpeed, game) => {
	const self = newGameObject(x, y, game);
	const bullet = {};

	bullet.update = () => {
		self.move(xSpeed, ySpeed);
	}

	game.addMovingObject(bullet);
	return bullet;
}

export default newBullet;