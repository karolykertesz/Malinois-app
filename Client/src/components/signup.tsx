import React, { useReducer, useState } from "react";
import { initialState, initialErrorState } from "../helpers/data/reducer-state";
import { userReducer } from "../helpers/data/reducer-functions";
import { errorReducer } from "../helpers/data/errors-reducer";
import { inputvalues } from "../helpers/data/input-values";
import validate from "validate.js";
import { constraints } from "../validation/signup";
import { createAccount } from "../helpers/firebase-functions/create-account";
import { Link } from "react-router-dom";
import { ReactComponent as Image } from "../svg/image.svg";
import { Dropzone } from "./dropzone";

const Sign: React.FC = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [errors, errorDispatch] = useReducer(errorReducer, initialErrorState);
  const [errorActive, setActive] = useState(true);
  console.log(state);
  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    errorDispatch({ type: "reset", payload: "" });
    setActive(true);
    const value = await validate(
      { area_code: +state.area_code, ...state },
      constraints
    );

    if (value) {
      return Object.entries(value).map((i: any) => {
        const [name, val] = i;
        return errorDispatch({
          type: name,
          payload: val.join().replace(" ", ",").split(",").slice(1).join(", "),
        });
      });
    }

    setActive(false);
    // const user = await createAccount(
    //   state.email,
    //   state.password,
    //   errorDispatch,
    //   setActive
    // );
    // dispatch({ type: "reset", payload: "" });
    // errorDispatch({
    //   type: "display_name",
    //   payload: `We sent the activation email to ${state.email}`,
    // });
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="form-container">
        <div className="form">
          <form onSubmit={formSubmit}>
            {inputvalues.map((values) => {
              const v = state[`${values.name}`];
              let errrorValues = errors[`${values.name}`];
              return (
                <div className="input-holder">
                  <div className="form-input" key={values.name}>
                    <label htmlFor={values.name}>{`${values.label}*`}</label>
                    <input
                      type={values.type}
                      id={values.name}
                      name={values.name}
                      placeholder={values.place}
                      maxLength={values.name === "area_code" ? 5 : 200}
                      minLength={values.name === "area_code" ? 4 : 1}
                      onChange={(e) =>
                        dispatch({ type: values.name, payload: e.target.value })
                      }
                      value={v}
                    />
                  </div>
                  <div
                    className={errorActive ? "error" : "succes"}
                    style={{ textAlign: "center" }}
                  >
                    {errrorValues}
                  </div>
                </div>
              );
            })}
            <div className="form-input image-input">
              <label htmlFor="img">Upload Your image</label>
              <Dropzone fn={dispatch} ative={errorDispatch} setter={setActive}>
                {!state.image_url ? <Image /> : <img src={state.image_url} />}
              </Dropzone>
            </div>
            <div className="signup_button">
              <button type="submit">send</button>
            </div>
          </form>
          <div className="login-comp">
            <Link to="/">Or login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
