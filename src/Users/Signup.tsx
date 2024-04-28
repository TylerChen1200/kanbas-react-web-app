import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./Users.css";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="sign-container">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input className = "input" value={user.username} placeholder="Username" onChange={(e) => setUser({
          ...user, username: e.target.value })} />
      <input className = "input" value={user.password} placeholder="Password" onChange={(e) => setUser({
          ...user, password: e.target.value })} />
      <button className="sign-button" onClick={signup}> Sign up </button>
      <button className="sign-button" onClick={() => navigate("/Kanbas/Account/Signin")}>Sign in</button>
    </div>
  );
}

