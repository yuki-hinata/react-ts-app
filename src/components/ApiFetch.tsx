import { useState, useEffect } from "react";
import aspida from "@aspida/axios"
import api from "../api/$api"

type Person = {
  name: string;
  height: string;
};
const ApiFetch = () => {
  //初期値配列
  const [Luke, setDatas] = useState<Person>();
  useEffect(() => {
    ;(async () => {
      const userId = 0
      const peopleId = 1
      const limit = 10
      const client = api(aspida())
    
      // await client.v1.users.post({ body: { name: "taro" } })
    
      // const res = await client.v1.users.$get({ query: { limit } })
      // console.log(res)
      // // req -> GET: /v1/users/?limit=10
      // // res -> { status: 200, body: [{ id: 0, name: "taro" }], headers: {...} }
    
      // const user = await client.v1.users._userId(userId).$get()
      // console.log(user)
      // req -> GET: /v1/users/0
      // res -> { id: 0, name: "taro" }

      const people = await client.people._peopleId(1).$get()
      // console.log(people.name)
      setDatas(people);
    })()
  }, []);
  return (
    <div>
      {Luke?.name} : {Luke?.height}
    </div>
  );
};
export default ApiFetch;
