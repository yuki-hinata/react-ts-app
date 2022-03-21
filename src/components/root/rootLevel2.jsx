import React from "react";

// components
import { jsonParse } from '../level2/jsonParse'
import { jsonParseFail } from '../level2/jsonParseFail';
import { jsonParseError } from '../level2/jsonParseError';
import { jsonParseThrow } from '../level2/jsonParseThrow';
import { jsonParseThrowErr } from '../level2/jsonParseThrowErr';

export const RootLevel2 = () => {
  return (
    <div>
      <button onClick={() => jsonParse()}>jsonParse</button>
      <button onClick={() => jsonParseFail()}>jsonParseFail</button>
      <button onClick={() => jsonParseError()}>jsonParseError</button>
      <button onClick={() => jsonParseThrow()}>jsonParseThrow</button>
      <button onClick={() => jsonParseThrowErr()}>jsonParseThrowErr</button>
    </div>
  )
}
