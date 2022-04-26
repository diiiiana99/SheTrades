import React, {useState} from 'react'
import './SignUp.css'
import { Fade } from 'react-reveal'
import Modal from '../../components/Modal/Modal'




const Signup = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <Fade bottom>
                <div className='left'>
                    <img src='https://cryptopro.app/wp-content/uploads/2019/10/iPhone-favorites-547x1024.png' alt='' />
                </div>
                </Fade>

                {/* right */}
                <Fade right>
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn' onClick={() => setOpenModal(true)}>Learn More</button>
                        <Modal  open={openModal} 
                        onClose={() => setOpenModal(false)} />
                    </div>
                </div>
                </Fade>

            </div>
        </div>
    )
}

export default Signup