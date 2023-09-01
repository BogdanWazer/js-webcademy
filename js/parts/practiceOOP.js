const CounterPlagin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._rootSelector = rootSelector;
  this._value = initialValue; // private
  this._step = step;
};

CounterPlagin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlagin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter = new CounterPlagin({ rootSelector: '#counter-1', step: 10 });
console.log(counter);

const counter2 = new CounterPlagin({ rootSelector: '#counter-2', step: 2 });
console.log(counter2);
