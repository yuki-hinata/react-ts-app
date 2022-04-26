import useAspidaSWR from "@aspida/swr";
import aspida from "@aspida/axios";
import api from "../api/$api";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Routing
import { RootLevel1 } from "../components/root/rootLevel1";
import { Home } from "./root/Home";
import { RootLevel2 } from "../components/root/rootLevel2";
import { RootLevel3 } from "../components/root/rootLevel3";
import { RootLevel5 } from "../components/root/rootLevel5";
import { WhatCharacter } from "./level5/whatCharacter";
import { PrimeNumber } from "./level5/primeNumber";

const client = api(aspida());

export const ApiFetch = () => {
	const { data, error } = useAspidaSWR(client.people._peopleId(1));

	if (error) {
		return <div>failed to compile</div>;
	}
	if (!data) {
		return <div>loading...</div>;
	}
	return (
		<div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level1" element={<RootLevel1 />} />
          <Route path="/level2" element={<RootLevel2 />} />
          <Route path="/level3" element={<RootLevel3 />} />
          <Route path="/level5" element={<RootLevel5 />} />
          <Route path="/character" element={<WhatCharacter />} />
          <Route path='/prime' element={<PrimeNumber />} />
        </Routes>
      </Router>
    </div>
	);
};
