export const configFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyD-JAo6BpfUQ9YTq6s9OHlfN_ajKT0GmIA',
    authDomain: 'donalo-pe.firebaseapp.com',
    databaseURL: 'https://donalo-pe.firebaseio.com',
    projectId: 'donalo-pe',
    storageBucket: 'donalo-pe.appspot.com',
    messagingSenderId: '416941802813',
    appId: '1:416941802813:web:3755ee81dcc55322'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};