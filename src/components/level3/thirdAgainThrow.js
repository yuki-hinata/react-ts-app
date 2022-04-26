export const thirdAgainThrow = () => {
	try {
		readData();
	} catch (err) {
		alert(err);
	}
};

const readData = () => {
	let json = '{ "age" : 39 }';

	try {
		// eslint-disable-next-line no-undef
		const user = JSON.parse(json);
		alert(user.name);
	} catch (err) {
		if (err.name != "SyntaxError") {
			throw err;
		}
	}
};
// readDataのみではError Boundaryがおこる。
