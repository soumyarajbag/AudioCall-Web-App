import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Navbar = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  return (
    <>
      <div>
        {currentUser && (
          <div>
            {currentUser.email} + {currentUser.phone}
          </div>
        )}
        {currentUser != null && <button onClick={signOut}>Sign Out</button>}
      </div>
    </>
  );
};

export default Navbar;
