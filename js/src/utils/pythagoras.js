export function otherLeg(hypothenuse, knownLeg, currentlyNegative) {
	const otherLeg = Math.sqrt(hypothenuse * hypothenuse - knownLeg * knownLeg);
	return currentlyNegative ? -otherLeg : otherLeg;
}