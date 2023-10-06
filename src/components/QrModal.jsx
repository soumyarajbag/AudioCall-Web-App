import React from "react";
import { useContext } from "react";
import QRCode from "react-qr-code";
import { AuthContext } from "../contexts/AuthContext";

const QrModal = ({ number }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <div className="flex flex-col items-center gap-8">
        <QRCode size={256} value={number} className="w-[200px] h-[200px]" />
        <h1 className="font-semibold text-xl">{number}</h1>
      </div>
    </div>
  );
};

export default QrModal;
