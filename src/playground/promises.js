const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('resolved data');
    // resolve('other resolved data');
    reject('oopsie');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('Error:', error)
});

console.log('after');