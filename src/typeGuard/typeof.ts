export const doSomething = (x: number | string) => {
  if(typeof x === 'string') {
    console.log(x.substr(1));
    console.log(x.subtr(1));
  }
}
