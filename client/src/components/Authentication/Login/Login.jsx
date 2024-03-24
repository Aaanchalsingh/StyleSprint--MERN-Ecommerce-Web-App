import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [containerClass, setContainerClass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setLoginError("");
    setSignupError("");
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://shop-backend-nu.vercel.app/Register",
        user
      );
      console.log(res.data.message);
      if (res.data.message === "User already exists") {
        setSignupError("User already exists");
        setUser({
          ...user,
          email: "",
          password: "",
          fullname: "",
          username: "",
        });
      } else {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      setSignupError("Wrong credentials. Please try again.");
      setUser({
        ...user,
        email: "",
        password: "",
        fullname: "",
        username: "",
      });
    }
  };
  // eslint-disable-next-line
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/account/login");
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://shop-backend-nu.vercel.app/Login",
        user
      );
      console.log(res.data);
      if (res.data === "not registered") {
        setLoginError("Invalid credentials");
        setUser({
          ...user,
          email: "",
          password: "",
        });
      } else {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      setLoginError("Wrong credentials. Please try again.");
      setUser({
        ...user,
        email: "",
        password: "",
      });
    }
  };

  const toggleForm = (formType) => {
    setIsActive(false);
    setContainerClass(formType === "login" ? "active" : "log-in");
    setUser({
      email: "",
      password: "",
    });
    setLoginError("");
    setSignupError("");

  };

  return (
    <div className={`login-form-body ${containerClass}`}>
      <div className={`login-form-container ${containerClass}`}>
        <div className={`box ${isActive ? "active" : ""}`}></div>
        <div className="container-forms">
          <div className="container-info">
            <div className="info-item">
              <div className="table">
                <div className="table-cell">
                  <p>Have an account?</p>
                  <div className="btn" onClick={() => toggleForm("login")}>
                    Log in
                  </div>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="table">
                <div className="table-cell">
                  <p>Don't have an account?</p>
                  <div className="btn" onClick={() => toggleForm("signup")}>
                    Sign up
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`container-form ${
              containerClass === "log-in" ? "log-in" : ""
            }`}
          >
            <div className="form-item">
              <div className="table">
                <div className="table-cell">
                  {containerClass !== "log-in" ? (
                    <>
                      <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={user.email}
                        onChange={handleChange}
                      />
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                      {loginError && (
                        <p className="error text-red-600 ml-12">
                          *{loginError}
                        </p>
                      )}
                      <div className="btn" onClick={login}>
                        Log in
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        name="fullname"
                        placeholder="Full Name"
                        type="text"
                        value={user.fullname}
                        onChange={handleChange}
                      />
                      <input
                        name="username"
                        placeholder="Username"
                        type="text"
                        value={user.username}
                        onChange={handleChange}
                      />
                      <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={user.email}
                        onChange={handleChange}
                      />
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                      {signupError && (
                        <p className="error text-red-600 ml-12">
                          *{signupError}
                        </p>
                      )}
                      <div className="btn" onClick={register}>
                        Sign up
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
