import './Education.css';
import EduIcon from '../../assets/svg/education/eduImgWhite.svg';
import EduIconTwo from '../../assets/svg/education/eduPurple.svg'
const Education = () => {
  return (
    <>
    <div className='Edu-Parent'>
      <div className='edu-decs'>
        <h1>Education</h1>
        <div className='box-one'>
        <img src={EduIcon} alt="" />
        <span>2020-2022 </span>
        <p> Intermediate from B.I.E.K </p>
        </div>

        <div className='box-two'>
        <img src={EduIcon} alt="" />
        <span>2021-2023 </span>
       <p>Web & App Development Course By SMIT</p>
        </div>
      </div>
      
      
      
      <div className='edu-icon'>
       <img src={EduIconTwo} alt="" />
      </div>
    </div>
    </>
  )
}

export default Education;