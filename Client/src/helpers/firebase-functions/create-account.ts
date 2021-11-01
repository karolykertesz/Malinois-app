import { initApp } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createAccount = async (
  email: string,
  passsword: string,
  fn: Function,
  action: Function
) => {
  initApp();
  const auth = getAuth();
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      passsword
    );
    const { user } = credential;
    return {
      id: user.uid,
      email: user.email,
    };
  } catch (err: any) {
    console.log(err.code);
    const errMessage =
      err.code === "auth/email-already-in-use"
        ? "This email has been used Already!"
        : "Error during the registration";
    action(true);
    return fn({ type: "display_name", payload: errMessage });
  }
};
