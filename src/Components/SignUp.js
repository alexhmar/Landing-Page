import { useSelector, useDispatch } from "react-redux";

const SignUp = ({ validate }) => {
  const dispatch = useDispatch();
  const { signup } = useSelector((state) => state.SignUpThanks);

  return (
    <div id="sign_up">
      <div id="sign_upFlex">
        <h2>Sign up for free Ebook!</h2>
        <p className="pText">Username</p>
        <input className="input" type="text" id="username" />
        <p className="pText">Email</p>
        <input className="input" type="email" id="email" />
        <p className="pText">Password</p>
        <input className="input" type="password" id="password1" />
        <p className="pText">Confirm password</p>
        <input className="input" type="password" id="password2" />
        <span id="confirm_span">
          <input type="radio" id="agree" />
          by signing up you agree to receive emails about our latest news and
          products
        </span>
        <button
          id="signUpBtn"
          type="submit"
          onClick={() => dispatch(validate())}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
