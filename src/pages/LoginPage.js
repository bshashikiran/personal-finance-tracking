import React, { useState } from 'react';
import * as FormAxiosService from '../api/FormAxiosService';
import * as Validation from '../common/Validation';
import SignUpPage from './SignUpPage';
import InputComponent from '../components/InputComponent';
import { showErrorMsg } from '../common/Common';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ userName: '', password: '', confirmPassword: '' });
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const authenticateUser = async () => {
    try {
      const response = await FormAxiosService.authenticateUser(loginData);
      if (response != null && response.status === 200) {
        console.log(response);
        showErrorMsg("password", response.message);
      } else {
        console.log("Response is NULL while authenticating user");
      }
    } catch (error) {
      console.error('Error occurred while authenticating user:', error);
      if (error != null && error.response && error.response.data.status === 404) {
        showErrorMsg("userName", error.response.data.message);
      } else {
        showErrorMsg("password", error.response.data.message);
      }
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
    return <SignUpPage loginData={loginData} onChangeHandler={onChangeHandler} switchPages={switchPages} />;
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
