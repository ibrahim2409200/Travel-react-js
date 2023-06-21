import React,{useEffect} from 'react'
import "./footer.css"
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[]
  )

  return (
    <section data-aos='fade-up' className='footer'>
      <div className='secContents container'>
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
            <div className='contact'>
            <small>Contact us: 0900078601</small><br />
            <small>Email us at : Travel@trav.com</small>
            </div><br />
            <div>
            <FiFacebook className='icons'/>
            <FiInstagram className='icons'/>
            <FiTwitter className='icons'/>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer