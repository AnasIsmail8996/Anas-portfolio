import './WhoIam.css'
import PersonIcon from '../../assets/svg/about/purpleTheme-boy.svg'
const WhoIam = () => {
  return (
    <>
    <div className='whoIam-parent'>
        <div className='H-Line'></div>
      <div className='whoIam-Dec'>
      <h1>Who I'm</h1>
        <p>My name's Anas_Ismail. I'm a Front_End developer based 
          in Pluton, Pakistan.</p>
        <p>During the day I work as a Front_End developer  at a local agency
           and in the evening I working on Node.JS   
           and utilize the time to built my own products.
            I spent my leisure hours lerning new skills and Research. 
            Right now I'm also trying a hand at other Front_End like , 
           & also I love to learn and explore new arenas.</p>
      </div>
      <div className='whoIam-img'>
        <img src={PersonIcon} alt="Persons_Icons"/>
      </div>
      
    </div>
    </>
  )
}

export default WhoIam;
