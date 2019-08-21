import newEnemy from '../../src/enemies/enemy.js';
import newGame from '../../src/game.js';

describe('a enemy', function () {
	let enemy;
	let game;
	beforeEach(function () {
		game = newGame();
		enemy = newEnemy(10,10,game);
	});
	it('exists', function () {
		expect(enemy).toBeDefined();
	});
});