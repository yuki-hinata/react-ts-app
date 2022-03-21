export const instanceofElse = () => {
  class Foo {
    foo = 123;
  }

  class Bar {
    bar = 456;
  }

  const doStuff = (arg: Foo | Bar) => {
    if (arg instanceof Foo) {
      console.log(arg.foo);
      console.log(arg.bar);
    }
    else {
      console.log(arg.foo);
      console.log(arg.bar);
    }
  }

  doStuff(new Foo());
  doStuff(new Bar());
}
