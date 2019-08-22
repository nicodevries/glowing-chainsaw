import * as pythagoras from '../../src/utils/pythagoras.js';

describe('pythagoras', function () {
	describe('when the hypothenuse has length 5 and one short side of a triangle has length 3', function () {
		it('the other short side has length 4', function () {
			expect(pythagoras.otherLeg(5,3)).toBe(4);
		});
		describe('and the current value of the other side is positive', function () {
			it('the other short side has length 4', function () {
				expect(pythagoras.otherLeg(5,3,false)).toBe(4);
			});
		});
		describe('and the current value of the other side is negative', function () {
			it('the other short side has length -4', function () {
				expect(pythagoras.otherLeg(5,3,true)).toBe(-4);
			});
		});
	});
});