import React from 'react'
import './Footer.scss'
import Banner from '../assets/blake-wisz-GFrBMipOd_E-unsplash.png'
import Logo from '../assets/noun_cloth_2129414.png'
import Facebook from '../assets/002-facebook-logo.png'
import Twitter from '../assets/001-twitter-logo-silhouette.png'
import Linkedin from '../assets/004-linkedin-logo.png'
import Instagram from '../assets/instagram (1).png'
import Youtube from '../assets/005-youtube.png'

function Footer() {
    return (
        <div className='footer'>
            <hr />
            <div className='footer__Banner' style={{backgroundImage:`url(${Banner})`}}>
                <h3>Subscribe to our newsletter and receive exclusive offers every week</h3>
                <input type='search' />
                <button>Subscribe</button>
            </div>

            <div className='footer__Info'>
                <div className='footer_Info1'>
                    <div className='footer__Logo'>
                        <img src={Logo} alt='logo' />
                        <span>E-Shop</span>
                    </div>
                    <p>House My Brand designs clothing for the young, the old &
everyone in between – but most importantly, for the fashionable</p>
                    <div className='footer__Social'>
                        <img src={Facebook} alt='facebook logo' />
                        <img src={Twitter} alt='twitter logo' />
                        <img src={Linkedin} alt='Linkedin logo' />
                        <img src={Instagram} alt='Instagram logo' />
                        <img src={Youtube} alt='Youtube logo' />
                        

                    </div>
                </div>
                <div className='footer__Info2'>
                    <div>
                        <span>Shopping Online</span>
                    </div>
                    <div>
                        <span>Order Status</span>
                        <span>Shipping and Delivery</span>
                        <span>returns</span>
                        <span>Payment Options</span>
                        <span>Contact Us</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
