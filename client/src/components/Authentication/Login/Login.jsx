import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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

  return (
    <center>
      <div class="login-boxx">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <Link to="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link>
        </form>
      </div>
    </center>
  );
};

export default Login;
