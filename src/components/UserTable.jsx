import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

const UserTable = () => {
  const { all } = useContext(AuthContext);
  console.log(all);
  return (
    <div>
      <ul>
        {all &&
          all.map((user, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-center gap-20 text-black"
              >
                <h1>{user.name}</h1>
                <h1>{user.phone}</h1>
                <button>Call Now</button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default UserTable;
