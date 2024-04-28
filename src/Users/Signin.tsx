import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./Users.css";

export default function Signin() {
  const initialUserState: User = {
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER"
  };

  const [credentials, setCredentials] = useState<User>(initialUserState);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, username: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };

  return (
    <div className="sign-container">
      <h1>Signin</h1>
      <input 
        className="input"
        value={credentials.username} 
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input 
        className="input"
        value={credentials.password} 
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button className="sign-button" onClick={signin}>Sign in</button>
      <button className="sign-button" onClick={() => navigate("/Kanbas/Account/Signup")}>Sign up</button>
    </div>
  );
}