export const jsonParseThrow = () => {
	try {
		JSON.parse("{ bad worse worst }");
	} catch (err) {
		alert(err.name);
		alert(err.message);
	}
};
