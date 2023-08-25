// Loops

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

const autoBrands = ['Audi', 'Mazda', 'Toyota'];
autoBrands.push('Infinity');
// for (let i = 0; i <= autoBrands.length - 1; i++) {
//   console.log(autoBrands[i]);
// }

// for (let item of autoBrands) {
//   console.log(item);
// }

// autoBrands.forEach(function (item, i) {
//   console.log(`${item} => ${i}`);
// });

autoBrands.forEach((brand, i) => {
  console.log(`${brand} => ${i}`);
});
