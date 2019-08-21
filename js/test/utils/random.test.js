import * as random from '../../src/utils/random.js';

describe('random utils', function () {
	describe('a random integer', function () {
		it('should be between the minimum and the maximum', function () {
			let randomInteger = random.randInt(0, 5);
			expect(randomInteger).toBeLessThanOrEqual(5);
			expect(randomInteger).toBeGreaterThanOrEqual(0);
		});
	});
});