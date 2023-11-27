import './Testimonials.css';
import TestSlider from './TestSlider';



const Testimonials = () => {
  


  return (
    <>
    <div className='Test-Parent'>
      <div className='Test-Heading'><h1>Testimonials</h1></div>
      <div className='carousel-parent'>
    <TestSlider/>
      </div>
        
    </div>
    </>
  )
}

export default Testimonials;