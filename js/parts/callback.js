const fnA = function (message, callback) {
  console.log(message);

  console.log(callback);
};

const fnB = function () {
  console.log('fnB');
};

fnA('Hello!', fnB);
