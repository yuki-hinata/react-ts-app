import React from "react";

import { crash } from "../level5/crash";
import { StarWars } from "../level5/starWars";

export const RootLevel5 = () => {
	StarWars();
	return (
		<>
    <button onClick={() => crash()}>crash</button>
    </>
	);
};
