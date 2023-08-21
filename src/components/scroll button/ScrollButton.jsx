import React, { useState, useEffect } from "react";
import './index.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log(window.scrollY);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <button
      className={`scroll-to-top-button ${isVisible ? "" : "not-visible"}`}
      onClick={scrollToTop}
    >

    <div className="move">
      <ArrowUpwardIcon />
    </div>

    </button>

  );
};

export default ScrollButton;