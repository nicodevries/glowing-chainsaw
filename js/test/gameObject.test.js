import newGameObject from '../src/gameObject.js';
import newGame from '../src/game.js';

describe('an object', function () {
	let game = newGame();
	let gameObject;
	let expectedX = 10;
	let expectedY = 20;
	beforeEach(function () {
		gameObject = newGameObject(expectedX, expectedY, game);
	});
	it('is initialized on its input position', function () {
		expect(gameObject.getPosition()).toEqual({x: expectedX, y: expectedY});
	});
	describe('when moved', function () {
		beforeEach(function () {
			gameObject.move(20, 20);
		});
		it('changes position to the new position', function () {
			expect(gameObject.getPosition()).toEqual({x: 30, y: 40});
		});
	});
});