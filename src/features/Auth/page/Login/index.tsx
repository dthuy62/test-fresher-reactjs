import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import oauthToken from "../../../../api/oauthToken";
import { Images } from "../../../../constants/images";
import { RouteList } from "../../../../constants/routes";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };
  const handleSubmit = async () => {
    try {
      const token = await oauthToken()

      localStorage.setItem('token', token)
      localStorage.setItem("user", username);
      navigate(RouteList.home);
    } catch (e) {
      alert("Oppssss!! An error occurred!");
    }
  };

  // check logged
  const user = localStorage.getItem('user');
  if (user) {
    return <Navigate to={RouteList.home} />
  }

  return (
    <div className="login-page">
      <img className="login-page__bg" src={Images.BG_LOGIN} alt="bg-login" />
      <div className="login-page__container">
        <div className="form-login">
          <div className="form-login__header">
            <div>Hello! welcome back</div>
            <div>Sign in to continue</div>
          </div>
          <div className="form-login__content">
            <div className="form-login__content-input">
              <div className="input-label">Username</div>
              <div className="input-field">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="username"
                  onChange={handleChangeInput}
                />
              </div>
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
