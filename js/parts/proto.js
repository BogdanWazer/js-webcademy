const objA = {
  a: 5,
  b: 7,
};

console.log('Real:', objA);

const objB = Object.create(objA);
console.log('Second:', objA);
console.log('B:', objB);

objB.y = 2;
console.log(objB);
console.log(objB.a);

const objC = Object.create(objB);

console.log(objC.a);
console.log('a:', objA.a);

console.log(objC.hasOwnProperty('a'));

const dummyObj = Object.create({ message: 'Prototype value' });
console.log('dummy', dummyObj);

console.log(dummyObj.message);
