// テキスト欄に数字を入力。入力されたフォームの値のキャラの名前を表示する。例）１だったら、スカイウォーカー
import React, { useState } from "react";
import useAspidaSWR from "@aspida/swr";
import aspida from "@aspida/axios";
import api from '../../api/$api';
import { BackButton } from "../../ui/BackButton";

const client = api(aspida());

export const WhatCharacter = () => {
const [number, setNumber] = useState(1);
console.log(number)
const user = useAspidaSWR(client.people._peopleId(`${number}`));

const fetchSwapi =  async () => {
  await user;
  if(user.error) {
    alert('有効な数字ではありません。');
    return;
  }
  alert(user.data.name)
}

  return (
    <div>
      <input type='number' value={number} onChange={event => setNumber(event.target.value)}  />
      <button onClick={() => fetchSwapi()}>送信する</button>
      <hr />
      <BackButton />
    </div>
  )
}

// 送信ボタンを押したタイミングでそれが有効な数字だった場合→その名前を表示させる
// 有効な数字でなかった場合(何を持って有効な数字と言えるのか)→ノーキャラクターとか表示させる。
// 受け取れなかったタイミングでerrorが入るはず。なのでerrorがあったら、alert表示でreturnで。。
