import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import QRCode from "react-qr-code";
import { BarLoader } from "react-spinners";
const HomePage = ({ name, setName }) => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      }
    };
    return () => {
      getData();
      setLoading(false);
    };
  }, [currentUser]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <>
      {loading ? (
        <BarLoader color="#36d7b7" />
      ) : (
        <div>
          <h1></h1>
          <QRCode
            size={256}
            value={8777598611}
            className="w-[200px] h-[200px]"
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
