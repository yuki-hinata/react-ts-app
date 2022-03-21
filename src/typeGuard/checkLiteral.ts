export const checkLiteral = () => {
  type TriState = 'yes' | 'no' | 'unknown';

  const logOutState = (state: TriState) => {
    if(state == 'yes') {
      console.log('yesが選択されました。')
    } else if (state == 'no') {
      console.log('noが選択されました。')
    } else {
      console.log('まだ選択されていません。')
    }
  }
}
