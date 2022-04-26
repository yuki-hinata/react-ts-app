export const jsonParseFail = () => {
	let json = "{ 'name': 'yuki' }";

	try {
		let user = JSON.parse(json);
		alert(user.name);
	} catch (err) {
		alert("なんか失敗してるよぉ〜");
	}
};
// これってalertはどっちが表示されますか？
