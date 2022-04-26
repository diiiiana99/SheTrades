import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Fade } from 'react-reveal'
import {FaToggleOn} from 'react-icons/fa'
import useLocalStorage from 'use-local-storage'



const Navbar = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme)
    }
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
      <Fade top>
        <div className='header'>
            <div className='container'>
                <h1>SHE<span className='primary'>TRADES</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/featured'>Featured</a>
                    </li>
                    <li>
                        <a href='/login'>Sign In</a>
                    </li>

                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Navbar