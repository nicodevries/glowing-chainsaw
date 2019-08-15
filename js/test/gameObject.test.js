describe('an object', function () {
	var game = newGame();
	var gameObject;
	var expectedX = 10;
	var expectedY = 20;
	beforeEach(function () {
		gameObject = newGameObject(expectedX, expectedY, game);
	});
	it('is initialized on its input position', function () {
		expect(gameObject.getPosition()).toEqual({x: expectedX, y: expectedY});
	});
	describe('when moved', function () {
		beforeEach(function () {
			gameObject.moveTo(30, 40);
		});
		it('changes position to the new position', function () {
			expect(gameObject.getPosition()).toEqual({x: 30, y: 40});
		});
	});
});