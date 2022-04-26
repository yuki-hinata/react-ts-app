/* eslint-disable no-undef */
export const errorObject = () => {
	try {
		// eslint-disable-next-line no-unused-expressions
		kkkkk;
	} catch (err) {
		alert(err.name);
		alert(err.message);
	}
};
