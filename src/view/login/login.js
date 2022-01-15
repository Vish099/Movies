import React, { useState, useEffect } from "react";
import "./login.css";
// import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye } from "react-icons/ai";

function Login() {
  const [active, setActive] = useState(false);
  const [LoginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [SignUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
    phoneNum: "",
  });
  const [visible, setvisible] = useState(false);
  const [visibleTwo, setvisibleTwo] = useState(false);

  const navigate = useNavigate();

  function right() {
    setActive(true);
  }

  function left() {
    setActive(false);
  }

  function Refresh() {
    window.location.reload();
  }

  function StoreSignUp(e) {
    if (
      !SignUp.username ||
      !SignUp.email ||
      !SignUp.phoneNum ||
      !SignUp.password
    ) {
      toast.error("Fields marked with * are required to fill");
      e.preventDefault();
    } else {
      localStorage.setItem("userName", SignUp.username);
      localStorage.setItem("userMail", SignUp.email);
      localStorage.setItem("userPass", SignUp.password);
      localStorage.setItem("userNum", SignUp.phoneNum);
      toast.success("Sign Up successfully");
      setTimeout(Refresh, 3000);
      e.preventDefault();
    }
  }

  function LoginSuccess(e) {
    if (
      LoginDetails.email === localStorage.getItem("userMail") &&
      LoginDetails.password === localStorage.getItem("userPass")
    ) {
      navigate("/home");
      toast.success("Login successfully");
    } else {
      toast.error("Wrong Credentials");
    }
    e.preventDefault();
  }

  return (
    <div className="container">
      {active ? (
        <Helmet
          bodyAttributes={{
            style:
              "background-color :#f43648;display:flex; justify-content: center;align-items: center;min-height: 100vh;transition: 0.5s;",
          }}
        />
      ) : (
        <Helmet
          bodyAttributes={{
            style:
              "background-color :#03a9f4;display:flex; justify-content: center;align-items: center;min-height: 100vh;transition: 0.5s; ",
          }}
        />
      )}

      <div className="Bluebg">
        <div className="box signed">
          <h2>Already Have An Account ?</h2>
          <button className="signedbtn" onClick={left}>
            {" "}
            Sign in
          </button>
        </div>

        <div className="box Nsigned">
          <h2>Don't Have An Account ?</h2>
          <button className="Nsignedbtn" onClick={right}>
            {" "}
            Sign up
          </button>
        </div>
      </div>

      <div id="first" className={`formBx ${active ? "check" : ""}`}>
        <div id="second" className={`form signedform ${active ? "check" : ""}`}>
          <form autoComplete="null">
            <h3>Sign In</h3>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setLoginDetails({ ...LoginDetails, email: e.target.value })
              }
            />
            <input
              type={!visible ? "password" : "text"}
              style={{ position: "relative" }}
              placeholder="Password"
              onChange={(e) =>
                setLoginDetails({ ...LoginDetails, password: e.target.value })
              }
            />
            <AiFillEye
              style={{ position: "absolute", top: "180px", right: "70px" }}
              onClick={() => setvisible(!visible)}
            />
            <input type="submit" value="Login" onClick={LoginSuccess} />
          </form>
        </div>

        <div className={`form Nsignedform ${active ? "check" : ""}`}>
          <form autoComplete="off">
            <h3>Sign Up</h3>
            <input
              type="text"
              placeholder="Username *"
              autoComplete="new-user"
              onChange={(e) =>
                setSignUp({ ...SignUp, username: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone Number *"
              autoComplete="new-mail"
              onChange={(e) =>
                setSignUp({ ...SignUp, phoneNum: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Email Address *"
              autoComplete="off"
              onChange={(e) => setSignUp({ ...SignUp, email: e.target.value })}
            />
            <input
              type={visibleTwo ? "text" : "password"}
              placeholder="Password *"
              autoComplete="on"
              onChange={(e) =>
                setSignUp({ ...SignUp, password: e.target.value })
              }
              style={{position:"relative"}}
            />
              <AiFillEye
              style={{ position: "absolute", top: "310px", right: "70px" }}
              onClick={() => setvisibleTwo(!visibleTwo)}
            />
            <input type="submit" value="Register" onClick={StoreSignUp} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
