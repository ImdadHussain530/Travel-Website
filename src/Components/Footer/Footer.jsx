import React ,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4';
import {FiSend} from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} autoPlay muted loop type="video/mp4"></video>

      </div>
      <div className="secContent container">
        <div  className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
          <input data-aos="fade-up" type="text" placeholder='Enter e-mail address' />
          <button data-aos="fade-up" className="btn flex" type='submit'>
            Send<FiSend className="icon"/>
          </button>
        </div>
        </div>
        
        <div className="footerCard flex">
        <div  className="footerIntro flex">
          <div data-aos="fade-up" className="logoDiv">
            <a href="#" className='logo flex'>
             <MdTravelExplore className='icon'/> .Travel
            </a>
          </div>
          <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, soluta laudantium voluptates, optio temporibus corporis dicta non, similique odio aliquam magni quas blanditiis sapiente possimus dolorum eius earum reiciendis odit?
          </div>
          <div data-aos="fade-up" className="footerSocail flex">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            
          </div>
        </div>
        <div  className="footerLinks grid">
          {/* Group 1 */}
          <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Insurance
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Tourism
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Payment
            </li>
            
          </div>
          {/* Group 2 */}
          <div data-aos="fade-up" data-aos-duration="2500" className="linkGroup">
            <span className="groupTitle">
              PATNERS
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              CarRents
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              HostelWorld
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              TripAdviser
            </li>
            
          </div>
          {/* Group 3 */}
          <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
            <span className="groupTitle">
              Last Minute
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              London
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              California
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Indonesia
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Europe
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Oceania
            </li>
            
          </div>
        </div>
        <div className="footerDiv flex">
          <small>Best Travel Website</small>
          <small>@COPYRIGHTS RESERVED BY IMDAD-HUSSAIN</small>
        </div>
        </div>
        
      </div>
      
    </section>
  )
}
export default Footer