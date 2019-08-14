describe('a game', function () {
	it('exists', function () {
		expect(newGame()).toBeDefined();
	});
	it('is something', function () {
		expect(newGame()).toBe('Something');
	});
});