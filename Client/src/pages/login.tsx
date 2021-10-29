import React, { useState } from "react";
import { useFetchMalisQuery } from "../reducers/mali.api.reducer";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  // const { data = [] } = useFetchMalisQuery();
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
            />
          </div>
          <div className="input-holder">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={password || ""}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
