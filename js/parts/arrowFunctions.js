const add = function (a, b, c) {
  console.log(arguments);
  return a + b + c;
};

console.log(add(5, 4, 6));

const addV2 = (a, b, c) => a + b + c;
console.log('V2: ', addV2(4, 5, 6));

const fnA = function () {
  return {
    a: 5,
  };
};

console.log(fnA());

const arrowFnA = () => ({ arrowA: 5 });

console.log(arrowFnA());