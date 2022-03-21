import { b } from "../Stack/b";

export const a = () => {
  try {
    b();
  } catch(err) {
    if(err.name === 'Error') {
      alert('bで握り潰したい。')
    } else {
      throw err;
    }
  }
}
