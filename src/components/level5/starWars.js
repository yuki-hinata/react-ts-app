import useAspidaSWR from "@aspida/swr";
import aspida from "@aspida/axios";
import api from "../../api/$api";

const client = api(aspida());

export const StarWars = () => {
	try {
		const user = useAspidaSWR(client.people._peopleId(1));
		alert(user.data.name);
	} catch (err) {
		alert(err);
	}
};
// aspidaの処理に関しては、try..catchを用いる必要性はあまり感じず。データの取得に失敗した場合、errorで受け取れるので、catchを書く必要がなさそう。
