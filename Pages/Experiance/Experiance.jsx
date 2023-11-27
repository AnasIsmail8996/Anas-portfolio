import './Experiance.css'
import ExpIcon from '../../assets/svg/experience/expPurple.svg';
import ExpImgWhiteIcon from '../../assets/svg/experience/expImgWhite.svg';

const Experiance = () => {
  return (
    <>
    <div className='Exp-parent'>
      <div className='exp-Icon'>
      <img src={ExpIcon} alt="Experince_Icon" />
      </div>

      <div className='exp-Card'>
        <h1>Experiance</h1>
           <div className='card-first'>
            <div className='img-parents'>
         <img src={ExpImgWhiteIcon} alt="ExpImgWhite_Icon" />
            </div>
         <span>2023</span>
         <p>Front_End Developer Internship Pluton.ltd</p>
           </div>
      
      </div>
    </div>
    </>
  )
}

export default Experiance;
