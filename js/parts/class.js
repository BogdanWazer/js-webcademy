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

let user_profile = {
  username: '',
  photo: '',
  age: 0,
  __proto__: user,
};

user_profile.age = 25;
user_profile.username = 'Pupkin';
console.log(user_profile);

user.password = 'hello';
console.log(user.validatePassword());

class User {
  // username
  // password
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validatePassword() {
    if (this.password.length > 6) {
      return true;
    }
    return false;
  }
}
let ab = 'Ivan';
let bc = '777';

const person = new User(ab, bc);
console.log(person.validatePassword());

