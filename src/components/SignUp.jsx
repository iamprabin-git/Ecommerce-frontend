import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const title = "Register";
const socialTitle = "Login with Social Media"
const btnText = "Sign up Now"

const SignUp = () => {
    const [errorMessage, setErrorMessage]= useState("");
    const {signUpWithGmail, createUser} = useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();

    const handleRegister =()=>{
        signUpWithGmail().then((result) =>{
            const user = result.user;
            navigate(from, {replace: true})
        }).catch((error) =>{
            const errorMsg = error.message;
            setErrorMessage("Please Provide valid email and Password")
            
        })
    }

    const handleSignup =(event) =>{
        event.preventDefault();
        const form= event.target;
        // console.log(form)
        const email= form.email.value;
        const password= form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // console.log(email, password, confirmPassword)
        if(password !== confirmPassword){
            setErrorMessage("password deosnot Match! please provide the same password ")
        }else{
            setErrorMessage("");
            createUser(email, password ).then((userCredential) =>{
                const user= userCredential.user;
                alert("Account Created Succesfully Done!!")
                navigate(from, {replace: true})
            }).catch((error) => {
                console.log(error.message);
                alert(`${error.message}`)
            })
        }

    }

    

        return (
            <div className='login-section padding-tb section-bg'>
                <div className="container">
                    <div className="account-wrapper">
                        <h3>{title}</h3>
                        <form className='account-form' onSubmit={handleSignup}>
                            <div className='form-group'>
                                <input type="text" name="name" id="name" placeholder='Full Name' required />
                            </div>
                            <div className='form-group'>
                                <input type="email" name="email" id="email" placeholder='email Addres *' required />
                            </div>
                            <div className='form-group'>
                                <input type="Password" name="Password" id="password" placeholder='Password *' required />
                            </div>
                            <div className='form-group'>
                                <input type="Password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password *' required />
                            </div>
                            {/* showing message */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className='error-message text-danger mb-3'>
                                            {errorMessage}
                                        </div>
                                    )
                                }
                            </div>
                           
                            <div className='form-group'>
                                <button className='d-block lab-btn'><span>{btnText}</span></button>

                            </div>
                        </form>
                        {/* Account bottom */}
                        <div className='account-bottom'>
                            <span className='d-block cate pt-10'>
                             Have an Account? <Link to="/login">Login</Link>
                            </span>
                            <span className='or'>
                                <span>or</span>
                            </span>
                            {/* social login */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center'>
                                <li>
                                    <a href='/' className='github' onClick={handleRegister}><i className='icofont-github'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
                                </li>
                                <li>
                                    <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    export default SignUp
