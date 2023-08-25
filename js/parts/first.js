// returns

function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function doSomething(func) {
  let x = 10;
  let y = 15;
  let result = func(x, y);
  console.log(result);
}

doSomething(summ);

// Self-call IIFE

let res = (function (a, b) {
  return a + b;
})(4, 5);

console.log(res);

