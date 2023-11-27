import './Services.css'
import HtmlIcon from '../../assets/svg/social/html-file-type-svgrepo-com.svg';
import CssIcon from '../../assets/svg/social/css.svg';
import JavasciptIcon from '../../assets/svg/social/javascript-file-svgrepo-com.svg';
import  FirebaseIcon from '../../assets/svg/social/firebase-svgrepo-com.svg';
import  NodeJsIcon from '../../assets/svg/social/nodejs.svg';
import  NextJsIcon from '../../assets/svg/social/nextjs-svgrepo-com.svg';
import MuiIcon from '../../assets/svg/social/material-ui-svgrepo-com.svg';
import ReactIcon from '../../assets/svg/social/react-svgrepo-com.svg';
const Services = () => {
  return (
    <>
    <div className='Ser-Parent'>
     <div className='Ser-Heading-Text'>
      <h1>Services</h1>
      <p>These are some of the services I offer. Reach out to me if I can help you <br /> with any!</p>
     </div>
      <div className='Card-Parent'>
           <div className='card-One'>
              <img className='Card-img'  src={HtmlIcon} alt="Html_Icon" />
              <h2 className='Card-Text'>Html</h2>
           </div>
           <div className='card-Two'>
            <img className='Card-img' src={CssIcon} alt="Css_Icon" />
            <h2 className='Card-Text'>Css</h2>
           </div>
           <div className='card-There'>
           <img className='Card-img' src={JavasciptIcon} alt="Javascript_Icon" />
            <h2 className='Card-Text'>JavaScript</h2>
           </div>
           <div className='card-Four'>
           <img className='Card-img' src={FirebaseIcon} alt="FireBase_Icon" />
            <h2 className='Card-Text'>Firebase</h2>
           </div>
           <div className='card-Five'>
           <img className='Card-img' src={NodeJsIcon} alt="Node.JS_Icon" />
            <h2 className='Card-Text'>Node.JS</h2>
           </div>
           <div className='card-Six'>
           <img className='Card-img' src={NextJsIcon} alt="NextJs_Icon" />
            <h2 className='Card-Text'>Next.JS</h2>
           </div>
           <div className='card-Seven'>
           <img className='Card-img' src={MuiIcon} alt="Meterial_UI_Icon" />
            <h2 className='Card-Text'>MUI</h2>
             </div>
           <div  className='card-Eight'>
           <img className='Card-img' src={ReactIcon} alt="" />
            <h2 className='Card-Text'>React</h2>
           </div>
      </div>
    </div>
    </>
  )
}

export default Services;