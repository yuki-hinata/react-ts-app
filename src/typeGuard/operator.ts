export const operator = () => {
  const operate = { height: 175, weight: 56 };

  console.log('height' in operate)
}

// operateの中身はheightとweightが入っている。inはoperateの中に該当するものが存在する場合、
// trueを返す。これを利用して、型ガードを行うことが可能。heightはnum型だと。
