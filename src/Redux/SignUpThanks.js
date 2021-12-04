import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";

export const SignUpThanks = createSlice({
  name: "SignUpThanks",
  initialState: { signup: false },
  reducers: {
    validate: (state) => {
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let password1 = document.getElementById("password1").value;
      let password2 = document.getElementById("password2").value;
      let agree = document.getElementById("agree");
      let myRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      if (username == null || username === "") {
        alert("please enter username");
        return false;
      }
      if (!validator.isEmail(email)) {
        alert("email must be valid");
        return false;
      }
      if (!password1.match(myRegex)) {
        alert(
          "password must be at least 8 characters long and contain at least one lowercase,uppercase,number and special character"
        );
        return false;
      }
      if (password2 !== password1) {
        alert("passwords must match");
        return false;
      }
      if (agree.checked !== true) {
        alert("you must agree to sign up");
        return false;
      }
      state.signup = !state.signup;

      if (state.signup === true) {
        window.location.assign(window.location.href + "thankyou");
      }
    },
  },
});

export const { validate } = SignUpThanks.actions;

export default SignUpThanks.reducer;
