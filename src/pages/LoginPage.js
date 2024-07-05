import React, { useState } from 'react'
import * as FormAxiosService from '../api/FormAxiosService'
import * as Validation from '../common/Validation';
import SignUpPage from './SignUpPage';
import InputComponent from '../components/InputComponent';


const LoginPage = () => {

  const [loginData, setLoginData] = useState({ userName: '', password: '', confirmPassword: '' })
  const [showSignUpPage, setshowSignUpPage] = useState(false)

  const authenticateUser = async () => {
    try {
      const response = await FormAxiosService.authenticateUser(loginData);
      if (response != null) {
        console.log(response);
      } else {
        console.log("Response is NULL while authenticating user");
      }
    } catch (error) {
      console.error('Error occured while authenticating user : ', error);
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
    const a = Validation.isString(loginData.userName, 'userName');
    console.log(a);
    if(!a) {
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
        <input
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
