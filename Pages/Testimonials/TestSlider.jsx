import Slider from "react-slick";

//import "./Testimonials.css";
     import imageCarousel from "../../assets/svg/testimonials/boy2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    
    <div>
        <Slider {...settings}>
          <div className="parent-Test">
         <div className="carousel-Imge"><img src={imageCarousel} alt="Persons-Icon" /></div>
          <div className="carousel-One">
         <p>
         I&apos;m Anas Isamail I&apos;m Front_End Developer Working an Pluton.ltd As a React.JS Internship 
         </p>
       </div>
          </div>
          {/* Two */}
          <div>
          <div className="parent-Test">
         <div className="carousel-Imge-two"><img src={imageCarousel} alt="Persons-Icon" /></div>
          <div className="carousel-One">
         <p>
         I&apos;m Anas Isamail I&apos;m Front_End Developer Working an Pluton.ltd As a React.JS Internship 
         </p>
       </div>
          </div>
          </div>

          {/* Three */}
          
          <div>
          <div className="parent-Test">
         <div className="carousel-Imge-there"><img src={imageCarousel} alt="Persons-Icon" /></div>
          <div className="carousel-One">
         <p>
         I&apos;m Anas Isamail I&apos;m Front_End Developer Working an Pluton.ltd As a React.JS Internship 
         </p>
       </div>
          </div>
          </div>
          
        </Slider>
      </div>
  );
};

export default TestSlider;
