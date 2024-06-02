import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_icon from '../Assets/insta_icon.png'
import pin_icon from '../Assets/pin_icon.png'
import wa_icon from '../Assets/wa_icon.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} style={{ height: '70px' }} alt="" />
                <p>Willow & Thread</p>
            </div>
            <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta_icon} style={{ height: '28px', marginTop:'2px'}} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pin_icon} style={{ height: '32px' }} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={wa_icon} style={{ height: '30px' }} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}
