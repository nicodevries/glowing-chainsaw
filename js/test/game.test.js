import newGame from '../src/game.js';

describe('a game', function () {
	let game;
	let expectedWidth = 600;
	let expectedHeight = 600;
	beforeEach(function () {
		game = newGame(expectedWidth, expectedHeight);
	});
	it('has width and height according to the inputs', function () {
		expect(game.getWidth()).toBe(expectedWidth);
		expect(game.getHeight()).toBe(expectedHeight);
	})
	describe('when initialized without width and height', function () {
		beforeEach(function () {
			game = newGame();
		})
		it('has width and height of 500 by default', function () {
			expect(game.getWidth()).toBe(500);
			expect(game.getHeight()).toBe(500);
		});
	});
});