import newWeapon from '../../src/weapons/weapon.js';

describe('a weapon', function () {
	let weapon;
	beforeEach(function () {
		weapon = newWeapon();
	});
	it('exists', function () {
		expect(weapon).toBeDefined();
	});
});