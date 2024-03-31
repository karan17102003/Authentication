import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppTemplate from "./components/AppTemplate";
import app from './fireBaseInitialization'
import Register from "./components/Register";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const auth = getAuth();

  function createUser(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        alert("User Registered");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  function userSignIn(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSignedIn(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function userSignOut(auth) {
    signOut(auth)
      .then(() => {
        setSignedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTemplate />}>
          <Route
            path=""
            element={
              signedIn === false ? (
                <Register btnType="Login" btnAction={userSignIn} />
              ) : (
                <button className="btn"
                  onClick={() => {
                    userSignOut(auth);
                  }}
                >
                  Logout
                </button>
              )
            }
          />
          <Route
            path="register"
            element={
              <Register btnType="Register" btnAction={createUser} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;