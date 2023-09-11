const swapSlots = (targetSlot, activeSlot, currentSlots) => {
	currentSlots[1] = targetSlot;
	if (currentSlots[0] === targetSlot) {
		currentSlots[0] = activeSlot;
	} else if (currentSlots[2] === targetSlot) {
		currentSlots[2] = activeSlot;
	}
};

export { swapSlots };
