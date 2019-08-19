var newBullet = function (x, y, xSpeed, ySpeed, game) {
	var self = newGameObject(x, y, game);
	var bullet = {};

	bullet.update = function () {
		self.move(xSpeed, ySpeed);
	}

	game.addMovingObject(bullet);
	return bullet;
}