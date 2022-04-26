export const jsonParse = () => {
	let json = '{"name":"John", "age": 30}';
	let data = { height: 175, weight: 50 };

	try {
		let user = JSON.parse(json);
		let person = JSON.stringify(data);
		let personIni = JSON.parse(person);
		alert(user.name);
		alert(person.height);
		alert(personIni.height);
	} catch (err) {
		alert("取得失敗");
	}
};
// この時 alert(person.height) には何が出力される？
