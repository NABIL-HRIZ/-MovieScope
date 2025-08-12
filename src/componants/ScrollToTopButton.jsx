import React, { useState, useEffect } from "react";
import '../styles/ScrollToTopButton.css'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "" : "hidden"}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-upload"></i>
    </button>
  );
};

export default ScrollToTopButton;
