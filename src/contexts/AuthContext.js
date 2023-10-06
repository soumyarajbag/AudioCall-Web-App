import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [all, setAll] = useState([]);
  const getAll = async () => {
    let list = [];
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
    setAll(list);
  };

  const getCurrentUser = async (userId) => {
    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        setCurrentUser(userDoc.data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = () => {
    sessionStorage.clear();
    auth.signOut();
    setCurrentUser(null);
  };
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user && user.uid) {
        getCurrentUser(user.uid);
      } else signOut();
    });

    return () => {
      unsub();
      getAll();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, signOut, all }}>
      {children}
    </AuthContext.Provider>
  );
};
