import newController from '../controller.js';

const newWeapon = (control) => {
	const self = {};
	const weapon = {};
	let controller = control || newController();

	weapon.fire = () => {
		let direction = weapon.determineDirection();
		if (direction) {
			weapon.shoot(direction.x, direction.y);
		}
	}

	weapon.determineDirection = () => {
		throw "determineDirection not implemented";
	}

	weapon.shoot = () => {
		throw "shoot not implemented";
	}

	return weapon;
};

export default newWeapon;