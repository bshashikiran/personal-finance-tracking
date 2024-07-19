import React, { useState } from 'react'
import * as FormAxiosService from '../api/FormAxiosService'
import * as Validation from '../common/Validation';
import SignUpPage from './SignUpPage';
import InputComponent from '../components/InputComponent';
import { showErrorMsg } from '../common/Common';

const LoginPage = ({ setIsAuthenticated }) => {

  const [loginData, setLoginData] = useState({ userName: '', password: '', confirmPassword: '' })
  const [showSignUpPage, setshowSignUpPage] = useState(false)

  const authenticateUser = async () => {
    try {
      const response = await FormAxiosService.authenticateUser(loginData);
      if (response != null && response.status === 200) {
        console.log(response);
        showErrorMsg("password", response.message);
        setIsAuthenticated(true);
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
    const isValidUserName = Validation.validateString(loginData.userName, 'userName', 'Invalid Username');
    const isValidPassword = Validation.validateString(loginData.password, 'password', 'Invalid Password');
    console.log("isValidUserName : ", isValidUserName);
    console.log("isValidPassword : ", isValidPassword);
    if (!isValidUserName || !isValidPassword) {
      return;
    }
    authenticateUser();
  }

  const switchPages = () => {
    setshowSignUpPage(!showSignUpPage);
  }

  if (showSignUpPage) {
    return <SignUpPage loginData={loginData} onChangeHandler={onChangeHandler} switchPages={switchPages} setIsAuthenticated={setIsAuthenticated} />
  }

  return (
    <>
      <div className='container'>
        <form className='mt-5' onSubmit={loginHandle}>
          <InputComponent
            type='text'
            placeholder='Enter your username'
            labelName='Username'
            name='userName'
            id='userName'
            onChange={(e) => onChangeHandler(e)}
          />
          <InputComponent
            type='password'
            placeholder='Enter your password'
            labelName='Password'
            name='password'
            id='password'
            onChange={(e) => onChangeHandler(e)}
          />
          <button className='btn btn-primary' type='submit'>Login</button>
        </form>

        <div>
          <button className='btn btn-primary' name='signup' onClick={switchPages}>Sign Up</button>
        </div>
      </div>
    </>

  )
}

export default LoginPage
