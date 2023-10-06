import { useContext, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "container" || e.target.id === "close") {
      navigate("/");
      //  setSign(true);
    }
  };
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal ? (
        <SignIn
          modal={modal}
          handleClose={handleClose}
          handleModal={handleModal}
        />
      ) : (
        <SignUp
          modal={modal}
          handleClose={handleClose}
          handleModal={handleModal}
        />
      )}
    </>
  );
};

export default AuthPage;
