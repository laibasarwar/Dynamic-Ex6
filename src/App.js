import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./App.css";
import React from "react";

import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
// import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyDUxTjaE8fLD1woMlMnPBUbiIlmSql2caA",
  authDomain: "exercise-six-32526.firebaseapp.com",
  projectId: "exercise-six-32526",
  storageBucket: "exercise-six-32526.appspot.com",
  messagingSenderId: "906927206491",
  appId: "1:906927206491:web:4d3e5b137528a4cb220f7e",
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else {
          setUserInformation({});
          setIsLoggedIn(false);
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserProfilePage
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          userInformation={userInformation}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/login",
      element: (
        <LoginPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
    {
      path: "/create",
      element: (
        <CreateUserPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
