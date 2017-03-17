export default ({rows, cols, fill}) => {
	let map = [];
	for (let row = 0; row < rows ; row++) {
		map[row] = [];
		for (let col = 0; col < cols; col++) {
			map[row][col] = fill;
		}
	}
	return map;
};
