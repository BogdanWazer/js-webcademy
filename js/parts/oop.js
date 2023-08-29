const Car = function ({ brand, model, price } = {}) {
  // визивается в контексте созданного обьекта
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi ->', this);
  console.log('hello!');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car.prototype);

const myCar = new Car({ brand: 'BMW', model: 'M5', price: '57000' });
console.log(myCar);

myCar.sayHi();

const myCar2 = new Car({
  brand: 'Audi',
  model: 'Q8',
  price: '37000',
});
myCar2.changePrice(10000);
console.log(myCar2);

// если через new - создается пустой обьект
const myCar3 = new Car();
console.log(myCar3);

const User = function ({ email, password }) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

const mango = new User({ email: 'mango@gmail.com', password: 'kbv052114' });
mango.changeEmail('mango2@gmail.com');
console.log(mango);
