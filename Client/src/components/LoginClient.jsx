import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(null);
  const [loggedIn, setLogedIn] = useState(false);

  const handleSubmit = (e) => {
    const dispatch = useDispatch;

    e.preventDefault();
    return async function () {
      const user = await axios.post("/api/post", {
        email,
        password,
      });
    };
  };
  return (
    <div className="ui container">
      <h2 className="ui header centered">Welcome</h2>
      <form onSubmit={handleSubmit} className="ui form formItem">
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <input type="submit" value="Login" className="ui button fluid" />
        </div>
        <button className="ui google plus button fluid">
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginClient;
