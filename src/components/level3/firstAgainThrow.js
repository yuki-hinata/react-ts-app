export const firstAgainThrow = () => {
  let json = '{ "age" : 39 }';

  try {
    // eslint-disable-next-line no-undef
    user = JSON.parse(json);
  } catch(err) {
    alert(err);
  }
}
