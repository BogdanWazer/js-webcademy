const foo = function () {
  console.log(`foo ->`, this);
};

foo();

const user = {
  tag: 'Mango',
  showTag() {
    console.log(`showTag -> this`, this);
  },
};

const invokeAction = function (action) {
  console.log(action);
  action();
};

invokeAction(user.showTag);

//  Change COLOR

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log('ChangeColor -> this'.this);
    // this.color = color;
  };

  changeColor();

  const sweater = {
    color: 'teal',
  };

  sweater.updateColor = changeColor;

  return sweater.updateColor;
};

const swapColor = makeChangeColor();
swapColor('blue');

// Counter

// const counter = {
//   value: 0,
//   increment(value) {
//     // console.log(`Increment value -> this`, this);
//     this.value += value;
//   },
//   decrement(value) {
//     // console.log(`Decrement value -> this`, this);
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment);
// updateCounter(10, counter.decrement);

const obj = {
  a: 1,
  b: 2,
  print() {
    console.log(this);
  },
};

// obj.print = function () {
//   setTimeout(() => {
//     console.log(this);
//   }, 1000);
// };
// obj.print();

const showThis = function () {
  console.log('showThis', this);
};

showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, 1, 1, 1);

const objB = {
  x: 5,
  y: 10,
};
