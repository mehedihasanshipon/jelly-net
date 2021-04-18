import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import Navbars from "../Home/Navbars/Navbars";


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const storeAuthToken = ()=> {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      sessionStorage.setItem('token',idToken);
      history.replace(from);
    }).catch(function(error) {
      // Handle error
    });
  }

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        storeAuthToken()

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <Navbars />
      <div style={{height:'400px'}} className="d-flex align-items-center justify-content-center">
        <div>
        <button onClick={handleGoogleSignIn} className="btn btn-primary">
          Google sign-in
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
