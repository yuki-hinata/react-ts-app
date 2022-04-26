import React, { useState } from "react";

export const PrimeNumber = () => {
	const [number, setNumber] = useState();

	const onClick = () => {
		for (let i = 2; (i * i) <= number; i++) {
			if ((number % i) === 0) {
				console.log("素数じゃないよ");
			} else {
				console.log("素数ですよ！");
			}
		}
	};

	return (
		<div>
      <input type='number' value={number} onChange={(value) => setNumber(value.target.value) } />
      <button onClick={onClick}>素数判定</button>
    </div>
	);
};
