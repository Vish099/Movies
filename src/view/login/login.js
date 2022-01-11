import React, { useState, useEffect } from "react";
import "./login.css";
// import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [active, setActive] = useState(false);
  const [LoginDetails, setLoginDetails] = useState({
email :"",
password:""
  })
  const [SignUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
    phoneNum: "",
  });


  const navigate = useNavigate();

  function right() {
    setActive(true);
  }

  function left() {
    setActive(false);
  }

  function StoreSignUp(e) {
 if(!SignUp.username || !SignUp.email || !SignUp.phoneNum || !SignUp.password){
  toast.error("Fields marked with * are required to fill")
  e.preventDefault();
 }else{
  localStorage.setItem("userName",SignUp.username)
  localStorage.setItem("userMail",SignUp.email)
  localStorage.setItem("userPass",SignUp.password)
  localStorage.setItem("userNum",SignUp.phoneNum)
  window.location.reload();
  toast.success("Sign Up successfully")
  e.preventDefault();
 }
  }


function LoginSuccess(e) {
    
    if(LoginDetails.email === localStorage.getItem("userMail") && LoginDetails.password === localStorage.getItem("userPass") ){
  navigate("/home")
  toast.success("Login successfully")
    }else{
        toast.error("Wrong Credentials")
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
          <form>
            <h3>Sign In</h3>
            <input type="text" placeholder="Username" onChange={(e) => setLoginDetails({...LoginDetails,email: e.target.value})}  />
            <input type="password" placeholder="Password" onChange={(e) => setLoginDetails({...LoginDetails,password: e.target.value})} />
            <input
              type="submit"
              value="Login"
              onClick={LoginSuccess}
            />
            <a href="h" className="forgot">
              Forgot Password{" "}
            </a>
          </form>
        </div>

        <div className={`form Nsignedform ${active ? "check" : ""}`}>
          <form>
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
              placeholder="Email Address *"
              autoComplete="new-mail"
              onChange={(e) => setSignUp({ ...SignUp, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone Number *"
              autoComplete="new-num"
              onChange={(e) =>
                setSignUp({ ...SignUp, phoneNum: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password *"
              autoComplete="new-pass"
              onChange={(e) =>
                setSignUp({ ...SignUp, password: e.target.value })
              }
            />
            <input type="submit" value="Register" onClick={StoreSignUp} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
