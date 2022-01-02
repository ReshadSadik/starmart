import { useState } from 'react';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { initializeAuthentication } from '../firebase/firebase.init';
initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  // sign in with google
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // sign out

  // signOut(auth)
  //   .then(() => {
  //     // Sign-out successful.
  //     setUser({});
  //   })
  //   .catch((error) => {
  //     setError(error.message);
  //   });

  return {
    /////
    googleSignIn,
    user,
    error,
  };
};

export default useFirebase;
