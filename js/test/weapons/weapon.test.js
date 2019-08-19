describe('a weapon', function () {
	var weapon;
	beforeEach(function () {
		weapon = newWeapon();
	});
	it('exists', function () {
		expect(weapon).toBeDefined();
	});
});