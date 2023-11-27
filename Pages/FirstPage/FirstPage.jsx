import './FirstPage.css'
//import Anas from '../../assets/Anas_Ismail_hz.png'
import { MdMenu } from "react-icons/md";
import { IoPersonSharp,IoDocumentText,IoSettings } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaTwitterSquare , FaYoutube, FaFacebook,   FaHome ,FaFolderOpen } from "react-icons/fa";
 import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
 import Resume from '../../assets/resume/AnasIsmail-UpdatedResume.pdf';

const FirstPage = () => {



  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  
  return (
    <>


<div className={`modal ${modalOpen ? 'open' : ''}`}>
      
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="modal-body">
         <Link to='/firstpage'>  <button><FaHome/> Home</button></Link> 
         <Link to='/whoiam'>    <button> <IoPersonSharp/> About</button></Link>
         <Link to='/education'>  <button><IoDocumentText/> Resume</button></Link>
         <Link to='/services'>     <button> <IoSettings/> Services</button></Link>
         <Link to='/project'>    <button><FaFolderOpen/> Blog</button></Link>
         <Link to='/contacts'>    <button> <BsFillTelephoneFill/> Contact</button></Link>
        </div>
      </div>
    </div>




   <div className='containerParent'>
    <div className='container-Left'>
      <h5>Anas_Ismail</h5>
      <div className='img-owner'>
        <img src={''} alt="" />
      </div>
      <div className='icons'>
 <a href="https://www.linkedin.com/in/anas-ismail-h-z-1b007a234/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>  
      <a  href="https://github.com/anasismail8996" target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
    <a  href="http://" target="_blank" rel="noopener noreferrer"> <FaTwitterSquare /></a> 
     <a  href="https://www.youtube.com/channel/UC3olSlkb6S33nRACaicbsTg" target="_blank" rel="noopener noreferrer"> <FaYoutube /></a>
    <a  href="https://www.facebook.com/ismail.hasanzai.9/" target="_blank" rel="noopener noreferrer">  <FaFacebook /></a> 
      </div>
       </div>

{/* Right Container  */}

      <div className="container-Right">
        <div className='menu-Icons'>
        <button  onClick={openModal}><MdMenu /></button> 
        </div>
        <div className='devData'>
          <p>Front_End Developer :</p>
          <h1>Anas_Ismail</h1>
          <p>There wasn't a bird in the sky,
             but that was not what caught her attention. It was the clouds.
              The deep green that isn't the color of clouds, but came with these. 
            She knew what was coming and she hoped she was prepared.</p>
        <div className='btn-Parent'>
         <a href={Resume} download> <button className='dawnload-btn'>   Dawanload CV </button></a>
       <Link to='/contacts'> <button className='contact-btn' >Contact</button></Link> 

         

        </div>
        </div>
      </div>
       
     
    
   </div>


      

    
    
 
    </>
  )
}

export default FirstPage;


