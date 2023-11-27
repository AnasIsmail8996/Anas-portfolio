import './Project.css';
import proIconOne from '../../assets/svg/projects/five.svg';
import PlayCircle from '../../assets/svg/projects/play-circle-svgrepo-com.svg';
import CodeCircle from '../../assets/svg/projects/code-circle-svgrepo-com.svg';
import proIocnTwo from '../../assets/svg/projects/two.svg';
import proIocnThere from '../../assets/svg/projects/six.svg';

const Project = () => {
  return (
    <>
    <div className='Pro-parent'>
   <div className='Pro-Heading'>
    <h1>Projects</h1>
   </div>

{/* card starting from here */}

<div className='Pro-Card'>

  <div className='card-one'>
    <h3>Material_UI_Ecommerce</h3>
    <img src={proIconOne} alt="Project_Icon_One" />
    <div className='Icon-Svg'>
      <span ><a href="http://aihz-mui.netlify.app/" target="_blank" rel="noopener noreferrer">
       <img src={PlayCircle} alt="Watch_Project" />
       </a>
       </span>
      <span> <a href="http://github.com/AnasIsmail8996/Aihz-Ecom-MUI" target="_blank" rel="noopener noreferrer">
          <img src={CodeCircle} alt="Watch_Code" />
        </a>
          </span>
    </div>
  </div>

  {/* card Two Starting from here */}
  <div className='card-two'>
  <h3>React_Ecommerce_Products</h3>
  <img src={proIocnTwo} alt="React_Ecommerce_Products" />
  <div className='Icon-Svg'>
      <span ><a href="https://aihz-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">
       <img src={PlayCircle} alt="Watch_Project" />
       </a>
       </span>
      <span> <a href="https://github.com/AnasIsmail8996/aihz-ecommerce" target="_blank" rel="noopener noreferrer">
          <img src={CodeCircle} alt="Watch_Code" />
        </a>
          </span>
    </div>
  </div>



{/* Third Card starting from here */}

  <div className='card-there'>
  <h3>Cars_Products_App</h3>
  <img src={proIocnThere} alt="Cars_Products_App" />
  <div className='Icon-Svg'>
      <span ><a href="https://aihz-cars.netlify.app/" target="_blank" rel="noopener noreferrer">
       <img src={PlayCircle} alt="Watch_Project" />
       </a>
       </span>
      <span> <a href="https://github.com/AnasIsmail8996/ecommerce-cars" target="_blank" rel="noopener noreferrer">
          <img src={CodeCircle} alt="Watch_Code" />
        </a>
          </span>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Project;
