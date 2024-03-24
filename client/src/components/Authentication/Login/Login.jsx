import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [containerClass, setContainerClass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://shop-backend-three.vercel.app/Login",
        user
      );
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const toggleForm = (formType) => {
    setIsActive(false);
    setContainerClass(formType === "login" ? "active" : "log-in");
    setUser({
      email: "",
      password: "",
      fullName: "",
      username: "",
    });
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
                      <div className="btn" onClick={login}>
                        Log in
                      </div>
                    </>
                  ) : (
                    <>
                      <input
                        name="fullName"
                        placeholder="Full Name"
                        type="text"
                        value={user.fullName}
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
                      <div className="btn" onClick={login}>
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
