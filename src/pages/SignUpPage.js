import React, { useCallback, useEffect, useState } from 'react'
import * as FormAxiosService from '../api/FormAxiosService'
import InputComponent from '../components/InputComponent';
import { showErrorMsg } from '../common/Common';
import * as Validation from '../common/Validation';

const SignUpPage = ({ loginData, onChangeHandler, switchPages}) => {

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
            if (response != null && response.status === 200) {
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
        const isValidUserName = Validation.validateString(loginData.userName, 'userName', 'Invalid Username');
        const isValidPassword = Validation.validateString(loginData.password, 'password', 'Invalid Password');
        if (!isValidUserName || !isValidPassword) {
            return;
        }
        saveUser();
    }

    return (
        <>
            <div className='container'>
                <form className='mt-5' onSubmit={signUpHandle}>
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
                    <InputComponent
                        type='password'
                        placeholder='Confirm your password'
                        labelName='Confirm Password'
                        name='confirmPassword'
                        id='confirmPassword'
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <button className='btn btn-primary' type='submit' id='signup' disabled={!isPasswordMatch}>Sign Up</button>
                </form>

                <div>
                    <button className='btn btn-primary' name='login' onClick={switchPages}>Login</button>
                </div>
            </div>
        </>
    )
}

export default SignUpPage
