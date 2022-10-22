import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/img/bg.png';
import googleIcon from '../assets/icons/google-removebg-preview.png';
import facebookIcon from '../assets/icons/facebook-removebg-preview.png';
import githubIcon from '../assets/icons/github-removebg-preview.png';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, getAuth } from 'firebase/auth'
import app from '../Authentication.init';

const Signup = () => {
    const [email, setEmail] = useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const handleEmailPasswordSignUp = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        setEmail(email);
        // console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Successfully sign up!')
                verifyEmailAndPassword();
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    const verifyEmailAndPassword = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your email and verify account!')
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
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
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <div>
            <div className="m-2 mt-10 drop-shadow-xl">
                <div className="flex items-center justify-center  md:visible">
                    <img className='absolute w-1/4 right-24 top-10' src={backgroundImg} alt="" />
                </div>
                <div className='container relative mx-auto lg:w-1/3 p-2  sm:px-20 py-12 rounded-lg bg-gradient-to-r to-pink-300 from-indigo-300 via-purple-400 '>
                    <h1 className='text-4xl font-extrabold mb-10 text-center'>Register </h1>
                    <form onSubmit={handleEmailPasswordSignUp}>
                        <div className="form-control">
                            <label htmlFor="email" className=" borInput">Email address*</label>
                            <input type="text" placeholder="Email address" id='email' name='email' required className="input input-bordered input-md" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" className=" borInput">Password*</label>
                            <input type="password" placeholder="Password" id='password' required className="input input-bordered md:input-md" />
                        </div>
                        <div className=" flex justify-end hover:justify-start items-center my-7">
                            <button className="btn btn-active btn-secondary px-7">Sign up</button>
                        </div>
                        <div className="">
                            <p className='text-center'>Or Signup following using</p>
                            <div className=" flex justify-center items-center relative ">
                                <img onClick={handleGoogleSignIn} className='w-24 h-24 mr-20 cursor-pointer	' src={googleIcon} alt="" />
                                <img onClick={handleFacebookSignIn} className='w-22 h-11 absolute ml-7 pointer-events-auto cursor-pointer' src={facebookIcon} alt="" />
                                <img onClick={handleGithubSignIn} className='w-10 h-10 cursor-pointer' src={githubIcon} alt="" />
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center my-7">
                            <p className='font-bold'>Already registered?</p>
                            <Link to={'/login'}>
                                <button className="btn btn-outline btn-primary px-7">Log in</button>
                            </Link>
                        </div>
                        <div className=" text-center font-light">
                            <p>We treat your personal data with care.</p>
                            <p>Please find our Privacy Policy here.</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;