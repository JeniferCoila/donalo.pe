/* export const btnGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    const token = result.credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('google funciona aqui');
    const email = error.email;
    const credential = error.credential;
    if (errorCode === 'auth/account-exists-with-different-credential') {
      console.log('Estas usando la misma cuenta');
    }
  });
}; */