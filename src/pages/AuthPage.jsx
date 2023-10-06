import { useContext, useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {modal ? (
        <SignIn modal={modal} handleModal={handleModal} />
      ) : (
        <SignUp modal={modal} handleModal={handleModal} />
      )}
    </>
  );
};

export default AuthPage;
