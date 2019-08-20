import newBullet from '../../src/weapons/bullet.js';
import newGame from '../../src/game.js';

describe('a bullet', function () {
	let bullet;
	let game;
	beforeEach(function () {
		game = newGame();
		bullet = newBullet(10,10,10,10,game);
	});
	it('exists', function () {
		expect(bullet).toBeDefined();
	});
});