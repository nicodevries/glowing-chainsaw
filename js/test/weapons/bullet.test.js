describe('a bullet', function () {
	var bullet;
	var game;
	beforeEach(function () {
		game = newGame();
		bullet = newBullet(10,10,10,10,game);
	});
	it('exists', function () {
		expect(bullet).toBeDefined();
	});
});