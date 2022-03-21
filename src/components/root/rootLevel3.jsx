import React from "react";

// function
import { firstAgainThrow } from '../level3/firstAgainThrow';
import { secondAgainThrow } from '../level3/secondAgainThrow';
import { thirdAgainThrow } from '../level3/thirdAgainThrow';

export const RootLevel3 = () => {
  return (
    <div>
    <button onClick={() => firstAgainThrow()}>firstAgainThrow</button>
    <button onClick={() => secondAgainThrow()}>secondAgainThrow</button>
    <button onClick={() => thirdAgainThrow()}>thirdAgainThrow</button>
    </div>
  )
}
