import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBsgEOWdHLEWnmuk8lFufyIGJ9K9CbYwXw',
  authDomain: 'vuetest-4ec7a.firebaseapp.com',
  databaseURL: 'https://vuetest-4ec7a.firebaseio.com',
  projectId: 'vuetest-4ec7a',
  storageBucket: 'vuetest-4ec7a.appspot.com',
  messagingSenderId: '528580227448',

};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
