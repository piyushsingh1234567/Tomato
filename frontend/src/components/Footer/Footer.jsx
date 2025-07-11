import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>Tomato is your ultimate food ordering destination — bringing your favorite meals from top restaurants straight to your doorstep. From spicy street food to comforting classics, we deliver it all with speed, flavor, and care.</p>
 <div className="footer-social-icon">
  <a href="https://www.facebook.com/share/16ypoW8LCa/" target="_blank" rel="noopener noreferrer">
    <img src={assets.facebook_icon} alt="Facebook" />
  </a>
  <a href="https://x.com/_piyushsingh_18?t=LGLpISKklQudGlV4j3yLtg&s=09" target="_blank" rel="noopener noreferrer">
    <img src={assets.twitter_icon} alt="Twitter (X)" />
  </a>
  <a href="https://www.linkedin.com/in/piyush-singh-1967a9281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <img src={assets.linkedin_icon} alt="LinkedIn" />
  </a>
</div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                     <h2>GET IN TOUCH</h2>
                     <ul>
                        <li>+919149295168</li>
                        <li>piyush05052000@gmail.com</li>
                     </ul>
            </div>
        </div>
        <hr />
<p className="footer-copyright">2025 Tomato. All rights reserved. Designed with ❤️ for food lovers everywhere. </p>
    </div>
  )
}

export default Footer