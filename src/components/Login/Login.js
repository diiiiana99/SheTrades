import React from 'react'
import useLocalStorage from 'use-local-storage'
import {FaToggleOn} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import Fade from 'react-reveal'


import './Login.css'

function Login() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
      <Fade top>
    <div className="body" data-theme={theme}>
      <div className='login'>
        <div className='login-container'>
          <div className='top-section'>
              <FaGoogle/>
              <FaFacebook/>
              <FaLinkedinIn/>
              <FaTwitter/>
          </div>
          <p className='divider'><span className='or'>Or</span></p>
          <form className='login-form'>
            <label className='login-label'>E-mail</label>
            <input className='login-input' type='email' placeholder='Enter your email' />
            <label className='login-label'>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input className='login-input' type='checkbox' checked='checked' />
              <p className='login-text'>Remember Me</p>
            </div>
            <button className='login-button'>Log In</button>
          </form>
          <div className='bottom-section'>
            <p className='login-text'>Forget your password?</p>
            <a className='login-link' href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
          <FaToggleOn onClick={switchTheme} className='toggle'></FaToggleOn>
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default Login;