import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleActive = () => {
    setIsActive(true);
  };

  return (
    <div className={`container-form ${isLoggedIn ? "log-in" : ""}`}>
      <div className="container-info">
        <div className="info-item">
          <div className="table">
            <div className="table-cell">
              <p>Have an account?</p>
              <div className="btn" onClick={toggleLogin}>
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="info-item">
          <div className="table">
            <div className="table-cell">
              <p>Don't have an account?</p>
              <div className="btn" onClick={toggleLogin}>
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-forms">
        <div className="container-form">
          <div className={`form-item ${isLoggedIn ? "log-in" : "sign-up"}`}>
            <div className="table">
              <div className="table-cell">
                <input
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  type="email"
                />
                <input
                  name="password"
                  placeholder="Password"
                  type="Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <div className="btn" onClick={toggleActive}>
                  Log in
                </div>
              </div>
            </div>
          </div>
          <div className={`form-item ${isLoggedIn ? "sign-up" : "log-in"}`}>
            <div className="table">
              <div className="table-cell">
                <input name="email" placeholder="Email" type="text" />
                <input name="fullName" placeholder="Full Name" type="text" />
                <input name="Username" placeholder="Username" type="text" />
                <input name="Password" placeholder="Password" type="Password" />
                <div className="btn" onClick={toggleActive}>
                  Sign up
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
