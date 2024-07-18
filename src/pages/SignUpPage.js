import React, { useCallback, useEffect, useState } from 'react'
import * as FormAxiosService from '../api/FormAxiosService'
import InputComponent from '../components/InputComponent';
import { showErrorMsg } from '../common/Common';
import * as Validation from '../common/Validation';

const SignUpPage = ({ loginData, onChangeHandler, switchPages }) => {

    const [isPasswordMatch, setIsPasswordMatch] = useState(false);

    const handlePassword = useCallback(() => {
        if (loginData.password === loginData.confirmPassword) {
            console.log("Password Matches");
            setIsPasswordMatch(true);
        } else {
            console.log("Password doesnot match");
            setIsPasswordMatch(false);
        }
    }, [loginData.password, loginData.confirmPassword]);

    useEffect(() => {
        console.log("Password Changed");
        handlePassword();
    }, [handlePassword, loginData.password, loginData.confirmPassword]);

    const saveUser = async () => {
        try {
            const response = await FormAxiosService.saveUser(loginData);
            if(response != null && response.status === 200) {
                console.log("User record saved successfully");
                showErrorMsg("confirmPassword", response.message);
            } else {
                console.log("Response is NULL while saving user record");
            }
        } catch (error) {
            console.error('Error occured while saving user record : ', error);
            showErrorMsg("confirmPassword", error.response.data.message);
        }
    }

    const signUpHandle = (e) => {
        e.preventDefault();
        const isValidUserName = Validation.validateString(loginData.userName, 'userName', 'Username is not valid');
        const isValidPassword = Validation.validateString(loginData.password, 'password', 'Password is not valid');
        console.log("isValidUserName : ", isValidUserName);
        console.log("isValidPassword : ", isValidPassword);
        if (!isValidUserName || !isValidPassword) {
            return;
        }
        saveUser();
    }

    return (
        <>
            <form onSubmit={signUpHandle}>
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
                <InputComponent 
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    onChange={(e) => onChangeHandler(e)}
                />
                <button type='submit' id='signup' disabled={!isPasswordMatch}>Sign Up</button>
            </form>

            <div>
                <button name='login' onClick={switchPages}>Login</button>
            </div>
        </>
    )
}

export default SignUpPage
