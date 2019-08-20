import newController from '../src/controller.js';

describe('a controller', function () {
	let controller;
	beforeEach(function () {
		controller = newController();
	});
	it('exists', function () {
		expect(controller).toBeDefined();
	});
});