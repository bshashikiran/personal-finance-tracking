import React, { useState } from 'react';
import * as FormAxiosService from '../api/FormAxiosService';
import * as Validation from '../common/Validation';
import SignUpPage from './SignUpPage';
import InputComponent from '../components/InputComponent';

const LoginPage = ({setIsAuthenticated}) => {
  const [loginData, setLoginData] = useState({ userName: '', password: '', confirmPassword: '' });
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const authenticateUser = async () => {
    try {
      const response = await FormAxiosService.authenticateUser(loginData);
      if (response != null && response !== '') {
        console.log(response);
        localStorage.setItem("authToken", response.authToken);
        localStorage.setItem("expiresIn", response.expiresIn);
        setIsAuthenticated(true);
      } else {
        console.log("Response is NULL while authenticating user");
      }
    } catch (error) {
      console.error('Error occurred while authenticating user : ', error);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginHandle = (e) => {
    e.preventDefault();
    const isValidUserName = Validation.validateString(loginData.userName, 'userName', 'Invalid Username');
    const isValidPassword = Validation.validateString(loginData.password, 'password', 'Invalid Password');
    if (!isValidUserName || !isValidPassword) {
      return;
    }
    authenticateUser();
  };

  const switchPages = () => {
    setShowSignUpPage(!showSignUpPage);
  };

  if (showSignUpPage) {
    return <SignUpPage loginData={loginData} onChangeHandler={onChangeHandler} switchPages={switchPages} setIsAuthenticated={setIsAuthenticated}/>;
  }

  return (
    <div className="container">
      <form className="mt-5" onSubmit={loginHandle}>
        <InputComponent
          type="text"
          placeholder="Enter your username"
          labelName="Username"
          name="userName"
          id="userName"
          onChange={onChangeHandler}
        />
        <InputComponent
          type="password"
          placeholder="Enter your password"
          labelName="Password"
          name="password"
          id="password"
          onChange={onChangeHandler}
        />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
      <div>
        <button className="btn btn-primary" name="signup" onClick={switchPages}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
