const counter = {
  value: 0,
  increment(value) {
    // console.log(`Increment value -> this`, this);
    this.value += 1;
  },
  decrement(value) {
    // console.log(`Decrement value -> this`, this);
    this.value -= 1;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  console.log('Decrement Click!');

  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('Increment Click!');

  counter.increment();
  console.log(counter);

  valueEl.textContent = counter.value;
});
