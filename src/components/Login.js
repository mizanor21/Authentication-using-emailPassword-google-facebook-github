import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/img/bg.png';
import googleIcon from '../assets/icons/google-removebg-preview.png';
import facebookIcon from '../assets/icons/facebook-removebg-preview.png';
import githubIcon from '../assets/icons/github-removebg-preview.png';
import { LockClosedIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from '../Authentication.init';


const Login = () => {
    const [email, setEmail] = useState(false)
    const [error, setError] = useState(false)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleSignInEmailAndPassword = event => {
        setError(false)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Successfully log in!')
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                alert('Successfully login!');
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                alert('Successfully login!');
                // console.log(user);
            })
            .catch(error => {
                console.error('error', error)
            })
    }
    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Successfully login!');
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setEmail(email);
    }
    const handleForgottenPassword = () => {
        setError(false)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Successfully reset password. Please check your email.')
            })
            .catch(error => {
                console.error(error);
                alert('Please enter your email, than press forget password')
                setError(error.message)
            })
    }
    return (
        <div className="m-2 mt-10 drop-shadow-xl">
            <div className="flex items-center justify-center md:visible">
                <img className='absolute w-1/4 right-24 top-10' src={backgroundImg} alt="" />
            </div>
            <div className='container relative mx-auto lg:w-1/3 p-2  sm:px-20 py-12 rounded-lg bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 '>
                <div className="flex justify-center">
                    <h1 className='text-4xl font-extrabold mb-10'>LOG IN</h1>
                    {/* <LockClosedIcon className="h-10 w-10 text-black" /> */}
                </div>
                <form onSubmit={handleSignInEmailAndPassword}>
                    <small className='text-red-600'>{error}</small>
                    <div className="form-control">
                        <label htmlFor="email" className=" borInput">Email address*</label>
                        <input onBlur={handleEmailBlur} type="text" placeholder="Email address" id='email' name='email' required className="input input-bordered input-md" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password" className=" borInput">Password*</label>
                        <input type="password" placeholder="Password" id='password' required className="input input-bordered md:input-md" />
                    </div>
                    <div className=" flex justify-between items-center my-7">
                        <button onClick={handleForgottenPassword} className="btn btn-link hover:text-red-600">Forget password?</button>
                        <button className="btn btn-active btn-secondary px-7">Log in</button>
                    </div>
                    <div className="">
                        <p className='text-center'>Or Login following using</p>
                        <div className=" flex justify-center items-center relative ">
                            <img onClick={handleGoogleSignIn} className='w-24 h-24 mr-20 cursor-pointer	' src={googleIcon} alt="" />
                            <img onClick={handleFacebookSignIn} className='w-22 h-11 absolute ml-7 pointer-events-auto cursor-pointer' src={facebookIcon} alt="" />
                            <img onClick={handleGithubSignIn} className='w-10 h-10 cursor-pointer' src={githubIcon} alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center my-7">
                        <div className="flex">
                            <p className='font-bold mr-1'>Are you new user? Please login </p>
                            <ArrowRightIcon className="h-6 w-6 text-black" />
                        </div>
                        <Link to={'/signup'}>
                            <button className="btn btn-outline btn-primary px-7">Sign up</button>
                        </Link>
                    </div>

                    <div className=" text-center font-light">
                        <p>We treat your personal data with care.</p>
                        <p>Please find our Privacy Policy here.</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;