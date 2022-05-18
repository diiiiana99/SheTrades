import React, {useState} from 'react'
import './Hero.css'
import { Fade } from 'react-reveal'



const Hero = () => {


    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <Fade left>
                <div className='left'>
                    <p>Wall Street has never seen anything like us before</p>
                    <h1>Join this powerful community of women investing to build a better future for themselves — and for other women.</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'  >Learn More</button>
                    
                    </div>
                </div>
                </Fade>


                {/* Right Side */}
                <Fade right>
                <div className='right'>
                    <div className='img-container'>
                        <img className='landing-page-img'src='https://dotbig.com/img/1_iphone_eng.gif' alt=''/>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero