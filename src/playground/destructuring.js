// ==================================================
// ============== OBJECT DESTRUCTURING ==============
// ==================================================

// const person = {
//   name: 'Mandrew',
//   age: 36,
//   location: {
//     city: 'Chi-town',
//     temp: 16
//   }
// };

// const {name: firstName = 'Beni', age} = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ==================================================
// ============== ARRAY DESTRUCTURING ===============
// ==================================================

const address = ['1299 S Juniper Street', 'Philadelphia', , '19147'];
const [ , , state = 'Ohio' ] = address;
console.log(`You are in ${state}.`);

const item = ['Tea (ice)', '$2', '$2.5', '$2.75'];
const[ itemName = 'Tea' , , mprice = '$2.5'] = item;
console.log(`A medium ${itemName} costs ${mprice}`);