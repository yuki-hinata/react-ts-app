export const jsonParseError = () => {
  const json = '{ "name" : "yuki" }'

  try {
    let user = JSON.parse(json);
    alert(user.age)
  } catch(err) {
    alert('なんか失敗してるよぉ。')
  }
}
