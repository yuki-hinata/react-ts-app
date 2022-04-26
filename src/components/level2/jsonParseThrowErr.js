export const jsonParseThrowErr = () => {
	const json = '{ "name" : "yuki" }';

	try {
		const user = JSON.parse(json);

		if (!user.age) {
			throw new SyntaxError("SyntaxErrorです。");
		}
		alert(user.age);
	} catch (err) {
		alert(err);
	}
};
