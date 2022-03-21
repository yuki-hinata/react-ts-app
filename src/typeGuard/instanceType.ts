export const instanceType = () => {
  class Foo {
    foo = 123;
    common = '123';
  }
  
  class Bar {
    bar = 123;
    common = '123';
  }

  const doStuff = (arg: Foo | Bar) => {
    if (arg instanceof Foo){
      console.log(arg.foo);
      console.log(arg.bar);
    }
    if (arg instanceof Bar) {
      console.log(arg.foo);
      console.log(arg.bar);
    }

    console.log(arg.common);
    console.log(arg.foo);
    console.log(arg.bar);
  }

  doStuff(new Foo());
  doStuff(new Bar());
}
