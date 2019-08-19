var newWeapon = function (controller) {
	var self = {};
	var weapon = {};
	var controller = controller || newController();

	weapon.fire = function () {
		var direction = weapon.determineDirection();
		if (direction) {
			weapon.shoot(direction.x, direction.y);
		}
	}

	weapon.determineDirection = function () {
		throw "determineDirection not implemented";
	}

	weapon.shoot = function () {
		throw "shoot not implemented";
	}

	return weapon;
}