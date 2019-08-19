describe('a bullet', function () {
	var bullet;
	beforeEach(function () {
		bullet = newBullet();
	});
	it('exists', function () {
		expect(bullet).toBeDefined();
	});
});