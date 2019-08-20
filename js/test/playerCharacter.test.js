import newPlayerCharacter from '../src/playerCharacter.js';
import newGame from '../src/game.js';

describe('a playerCharacter', function () {
	let playerCharacter, game, expectedX, expectedY;
	beforeEach(function () {
		expectedX = 100;
		expectedY = 100;
		game = newGame();
		playerCharacter = newPlayerCharacter(expectedX, expectedY, game);
	});
	it('exists', function () {
		expect(playerCharacter).toBeDefined();
	});
	it('starts at it given position', function () {
		expect(playerCharacter.getPosition()).toEqual({x: expectedX, y: expectedY});
	});
});