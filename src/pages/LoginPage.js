import React, { useState } from 'react'
import * as FormAxiosService from '../api/FormAxiosService'
import * as Validation from '../common/Validation';
import SignUpPage from './SignUpPage';
import InputComponent from '../components/InputComponent';
import { showErrorMsg } from '../common/Common';


const LoginPage = () => {

  const [loginData, setLoginData] = useState({ userName: '', password: '', confirmPassword: '' })
  const [showSignUpPage, setshowSignUpPage] = useState(false)

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
      console.error('Error occured while authenticating user : ', error);
      showErrorMsg("password", error.response.data.message);
    }
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setLoginData((e) => ({
      ...loginData,
      [name]: value
    }));
  }

  const loginHandle = (e) => {
    e.preventDefault();
    const isValidUserName = Validation.validateString(loginData.userName, 'userName', 'Username is not valid');
    const isValidPassword = Validation.validateString(loginData.password, 'password', 'Password is not valid');
    console.log("isValidUserName : ", isValidUserName);
    console.log("isValidPassword : ", isValidPassword);
    if(!isValidUserName || !isValidPassword) {
      return;
    }
    authenticateUser();
  }

  const switchPages = () => {
    setshowSignUpPage(!showSignUpPage);
  }

  if (showSignUpPage) {
    return <SignUpPage loginData={loginData} onChangeHandler={onChangeHandler} switchPages={switchPages} />
  }

  return (
    <>
      <form onSubmit={loginHandle}>
        <InputComponent
          type='text'
          placeholder='Username'
          name='userName'
          id='userName'
          onChange={(e) => onChangeHandler(e)}
        />
        <InputComponent 
          type='password'
          placeholder='Password'
          name='password'
          id='password'
          onChange={(e) => onChangeHandler(e)}
        />
        <button type='submit'>Login</button>
      </form>

      <div>
        <button name='signup' onClick={switchPages}>Sign Up</button>
      </div>
    </>

  )
}

export default LoginPage
