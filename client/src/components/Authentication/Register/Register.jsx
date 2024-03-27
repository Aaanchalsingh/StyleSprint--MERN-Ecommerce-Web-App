import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("https://style-sprint-mern-ecommerce-web-app.vercel.app/Register", user)
      .then((res) => {
        const token = res.data.token;
        if (token) {
          localStorage.setItem("token", token);
        }

        navigate("/");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  // eslint-disable-next-line
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/account/login");
  };

  return (
    <center>
      <div className="flex flex-col max-w-md px-4 py-8 rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 m-4">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to="/account/login"
            className="text-sm text-blue-500  hover:text-blue-700"
          >
            &nbsp; Sign in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form action="#">
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudoo"
                  name="fullname"
                  value={user.fullname}
                  onChange={handleChange}
                  placeholder="fullname"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  placeholder="username"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  id="create-account-email"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button type="button" onClick={register}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
};

export default Register;
