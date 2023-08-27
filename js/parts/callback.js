// const fnA = function (parameter) {
//   const innerVariable = 'inner';

//   const innerFunction = function () {
//     console.log(innerVariable);
//     console.log('innerFunction');
//   };
//   return innerFunction;
// };

// const fnB = fnA();

// fnB();
// console.log(fnB);

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };

//   return makeDish;
// };

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// console.dir(mango);

// mango('Pirozhok');
// poly('Tea');

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

const rounder = (number, places) => Number(number.toFixed(places));
console.log(rounder(5.231413, 3));

const secondRounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};
const secondRounder3 = secondRounder(3);
const secondRounder4 = secondRounder(4);

console.log(secondRounder3(1.51234123));

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      salary += amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Current ZP ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);
console.log(salaryManager.current());

const obj = {
  salary: 400,
};

obj.salary = 1000;
console.log(obj);


