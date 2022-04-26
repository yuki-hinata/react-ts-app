/* eslint-disable no-undef */
export const trySetTimeoutSuccess = () => {
	setTimeout(
		() => {
			try {
				// eslint-disable-next-line no-unused-expressions
				killfunc;
			} catch (e) {
				alert("catchの文中です");
			}
		},
		1000,
	);
};
