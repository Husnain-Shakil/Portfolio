import React from 'react'
import Slider from "react-slick";
import ProjectCard from './project-card/ProjectCard';
import projectCardData  from '../../constants';

const Carousel = () => {

    const settings = {
      className: "center",
      centerMode: true,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              cssEase: "linear",
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          }
        ]
      };

  return (
    <>

    <div className="carousel">

      <Slider {...settings}>

        {projectCardData.map((item, index) => {
          return <ProjectCard key={index} src= {item.img} title= {item.title} tech= {item.technologies} url= {item.url}/>
        })}
          
      </Slider>

    </div>
    </>
  )
}

export default Carousel
