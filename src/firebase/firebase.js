import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBJbX6y7FDt7w2CG8vftWKhNKFYBqGABII",
    authDomain: "expensify-b7db4.firebaseapp.com",
    databaseURL: "https://expensify-b7db4.firebaseio.com",
    projectId: "expensify-b7db4",
    storageBucket: "expensify-b7db4.appspot.com",
    messagingSenderId: "982624963393"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id : childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });



// database.ref('notes/-LYAaap5RC2aMMwH6fyw').remove();


// database.ref('expenses').push({
//     description: 'ya bro got poptarts',
//     note: 'are u on deck with the tarts?',
//     amount: 20,
//     createdAt: 'now'
// });

// database.ref('expenses').push({
//     description: 'bought poptarts',
//     note: 'they were limited edition red velvet',
//     amount: 220,
//     createdAt: 'yesterday'
// });

// database.ref('expenses').push({
//     description: 'ate the tarts with a gold plate',
//     note: 'worth',
//     amount: 2500,
//     createdAt: 'currently'
// });

// database.ref('notes').push({
//     title: 'Poptarts',
//     body: 'alright'
// });

// const firebaseNotes = {
//     notes: {
//         dsdafDF: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         sdfsdfasfd: {
//             title: 'Second note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: 12,
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: 52,
//     title: 'Second note',
//     body: 'This is my note'
// }, {
//     id: 64,
//     title: 'Third note',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const res = snapshot.val();
//     console.log(`${res.name} is a ${res.job.title} at ${res.job.company}`);
// });

// setTimeout(() => {
//     database.ref('job/title').set('Senior Software Developer')
// }, 3500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('stressLevel').set(6)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref().set(3)
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })



// database.ref().set({
//     name: 'Tyler Mok',
//     age: 26,
//     stressLevel: 4,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'California',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log(error);
// });

// database.ref('isSingle').set(null);

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().update({
//    age: 18,
//    job: 'Software developer',
//    isSingle: null 
// })

// database.ref('isSingle').remove()
    // .then(() => {
    //     console.log('Data was removed');
    // }).catch((e) => {
    //     console.log (e);
    // });