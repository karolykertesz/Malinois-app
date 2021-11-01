import React, { useState } from "react";
// import { useFetchMalisQuery } from "../reducers/mali.api.reducer";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="container">
      <div className="form-holder">
        <form>
          <div className="input-holder">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ""}
              test-data="email-input"
            />
          </div>
          <div className="input-holder">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass || ""}
              test-data="pass-input"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
