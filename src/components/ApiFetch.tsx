import { useState, useEffect } from "react";
import axios from "axios";

type Person = {
  name: string;
  height: string;
};
const ApiFetch = () => {
  //初期値配列
  const [Luke, setDatas] = useState<Person>();
  useEffect(() => {
    axios
      .get<Person>("https://swapi.dev/api/people/1")
      .then((response) => {
        setDatas(response.data);
      });
  }, []);
  console.log(Luke);
  return (
    <div>
      {Luke && (
        <div>
          {Luke.name}:{Luke.height}
        </div>
      )}
    </div>
  );
};
export default ApiFetch;
