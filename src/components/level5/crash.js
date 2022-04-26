import { a } from "./Stack/a";

export const crash = () => {
	try {
		a();
	} catch (err) {
		alert(err);
	}
};
