class Car1 {}
const carInstance = new Car1();

console.dir(Car1);

console.log(carInstance);

let a = { text: 'Hello!', color: 'red' };

let b = {
  fontSize: '24px',
  __proto__: a,
};

b.text = 'two';

console.dir(b.text);

/* 
	User 
*/

let user = {
  login: '',
  password: '',
  validatePassword: function () {
    if (this.password.length > 6) {
      return true;
    } else {
      return false;
    }
  },
};

user.password = 'hello';

console.log(user.validatePassword())