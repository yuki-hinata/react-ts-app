export const secondAgainThrow = () => {
  let json = '{ "age" : 39 }'

  try {
    let user = JSON.parse(json);

    if (!user.name) {
      throw new SyntaxError('該当のデータがありません。')
    }
    // eslint-disable-next-line no-undef
    faiied();

    alert(user.name);
  } catch(err) {
    if (err.name == 'SyntaxError') {
      alert(err);
    } else {
      throw err;
    }
  }
}

// 8行目のSyntaxErrorをErrorに変えたとき、catch文中にはerrの名前がsyntaxerrorだった時のみアラート表示するということしか書かれて
// いないので、throwされる。Error Boundaryが起こる。
