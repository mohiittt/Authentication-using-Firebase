import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCreadentials) => {
        console.log(userCreadentials);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={createAccount}>
        <h1>Create a New Account</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
