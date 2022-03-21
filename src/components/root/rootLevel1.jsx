import React from 'react';

// components
import { tryFail } from '../level1/tryFail';
import { trySetTimeoutFail } from "../level1/trySetTimeoutFail";
import { trySetTimeoutSuccess } from "../level1/trySetTimeoutSuccess";
import { errorObject } from "../level1/errorObject";
import { BackButton } from '../../ui/BackButton';

export const RootLevel1 = () => {
  return (
    <div>
      <button onClick={() => tryFail()}>tryFail</button>
      <button onClick={() => trySetTimeoutFail()}>trySetTimeoutFail</button>
      <button onClick={() => trySetTimeoutSuccess()}>trySetTimeoutSuccess</button>
      <button onClick={() => errorObject()}>errorObject</button>
      <hr />
      <BackButton />
    </div>
  )
}
