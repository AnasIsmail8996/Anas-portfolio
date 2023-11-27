import './Skills.css'
import Marquee from "react-fast-marquee";
import BIcon from '../../assets/svg/skills/bootstrap.svg';
import ReactIcon from '../../assets/svg/skills/react.svg';
import CssIcon from '../../assets/svg/skills/css.svg';
import FigmaIcon from '../../assets/svg/skills/figma.svg';
import Firebase from '../../assets/svg/skills/firebase.svg';
import HtmlIcon from '../../assets/svg/skills/html.svg';
import JavascriptIcon from '../../assets/svg/skills/javascript.svg';
import MaterialuiIcon from '../../assets/svg/skills/materialui.svg';
import MongoDBIcon from '../../assets/svg/skills/mongoDB.svg';
import NextJSIcon from '../../assets/svg/skills/nextJS.svg';
import Vitejs from '../../assets/svg/skills/vitejs.svg';
import Reactnative from '../../assets/svg/skills/reactnative.png';
const Skills = () => {
  return (
    <>
    <div className='Skills-Parent'>
      <div className='skills-Heading'>
         <h1>Skills</h1>
        </div>
                     <div className='skillsContainer'>
                     <div className="skill--scroll">
                       <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="right">
                        <div className="skill--box"><img src={BIcon} alt="Bootstrap_Icon" />
                        <h3>Bootstrap</h3>
                        </div>
                        <div className="skill--box"><img src={ReactIcon} alt="React_Icon" />
                        <h3>React</h3>
                        </div>
                        <div className="skill--box"><img src={CssIcon} alt="Css_Icon" />
                        <h3>Css</h3>
                        </div>
                        <div className="skill--box"><img src={FigmaIcon} alt="Figma_Icon" />
                        <h3>Figma</h3>
                        </div>
                        <div className="skill--box"><img src={Firebase} alt="Firebase_Icon" />
                        <h3>Firebase</h3>
                        </div>
                        <div className="skill--box"><img src={HtmlIcon} alt="Html_Icon" />
                        <h3>HTML</h3>
                        </div>
                        <div className="skill--box"><img src={JavascriptIcon} alt="Javascript_Icon" />
                        <h3>Javascript</h3>
                        </div>
                        <div className="skill--box"><img src={MaterialuiIcon} alt="Materialui_Icon" />
                        <h3>Materialui</h3>
                        </div>
                        <div className="skill--box"><img src={MongoDBIcon} alt="MongoDB_Icon" />
                        <h3>MongoDB</h3>
                        </div>
                        <div className="skill--box"><img src={NextJSIcon} alt="NextJS_Icon" />
                        <h3>NextJS</h3>
                        </div>
                        <div className="skill--box"><img src={Vitejs} alt="vitejs_Icon" />
                        <h3>Vite.js</h3>
                        </div>
                        <div className="skill--box"><img src={Reactnative} alt="ReactNative_Icon" />
                        <h3>ReactNative</h3>
                        </div>
                        
                       
                     
     
       
      </Marquee>
                          </div>
   </div>
    </div>
    </>
  )
}

export default Skills;

