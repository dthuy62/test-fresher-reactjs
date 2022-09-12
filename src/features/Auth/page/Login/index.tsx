import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import oauthToken from "../../../../api/oauthToken";
import { Images } from "../../../../constants/images";
import { RouteList } from "../../../../constants/routes";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  console.log(error);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const token = await oauthToken();

      localStorage.setItem("token", token);
      localStorage.setItem("user", username);
      navigate(RouteList.home);
    } catch (err) {
      alert("Oppssss!! An error occurred!");
    }
  };


  // check logged
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to={RouteList.home} />;
  }

  return (
    <div className="login-page">
      <img className="login-page__bg" src={Images.BG_LOGIN} alt="bg-login" />
      <div className="login-page__container">
        <div className="form-login">
          <div className="form-login__header">
            <div className="header-title">Hello! welcome back</div>
            <div className="header-desc">Sign in to continue</div>
          </div>
          <div className="form-login__content">
            <div className="form-login__content-input">
              <div className="input-field">
              <label htmlFor="name" className="input-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="please add your username!"
                  onChange={handleChangeInput}
                />
                
              </div>
              <div>{error}</div>
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
