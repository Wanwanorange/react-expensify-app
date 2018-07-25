import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

//==============CHILD REMOVED, CHANGED, OR ADDED==============
// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log('Changed ', snapshot.val());
//   });

// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log('Added ', snapshot.val());
//   });
//=============================================================

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('Failed to update data', e);
//   });

// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//   const name = snapshot.val().name;
//   const { title, company } = snapshot.val().job;
//   console.log(name + ' is a ' + title + ' at ' + company);
// }, (e) => {
//   console.log('Error error ', e);
// });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error fetching data', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 10500);


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Fetching error', e);
//   });

// database.ref().set({
//   name: 'Mandrew',
//   age: 36,
//   stressLevel: 6,
//   job: {
//     title: 'hog wrangler',
//     company: 'Old MacDonald Farm'
//   },
//   location: {
//     city: 'Des Moines',
//     country: 'USA'
//   },
// }).then(() => {
//   console.log('Data saved');
// }).catch((e) => {
//   console.log('Error: ', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Pike Market',
//   'location/city': 'Seattle'
// });

// database.ref('location/city').set('Wichita');

// database.ref('attributes').set({
//   height: 174,
//   weight: 70
// }).then(() => {
//   console.log('Added height and weight');
// }).catch((e) => {
//   console.log('You tried it but: ', e);
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log(`Ain't no thang but a chick'n wang`);
//   })
//   .catch(() => {
//     console.log('Too bad so sad');
//   });
