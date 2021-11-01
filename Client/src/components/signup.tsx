import React, { useReducer, useState } from "react";
import { initialState, initialErrorState } from "../helpers/data/reducer-state";
import { userReducer } from "../helpers/data/reducer-functions";
import { errorReducer } from "../helpers/data/errors-reducer";
import { constraints } from "../validation/signup";
import { inputvalues } from "../helpers/data/input-values";

const Sign: React.FC = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [errors, errorDispatch] = useReducer(errorReducer, initialErrorState);
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                    <label htmlFor={values.name}>{values.label}</label>
                    <input
                      type={values.type}
                      id={values.name}
                      name={values.name}
                      placeholder={values.place}
                      maxLength={values.name === "area_code" ? 5 : 200}
                      minLength={values.name === "area_code" ? 4 : 3}
                      onChange={(e) =>
                        dispatch({ type: values.name, payload: e.target.value })
                      }
                      value={v}
                    />
                  </div>
                  <div className="error">
                    {errrorValues}
                    hh
                  </div>
                </div>
              );
            })}
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
