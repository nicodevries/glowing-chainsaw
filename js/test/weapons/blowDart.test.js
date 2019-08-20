import newBlowDart from '../../src/weapons/blowDart.js';

describe('a blowDart', function () {
	let blowDart;
	beforeEach(function () {
		blowDart = newBlowDart();
	});
	it('exists', function () {
		expect(blowDart).toBeDefined();
	});
});