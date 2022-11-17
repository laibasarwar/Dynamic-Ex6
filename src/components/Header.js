import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";

function Header(setIsLoggedIn, setUserInformation) {
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  return (
    <nav>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/create">
        <p>CreateUser</p>
      </Link>
      <p onClick={() => logout()}>Log Out</p>
    </nav>
  );
}

export default Header;
