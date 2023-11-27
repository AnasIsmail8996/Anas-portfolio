
import './Contacts.css';
import BtnIocn from '../../assets/svg/social/arrow-right.svg';
import EmailIcon from '../../assets/svg/social/email.svg';
import TelephoneIcon from '../../assets/svg/social/telephone.svg';
import LocationIcon from '../../assets/svg/social/location.svg';
import FacebookIcon from '../../assets/svg/social/facebook-1.svg';
import GithubIcon from '../../assets/svg/social/github-1.svg';
import YoutubeIcon from '../../assets/svg/social/youtube.svg';
import LinkedinIcon from '../../assets/svg/social/linkedin-1.svg';
import WorkingIcon from '../../assets/svg/contacts/contactsBlue.svg'
const Contacts = () => {
  return (
    <>
    <div className="Contact-Parent">
      {/* Contact Form */}
      <div className='Contact-Form'>
      <div className='Contact-heading'><h1>Contacts</h1></div>
    <form action="#">
      <label htmlFor="Name" className='Name-Custom'>Name</label>
      <input type="text" name='name' className='input-form' required placeholder='Please Write Your Name' />
  <br />
  <br />
  <br />
  <br />

  <label htmlFor="email" className='Name-Custom'>Email</label>
  <input type="text" name='email' className='input-form'  required placeholder='Please Write Your Email' />
  
  <br />
  <br />
  <br />
  <br />
  
  
  <label htmlFor="Message" className='Name-Custom'>Message</label>
        <textarea name="Message" id="" cols="18" rows="5" className='input-form' required placeholder='Please Write Your Message' ></textarea>

<button className='btn-Sent'>Sent<img src={BtnIocn} alt="Click_On_Button" /></button></form></div>






      <div className='Contacts-Icon'>
        <div className='Contacts-Icon-One'>
          <button  className='Icons-Form'><img src={EmailIcon} alt="Email_Icon" /> </button>
             <p>anasismail0341 <br /> 8550691@gmail.com</p>
         </div>
         
        <div  className='Contacts-Icon-One'>
          <button className='Icons-Form'>
            <img src={TelephoneIcon} alt="TelePhone_Icon" />
          </button>
          <p>+923218996191</p>
        </div>
        <div  className='Contacts-Icon-One'>
          <button className='Icons-Form' > <img src={LocationIcon} alt="Location_Icon" /></button>
          <p>Karachi, Pakistan</p>
        </div>

        <div className='Contacts-Icon-One'>
        <a href="https://www.facebook.com/ismail.hasanzai.9/" target="_blank" rel="noopener noreferrer">  <button className='Icons-Form' >  <img src={FacebookIcon} alt="Facebook_Icon" /></button></a>
        <a href="https://github.com/anasismail8996" target="_blank" rel="noopener noreferrer">  <button className='Icons-Form' > <img src={GithubIcon} alt="Github_Icon" /></button></a>
         <a href="https://www.youtube.com/channel/UC3olSlkb6S33nRACaicbsTg" target="_blank" rel="noopener noreferrer"> <button className='Icons-Form' > <img src={YoutubeIcon} alt="Youtube_Icon" /></button></a>
        <a href="https://www.linkedin.com/in/anas-ismail-h-z-1b007a234/" target="_blank" rel="noopener noreferrer">  <button className='Icons-Form' > <img src={LinkedinIcon} alt="Linkedin_Icon" /></button></a>

        </div>
      </div>

      {/* column There */}
      <div ><img src={WorkingIcon} alt="Working_Icon" /></div>
    </div>
    </>
  )
}

export default Contacts;